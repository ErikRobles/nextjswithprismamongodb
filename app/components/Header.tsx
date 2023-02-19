import React from "react"
import Link from "next/link"

const Header = () => {
  return (
    <header>
      <nav className="p-4 w-full flex flex-row items-center justify-center gap-8 bg-[#333]">
        <Link href="/" className="text-white text-2xl">
          Home
        </Link>

        <Link className="text-white text-2xl" href="/about">
          About
        </Link>
        <Link className="text-white text-2xl" href="/users">
          Users
        </Link>
      </nav>
    </header>
  )
}

export default Header
