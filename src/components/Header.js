import Image from "next/image"
import { useRouter } from 'next/router'
import { useRef } from "react"
import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid'
import { Avatar } from "./Avatar"
import { HeaderOptions } from "./HeaderOptions"

export const Header = () => {
  const router = useRouter()
  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  }
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full items-center px-6 mt-8">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          width={120}
          height={40}
          className="cursor-pointer"
          onClick={() => router.push('/')} />

        <form className="flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full flex-grow shadow-lg max-w-3xl items-center">
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none h-6" />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => searchInputRef.current.value = ""} />
          <MicrophoneIcon
            className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-3 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 cursor-pointer hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>Search</button>
        </form>
        <Avatar className="ml-auto" url="https://github.com/bernardofofg.png" />
      </div>
      <HeaderOptions />

    </header>
  )
}
