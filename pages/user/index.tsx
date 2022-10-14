import { useSession } from "next-auth/react";

function User() {
  const { data: session } = useSession();
  return (
    <div>User: {session ? session.user?.name : ''}</div>
  )
}

export default User