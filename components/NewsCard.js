import { format } from 'date-fns'
import { useRouter } from 'next/router'

export default function NewsCard({ article }) {
  const router = useRouter()
  const { title, description, url, urlToImage, publishedAt, source } = article

  function handleClick() {
    router.push({
      pathname: '/article',
      query: {
        title,
        description,
        url,
        urlToImage,
        publishedAt,
        source: source?.name,
      }
    })
  }

  return (
    <div onClick={handleClick} className="news-card flex flex-col group cursor-pointer">
      {urlToImage && (
        <div className="overflow-hidden h-48">
          <img
            src={urlToImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>
      )}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
            {source?.name || 'News'}
          </span>
          {publishedAt && (
            <span className="text-xs text-gray-400">
              {format(new Date(publishedAt), 'MMM d, yyyy')}
            </span>
          )}
        </div>
        <h2 className="font-bold text-gray-900 text-sm leading-snug mb-2 group-hover:text-red-600 transition-colors line-clamp-3">
          {title}
        </h2>
        {description && (
          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mt-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
