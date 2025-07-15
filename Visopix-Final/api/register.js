export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.body || {};
    return res.status(200).json({ success: true, user: { name, email } });
  }
  res.status(405).end();
}