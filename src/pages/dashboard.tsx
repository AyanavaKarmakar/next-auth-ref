import type { NextPage } from "next";
import { NavbarComponent } from "../components";

const Dashboard: NextPage = () => {
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
