import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div style={{backgroundColor:'#facc15',color:'#000000'}} className="text-center py-2 px-4">
        <p className="font-bold text-sm">
          🏷️ This domain is for sale! Contact us at{' '}
          <a href="mailto:info@selectauthority.com" className="underline font-extrabold hover:opacity-70">
            info@selectauthority.com
          </a>{' '}
          for details.
        </p>
      </div>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
