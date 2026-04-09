import Head from 'next/head'
export default function Privacy() {
  return (
    <>
      <Head><title>Privacy Policy — AllNewsApp</title></Head>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: 2026</p>
        <div className="prose prose-gray max-w-none">
          <h2>1. Information We Collect</h2>
          <p>We collect anonymous usage data through Google Analytics to improve our service.</p>
          <h2>2. Cookies</h2>
          <p>We use cookies for analytics and advertising purposes via Google Analytics and Google AdSense.</p>
          <h2>3. Third Party Services</h2>
          <p>News content is provided by NewsAPI.org. Ads are served by Google AdSense.</p>
          <h2>4. Contact</h2>
          <p>For privacy questions contact <a href="mailto:info@selectauthority.com" className="text-red-600 underline">info@selectauthority.com</a></p>
        </div>
      </div>
    </>
  )
}
