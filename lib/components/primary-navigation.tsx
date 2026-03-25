import Image from "next/image"
import Link from "next/link"

export default function PrimaryNavigation() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-3">
      <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={40}
            className="w-35 h-auto dark:invert"
          />
        </div>
      </Link>
      <Link href="/profile" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
        <Image
          src="/user.svg"
          alt="User Icon"
          width={120}
          height={40}
          className="w-5 h-auto"
        />
      </Link>
    </nav>
  )
}