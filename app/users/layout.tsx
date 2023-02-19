import React, { ReactNode } from "react"
import { getUsers } from "../../lib/prisma/users"
import Users from "./users"

export const revalidate = 0

async function getData() {
  const { users } = await getUsers()
  if (!users) {
    throw new Error("Failed to fetch data")
  }
  return users
}

type Props = {
  children: ReactNode
}

const UsersLayout = async ({ children }: Props) => {
  const users = await getData()
  return (
    <section className="flex">
      <aside className="w-1/3 lg:w-1/4">
        <Users users={users} />
      </aside>
      <main>{children}</main>
    </section>
  )
}

export default UsersLayout
