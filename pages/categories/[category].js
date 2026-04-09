import { useState } from 'react'
import Head from 'next/head'
import NewsCard from '../../components/NewsCard'

export default function CategoryPage({ articles, category }) {
  const [news, setNews] = useState(articles)

  return (
    <>
      <Head><title>{category} News — AllNewsApp</title></Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 capitalize">{category} News</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {news.length > 0 ? news.map((article, i) => (
            <NewsCard key={i} article={article} />
          )) : (
            <p className="text-gray-500 col-span-4 text-center py-20">No news found.</p>
          )}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const { category } = params
  try {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=20&apiKey=${process.env.NEWS_API_KEY}`)
    const data = await res.json()
    return { props: { articles: data.articles || [], category } }
  } catch (e) {
    return { props: { articles: [], category } }
  }
}
