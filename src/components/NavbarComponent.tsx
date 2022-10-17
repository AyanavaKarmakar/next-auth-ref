import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

export const NavbarComponent = () => {
  const AVATAR_IMAGE_SOURCE =
    "https://user-images.githubusercontent.com/89210438/190708630-526de943-f158-4f24-809b-279c58ea70fe.png";

  const { data, status } = useSession();

  /**
   * ! undefined, 'loading'
   * ! null, 'unauthenticated'
   */
  console.log(data, status);

  async function handleLogin() {
    signIn("github", {
      callbackUrl: "http://localhost:3000/dashboard",
    });
  }

  return (
    <div className="navbar bg-primary">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl normal-case text-white">
          next-auth-ref
        </a>
      </div>
      <div className="btn btn-ghost text-xl text-white" onClick={handleLogin}>
        Login
      </div>
      <div className="dropdown-end dropdown">
        <label tabIndex={0} className="avatar btn btn-ghost btn-circle">
          <div className="w-10 rounded-full">
            <Image src={AVATAR_IMAGE_SOURCE} alt="avatar" layout="fill" />
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
