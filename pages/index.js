import { useState } from 'react'
import Head from 'next/head'
import NewsCard from '../components/NewsCard'

const CATEGORIES = ['General', 'Technology', 'Business', 'Sports', 'Entertainment', 'Health', 'Science']

export default function HomePage({ articles }) {
  const [activeCategory, setActiveCategory] = useState('General')
  const [news, setNews] = useState(articles)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  async function fetchNews(cat) {
    setLoading(true)
    setActiveCategory(cat)
    setNews([])
    try {
      const res = await fetch(`/api/news?category=${cat.toLowerCase()}&t=${Date.now()}`)
      const data = await res.json()
      setNews(data.articles || [])
    } catch (e) {
      console.error(e)
    }
    setLoading(false)
  }

  async function handleSearch(e) {
    e.preventDefault()
    if (!search.trim()) return
    setLoading(true)
    setActiveCategory('')
    setNews([])
    try {
      const res = await fetch(`/api/news?search=${encodeURIComponent(search)}&t=${Date.now()}`)
      const data = await res.json()
      setNews(data.articles || [])
    } catch (e) {
      console.error(e)
    }
    setLoading(false)
  }

  return (
    <>
      <Head>
        <title>AllNewsApp — Latest News from Around the World</title>
        <meta name="description" content="Stay updated with the latest breaking news from around the world." />
      </Head>

      <section style={{background:'linear-gradient(to right, #dc2626, #991b1b)'}} className="text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">All The News. <span style={{color:'#fca5a5'}}>One Place.</span></h1>
          <p style={{color:'#fecaca'}} className="text-lg mb-8">Breaking news, latest updates, and top stories from around the world.</p>
          <form onSubmit={handleSearch} className="flex gap-2 max-w-xl mx-auto">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search news..." className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none" />
            <button type="submit" className="px-6 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-red-50 transition-colors">Search</button>
          </form>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => fetchNews(cat)} className={`category-btn ${activeCategory === cat ? 'category-btn-active' : 'category-btn-inactive'}`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {loading ? (
          <div className="text-center py-20">
            <div style={{borderColor:'#dc2626',borderTopColor:'transparent'}} className="inline-block w-10 h-10 border-4 rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-500">Loading latest news...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {news.length > 0 ? news.map((article, i) => (
              <NewsCard key={i} article={article} />
            )) : (
              <p className="text-gray-500 col-span-4 text-center py-20">No news found.</p>
            )}
          </div>
        )}
      </section>
    </>
  )
}

export async function getServerSideProps() {
  try {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apiKey=${process.env.NEWS_API_KEY}`)
    const data = await res.json()
    return { props: { articles: data.articles || [] } }
  } catch (e) {
    return { props: { articles: [] } }
  }
}
