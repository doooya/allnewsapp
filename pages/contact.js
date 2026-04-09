import Head from 'next/head'
export default function Contact() {
  return (
    <>
      <Head><title>Contact — AllNewsApp</title></Head>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Contact Us</h1>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-bold text-gray-900 text-xl mb-2">🏷️ Domain Acquisition</h2>
          <p className="text-gray-600 mb-3">Interested in purchasing AllNewsApp.com?</p>
          <a href="mailto:info@selectauthority.com" className="text-red-600 font-bold text-lg underline">info@selectauthority.com</a>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="font-bold text-gray-900 text-xl mb-2">📬 General Enquiries</h2>
          <a href="mailto:info@selectauthority.com" className="text-red-600 font-bold text-lg underline">info@selectauthority.com</a>
        </div>
      </div>
    </>
  )
}
