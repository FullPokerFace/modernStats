import type { NextPage } from "next";
import Head from "next/head";
import MainContent from "../components/MainContent/MainContent";
import SideBar from "../components/SideBar/SideBar";

const styles = {
  body: "flex sm:p-8 bg-violet-900 text-white min-h-screen justify-center",
};

const Home: NextPage = () => {
  return (
    <div className={styles.body}>
      <Head>
        <title>Modern Stats</title>
        <meta name="description" content="Modern Statistics App" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="assets/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="assets/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="assets/favicon/site.webmanifest"></link>
      </Head>

      <main className="flex p-8 bg-gradient-to-tr from-violet-600 via-sky-700 to-violet-800 rounded-3xl w-full gap-6 container">
        <SideBar />
        <MainContent />
      </main>
    </div>
  );
};

export default Home;
