function next() {
  return new Response(null, {
    headers: { 'x-middleware-next': '1' },
  });
}

function unauthorized() {
  return new Response('This proposal is private.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Vinyly proposal", charset="UTF-8"',
      'Cache-Control': 'no-store',
    },
  });
}

function safeEqual(a, b) {
  const left = String(a);
  const right = String(b);
  const len = Math.max(left.length, right.length);
  let mismatch = left.length === right.length ? 0 : 1;
  for (let i = 0; i < len; i++) {
    mismatch |= (left.charCodeAt(i) || 0) ^ (right.charCodeAt(i) || 0);
  }
  return mismatch === 0;
}

export default function proxy(request) {
  const password = process.env.SITE_PASSWORD;
  if (!password) return unauthorized();

  const header = request.headers.get('authorization') || '';
  if (!header.startsWith('Basic ')) return unauthorized();

  let decoded = '';
  try {
    decoded = atob(header.slice(6));
  } catch {
    return unauthorized();
  }

  const sep = decoded.indexOf(':');
  if (sep < 0) return unauthorized();

  const user = decoded.slice(0, sep);
  const pass = decoded.slice(sep + 1);
  if (safeEqual(user, 'vinyly') && safeEqual(pass, password)) return next();
  return unauthorized();
}
