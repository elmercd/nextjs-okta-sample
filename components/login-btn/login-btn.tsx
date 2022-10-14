import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@mui/material/Button";

function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <div style={{ textAlign: "center" }}>
            {" "}
            Signed in as {session ? session?.user?.email : ""} <br />
            <Button variant="outlined" onClick={() => signOut()}>
              Sign out
            </Button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div style={{ textAlign: "center" }}>
          Not signed in <br />
          <Button variant="contained" onClick={() => signIn()}>
            Sign in
          </Button>
        </div>
      </div>
    </>
  );
}

export default LoginButton;
