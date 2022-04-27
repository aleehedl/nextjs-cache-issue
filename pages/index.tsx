import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Index</h1>
      <Link href="/cached">To cached SSR Page</Link>
    </div>
  )
}

export default Home
