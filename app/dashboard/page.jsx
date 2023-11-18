import { currentUser } from "@clerk/nextjs"

export default async function page() {
  const user = await currentUser()

  return (
    <div className="max-w-7xl mx-auto py-10 px-3">
      <h3 className="text-3xl font-semibold">Hello, {user?.firstName}! 👋</h3>
      <h5 className="text-lg">Upcoming Events</h5>
  </div>
  )
}
