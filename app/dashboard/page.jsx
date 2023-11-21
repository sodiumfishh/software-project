import { currentUser } from "@clerk/nextjs"

export default async function page() {
  const user = await currentUser()

  return (
    <div className="max-w-7xl mx-auto py-10 px-3">
      <h3 className="text-3xl font-semibold">Hello, {user?.firstName}! 👋</h3>
      <h5 className="text-lg">Upcoming Events</h5>

      <div className="flex justify-center gap-4">
        <div>
          <div>
            <h3 className="text-2xl font-semibold">Today</h3>
            <hr />
            <p>No matches found for Tuesday, November 21, 2023</p>
          </div>
        </div>
      </div>
    </div>
  )
}
