export default async function handler(req, res) {
  const { category, search } = req.query
  const apiKey = process.env.NEWS_API_KEY

  try {
    let url
    if (search) {
      url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(search)}&pageSize=20&sortBy=publishedAt&apiKey=${apiKey}`
    } else {
      const cat = category || 'general'
      url = `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&pageSize=20&apiKey=${apiKey}`
    }
    const response = await fetch(url)
    const data = await response.json()
    res.status(200).json({ articles: data.articles || [] })
  } catch (e) {
    res.status(500).json({ articles: [] })
  }
}
