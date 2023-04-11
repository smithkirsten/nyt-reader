import './globals.css'

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
          <button>Top Stories</button>
          <button>Most Popular Stories</button>
        </nav>
        {children}
      </body>
    </html>
  )
}
