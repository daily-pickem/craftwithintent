const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === 'www.craftwithintent.com') {
      url.hostname = 'craftwithintent.com';
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === '/api/subscribe' && request.method === 'POST') {
      return handleSubscribe(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};

async function handleSubscribe(request, env) {
  let payload = {};
  const ct = request.headers.get('content-type') || '';
  if (ct.includes('application/json')) {
    payload = await request.json().catch(() => ({}));
  } else {
    const fd = await request.formData().catch(() => null);
    if (fd) payload = Object.fromEntries(fd.entries());
  }

  // Honeypot trap
  if (payload.website) {
    return json({ ok: true }, 200);
  }

  const email = String(payload.email || '').trim().toLowerCase();
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return json({ ok: false, error: 'Invalid email address' }, 400);
  }

  const subscribedAt = new Date().toISOString();

  if (env.SUBSCRIBERS_R2) {
    const key = `craftwithintent/subscribers/${encodeURIComponent(email)}.json`;
    const existing = await env.SUBSCRIBERS_R2.head(key);
    if (!existing) {
      await env.SUBSCRIBERS_R2.put(
        key,
        JSON.stringify({ email, subscribedAt, source: payload.source || 'web' }),
        { httpMetadata: { contentType: 'application/json' } }
      );
    }
  }

  if (env.DB) {
    await env.DB.prepare(
      'CREATE TABLE IF NOT EXISTS subscribers (email TEXT PRIMARY KEY, created_at TEXT NOT NULL)'
    ).run();
    await env.DB.prepare(
      'INSERT OR IGNORE INTO subscribers (email, created_at) VALUES (?, ?)'
    )
      .bind(email, subscribedAt)
      .run();
  }

  if (env.RESEND_API_KEY) {
    const fromAddr = env.RESEND_FROM || 'Craft with Intent <dispatch@dailypickgames.com>';
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromAddr,
        reply_to: 'quip@dailypickgames.com',
        to: [email],
        subject: "You're on The Dispatch — Craft with Intent",
        text: "Thanks for joining Craft with Intent. You'll get one email when something ships, breaks, or earns real signal.\n\nhttps://craftwithintent.com",
      }),
    }).catch(() => {});
  }

  if (!ct.includes('application/json')) {
    return new Response("You're in. Check your inbox to confirm.", {
      status: 200,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }
  return json({ ok: true }, 200);
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
