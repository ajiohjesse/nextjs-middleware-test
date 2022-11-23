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
      <main>
        This is the dashboard. You should not be able to see this page!
      </main>
    </>
  )
}

export default Dashboard
