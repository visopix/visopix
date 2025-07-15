export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body || {};
    if (email === 'visopix2025@gmail.com' && password === 'admin123') {
      return res.status(200).json({ success: true, role: "admin" });
    }
    return res.status(401).json({ success: false, message: "Credenciais inválidas" });
  }
  res.status(405).end();
}