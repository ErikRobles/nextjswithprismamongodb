import React from "react"
import Image from "next/image"

const User = ({ user }: any) => {
  const image = (
    <Image
      src={user?.imageUrl}
      alt={`${user?.name}'s profile picture`}
      width={150}
      height={150}
      style={{ objectFit: "cover" }}
    />
  )

  return (
    <section>
      <div className="center">
        <div className="mt-3 relative h-40 w-40 rounded-full">
          {user?.imageUrl ? (
            image
          ) : (
            <span className="inline-block h-40 w-40 overflow-hidden rounded-full bg-gray-100">
              <svg
                className="h-full w-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
          )}
        </div>
        <h1 className="text-xl font-bold">
          {user?.name ? user?.name : "Nothing to see here."}
        </h1>
        <p className="text-sm text-stone-400">
          {user?.email ? user?.email : "No email found"}
        </p>
      </div>
    </section>
  )
}

export default User
