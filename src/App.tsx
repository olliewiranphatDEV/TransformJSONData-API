import { useEffect, useState } from "react"
import { User } from "./types/user"
import { fetchUsers } from "./api/userService"
import SummaryTable from "./components/summaryTable"
import { transformData } from "./utils/transformData"

function App() {
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    fetchUsers().then(setUsers)
  }, []) //RUN ONE TIME WHEN THE COMPONENT MOUNT!

  // console.log('users', users);


  const summary = transformData(users)

  return (
    <div className="container py-8 h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">User Summary By Department</h1>
      <SummaryTable data={summary} />
    </div>
  )
}

export default App
