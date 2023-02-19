import React from "react"
import { getUserById } from "../../../lib/prisma/users"
import User from "./user"

type Props = {
  params: any
}

const Page = async ({ params }: Props) => {
  const user = await getUserById(params.userId)

  return <User user={user} />
}

export default Page
