import React from "react"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="w-full p-4 flex flex-row items-center justify-center gap-8 bg-[#333]">
      <p className="text-white text-lg">
        &copy;{year} Next.js All rights reserved
      </p>
    </footer>
  )
}

export default Footer
