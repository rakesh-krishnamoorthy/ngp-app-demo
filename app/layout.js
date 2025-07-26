import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'NGP App',
  description: 'NGP DevOps Demo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-blue-600 p-4 text-white flex justify-between">
          <h1 className="text-xl font-bold">NGP App</h1>
          <div className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}
