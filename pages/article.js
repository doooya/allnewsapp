import Head from 'next/head'
import { useRouter } from 'next/router'
import { format } from 'date-fns'

export default function ArticlePage() {
  const router = useRouter()
  const { title, description, url, urlToImage, publishedAt, source } = router.query

  return (
    <>
      <Head><title>{title} — AllNewsApp</title></Head>
      <div className="max-w-3xl mx-auto px-4 py-12">
        {urlToImage && <img src={urlToImage} alt={title} className="w-full rounded-xl mb-6 shadow-md" />}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded-full">{source}</span>
          {publishedAt && <span className="text-xs text-gray-400">{format(new Date(publishedAt), 'MMM d, yyyy')}</span>}
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">{title}</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" style={{backgroundColor:'#dc2626',color:'#ffffff',display:'inline-flex',padding:'12px 24px',borderRadius:'8px',fontWeight:'700',textDecoration:'none'}}>Read Full Article on {source}</a>
      </div>
    </>
  )
}
