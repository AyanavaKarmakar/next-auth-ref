import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export const NavbarComponent = () => {
  const avatarPlaceholder =
    "https://user-images.githubusercontent.com/89210438/190708630-526de943-f158-4f24-809b-279c58ea70fe.png";

  const { data, status } = useSession();

  const name = data?.user?.name;
  const email = data?.user?.email;
  const image = data?.user?.image;

  // TODO: Remove later
  console.log(name, email, image, status);

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

  async function handleLogin() {
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
      <h2 className="text-xl text-white">
        {name !== null && name !== undefined ? name : ""}
      </h2>
      {status === "unauthenticated" && (
        <div className="btn btn-ghost text-xl text-white" onClick={handleLogin}>
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
      <div className="dropdown-end dropdown">
        <label tabIndex={0} className="avatar btn btn-ghost btn-circle">
          <div className="w-10 rounded-full">
            <Image
              src={
                image !== null && image !== undefined
                  ? image
                  : avatarPlaceholder
              }
              alt="avatar"
              layout="fill"
            />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-accent p-2 shadow"
        >
          <li className="text-white">
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
