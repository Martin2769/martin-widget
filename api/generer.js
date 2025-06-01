export default function handler(req, res) {
  const { navn, brukernavn, type, dato } = req.query;

  const lenke = `https://martin-widget.vercel.app/widget/?navn=${encodeURIComponent(navn)}&brukernavn=${encodeURIComponent(brukernavn)}&type=${encodeURIComponent(type)}&dato=${encodeURIComponent(dato)}`;

  res.status(200).json({ lenke });
}
