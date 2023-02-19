import React, { ReactNode } from "react"
import Users from "./users"

type Props = {
  children: ReactNode
}

const UsersLayout = async ({ children }: Props) => {
  return (
    <section className="flex">
      <aside className="w-1/4">
        {/* @ts-ignore */}
        <Users />
      </aside>
      <main>{children}</main>
    </section>
  )
}

export default UsersLayout
