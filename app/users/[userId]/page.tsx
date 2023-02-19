import React from "react"
import { getUserById, getUsers } from "../../../lib/prisma/users"
import User from "./user"

interface User {
  id: string
  name: string
  email: string
  imageUrl: string
}

export async function getStaticParams() {
  const users: any = await getUsers()
  return users.map((user: User) => ({
    userId: user.id,
  }))
}

async function getUser({ userId }: any) {
  const { user }: any = await getUserById(userId)
  if (!user) {
    throw new Error("Failed to fetch Data.")
  }
  return user
}

type Props = {
  params: any
}

const Page = async ({ params }: Props) => {
  const user = await getUser(params.userId)

  return <User user={user} />
}

export default Page
