import { Header } from '@/components/Header'
import Head from 'next/head'

export default function Search() {
  return (
    <div className="flex flex-col space-y-6">
      <Head>
        <title>Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* Search Results */}
    </div>
  )
}
