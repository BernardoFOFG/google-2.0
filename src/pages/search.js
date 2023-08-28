import { Header } from '@/components/Header'
import Head from 'next/head'
import { API_KEY, CONTEXT_KEY } from '../../keys';
import Response from '@/request/Response';
import { useRouter } from 'next/router';
import { SearchResults } from '@/components/SearchResults';

export default function Search({ results }) {
  const router = useRouter()
  return (
    <div className="flex flex-col space-y-6">
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SearchResults results={results} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";
  
  const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  }
}
