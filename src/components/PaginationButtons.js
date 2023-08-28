import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const PaginationButtons = () => {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 0;
  return (
    <div className='flex justify-between max-w-xl'>
      {startIndex >= 10 && (
        <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
          <div>
            <ChevronLeftIcon className="h-8 text-blue-700" />
            <p>Previous</p>
          </div>
        </Link>
      )}

      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div>
          <ChevronRightIcon className="h-8 text-blue-700" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  )
}
