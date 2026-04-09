export default async function handler(req, res) {
  const { category, search } = req.query
  const apiKey = process.env.NEWS_API_KEY

  try {
    let url
    if (search) {
      url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(search)}&pageSize=20&sortBy=publishedAt&language=en&apiKey=${apiKey}`
    } else if (category && category !== 'general') {
      url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(category)}&pageSize=20&sortBy=publishedAt&language=en&apiKey=${apiKey}`
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apiKey=${apiKey}`
    }
    const response = await fetch(url)
    const data = await response.json()
    res.status(200).json({ articles: data.articles || [] })
  } catch (e) {
    res.status(500).json({ articles: [] })
  }
}
