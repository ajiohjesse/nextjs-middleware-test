import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="navWrapper">
        <nav>
          <Link href="/">Homepage</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
      </div>
      <main>This is the home page</main>
    </>
  )
}
