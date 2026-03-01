export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Handle waitlist API
    if (url.pathname === '/api/waitlist' && request.method === 'POST') {
      return handleWaitlist(request, env);
    }

    // Serve static assets for everything else
    return env.ASSETS.fetch(request);
  }
};

async function handleWaitlist(request, env) {
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const { email } = await request.json();

    if (!email || !isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: 'Correo electrónico inválido' }),
        { status: 400, headers }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check if already registered
    const existing = await env.WAITLIST.get(normalizedEmail);
    if (existing) {
      return new Response(
        JSON.stringify({ success: true, message: 'Ya estás en la lista' }),
        { status: 200, headers }
      );
    }

    // Store in KV
    await env.WAITLIST.put(normalizedEmail, JSON.stringify({
      email: normalizedEmail,
      timestamp: new Date().toISOString(),
    }));

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers }
    );
  } catch {
    return new Response(
      JSON.stringify({ error: 'Error interno del servidor' }),
      { status: 500, headers }
    );
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
