import { Avatar } from "@/components/Avatar";

export default function Home() {
  return (
    <main className="bg-white h-screen">
      {/* Header   */}

      <header className="flex justify-between p-5 text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="link">Gmail</div>
          <div className="link">Images</div>

          {/* Icon */}

          {/* Avatar */}

          <Avatar url='https://github.com/bernardofofg.png' />
        </div>
      </header>
      {/* Body */}

      {/* Footer */}
    </main>
  );
}
