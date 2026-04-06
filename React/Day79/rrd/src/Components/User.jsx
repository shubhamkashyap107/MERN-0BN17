import { useParams } from "react-router-dom"

const User = () => {
    
    const { username } = useParams()

  return (
    <div>User is {username}</div>
  )
}

export default User