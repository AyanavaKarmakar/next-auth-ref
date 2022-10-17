import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export const NavbarComponent = () => {
  const { data, status } = useSession();
  const name = data?.user?.name;
  const image = data?.user?.image;
  // const email = data?.user?.email;

  /**
   * ! undefined, 'loading'
   * ! null, 'unauthenticated'
   * TODO: Remove later
   */
  // console.log(data, status);

  /**
   * ? Runs when next auth is checking or
   * ? verfying sessions
   */
  if (status === "loading") {
    return null;
  }

  async function handleGoogleLogin() {
    await signIn("google", {
      callbackUrl: "http://localhost:3000/dashboard",
    });
  }

  async function handleGitHubLogin() {
    await signIn("github", {
      callbackUrl: "http://localhost:3000/dashboard",
    });
  }

  async function handleLogout() {
    await signOut({ callbackUrl: "http://localhost:3000/" });
  }

  return (
    <div className="navbar bg-primary">
      <div className="flex-1">
        <a
          className="btn btn-ghost text-xl normal-case text-white"
          href="https://github.com/AyanavaKarmakar/next-auth-ref"
          target="_blank"
          rel="noreferrer"
        >
          next-auth-ref
        </a>
      </div>
      {status === "unauthenticated" && (
        <div
          className="btn btn-ghost text-xl text-cyan-100"
          onClick={handleGoogleLogin}
        >
          Google Login
        </div>
      )}
      <h2 className="text-xl text-white">
        {name !== null && name !== undefined ? name : ""}
      </h2>
      {status === "unauthenticated" && (
        <div
          className="btn btn-ghost text-xl text-white"
          onClick={handleGitHubLogin}
        >
          Login
        </div>
      )}
      {status === "authenticated" && (
        <div
          className="btn btn-ghost text-xl text-white"
          onClick={handleLogout}
        >
          Logout
        </div>
      )}
      {image !== null && image !== undefined && (
        <label className="avatar btn btn-ghost btn-circle">
          <div className="w-10 rounded-full">
            <Image src={image} alt="avatar" layout="fill" />
          </div>
        </label>
      )}
    </div>
  );
};
