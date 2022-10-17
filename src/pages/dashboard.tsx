import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { NavbarComponent } from "../components";

const Dashboard: NextPage = () => {
  const { status } = useSession();
  const router = useRouter();

  /**
   * ? Runs when auth is running
   */
  if (status === "loading") {
    return null;
  }

  /**
   * ? Prevents access if not logged in
   */
  if (status === "unauthenticated") {
    router.push("/");
  }

  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <main>
        <article className="prose">
          <h1>Dashboard Page</h1>
        </article>
      </main>
    </>
  );
};

export default Dashboard;
