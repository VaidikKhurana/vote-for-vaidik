let voteCount = {
  Vaidik: 0,
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { candidate } = req.body;

    if (candidate && voteCount[candidate] !== undefined) {
      voteCount[candidate]++;
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ error: 'Invalid candidate' });
    }
  }

  // (Optional) Allow GET to fetch vote count (for dev only)
  if (req.method === 'GET') {
    return res.status(200).json(voteCount);
  }

  res.status(405).json({ error: 'Method not allowed' });
}
