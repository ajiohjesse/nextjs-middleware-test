import Link from 'next/link'

const Dashboard = () => {
  return (
    <>
      <div className="navWrapper">
        <nav>
          <Link href="/">Homepage</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
      </div>
      <main>It worked! The middleware function redirected you here.</main>
    </>
  )
}

export default Dashboard
