import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { NavbarComponent } from "../components";

const Home: NextPage = () => {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <article className="prose">
        <h1>Loading</h1>
      </article>
    );
  }

  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <main>
        <article className="prose">
          <h1>Home Page</h1>
        </article>
      </main>
    </>
  );
};

export default Home;
