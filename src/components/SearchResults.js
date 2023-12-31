import { PaginationButtons } from "./PaginationButtons"

export const SearchResults = ({ results }) => {
  return (
    <div className="mx-auto w-full px-3 sml:pl-[5%] md:pl-[14%] lg:pl-48">
      <p className="text-gray-600 text-md mb-5 mt-3">About
        {" "}{results.searchInformation?.formattedTotalResults}{" "}
        results
        ({results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items?.map((value) => (
        <div key={value.link} className="max-w-xl mb-8 ">
          <div className="group">
            <a href={value.link} className="text-sm text-gray-500">{value.formattedUrl}</a>
            <a href={value.link}>
              <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">{value.title}</h2>
            </a>
          </div>
          <p className="line-clamp-2">{value.snippet}</p>
        </div>
      ))}

      <PaginationButtons />
    </div>
  )
}
