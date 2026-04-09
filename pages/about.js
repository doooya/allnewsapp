import Head from 'next/head'
export default function About() {
  return (
    <>
      <Head><title>About — AllNewsApp</title></Head>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">About AllNewsApp</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">AllNewsApp is a real-time news aggregator bringing you the latest breaking news from around the world.</p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">We cover Technology, Business, Sports, Entertainment, Health, Science and General news — all in one place.</p>
        <p className="text-gray-600 text-lg leading-relaxed">For enquiries contact us at <a href="mailto:info@selectauthority.com" className="text-red-600 underline">info@selectauthority.com</a></p>
      </div>
    </>
  )
}
