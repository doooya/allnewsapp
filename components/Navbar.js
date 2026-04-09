import Link from 'next/link'

const CATEGORIES = ['World', 'Technology', 'Business', 'Sports', 'Entertainment', 'Health', 'Science']

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-red-600 text-2xl font-extrabold tracking-tight">All<span className="text-gray-900">News</span><span className="text-red-600">App</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {CATEGORIES.map((cat) => (
              <Link key={cat} href={`/categories/${cat.toLowerCase()}`} className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
