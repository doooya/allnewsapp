import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-white text-xl font-extrabold">AllNewsApp.com</span>
            <p className="text-sm mt-1">Your source for the latest news from around the world.</p>
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-800 text-center text-xs">
          <p>© 2026 AllNewsApp.com. All rights reserved. News content provided by NewsAPI.org.</p>
          <p className="mt-1">🏷️ This domain is for sale —{' '}
            <a href="mailto:info@selectauthority.com" className="text-red-400 hover:text-red-300 underline">info@selectauthority.com</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
