import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Top of the Morning',
  description: 'Get the top news stories from the New York Times, daily',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Top of the Morning from the NYT</h1>
        </header>
        <nav>
          <Link href='/'><button>Top Stories</button></Link>
          <Link href='/popular'><button>Most Popular Stories</button></Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
