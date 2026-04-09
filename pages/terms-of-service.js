import Head from 'next/head'
export default function Terms() {
  return (
    <>
      <Head><title>Terms of Service — AllNewsApp</title></Head>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: 2026</p>
        <div className="prose prose-gray max-w-none">
          <h2>1. Acceptance</h2>
          <p>By using AllNewsApp.com you agree to these terms.</p>
          <h2>2. Content</h2>
          <p>News content is aggregated from third party sources. We do not own or create the news content displayed.</p>
          <h2>3. Limitation of Liability</h2>
          <p>AllNewsApp.com is not liable for any damages arising from use of this site.</p>
          <h2>4. Contact</h2>
          <p>For questions contact <a href="mailto:info@selectauthority.com" className="text-red-600 underline">info@selectauthority.com</a></p>
        </div>
      </div>
    </>
  )
}
