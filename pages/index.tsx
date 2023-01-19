import Footer from "@/components/Footer";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
import Head from "next/head";

export default function Home() {
  const Clock = dynamic(() => import('../components/Clock'), {
    ssr: false
  });

  return (
    <div>
      <Head>
        <title>Home | Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main className="container">
        <h2 role='heading'>Home</h2>
        <div className="center-content">
          <h3>GMT</h3>
          <Clock timeZone={"GMT"} />
          <h3>EST</h3>
          <Clock timeZone={"EST"} />
        </div>

      </main>

      <Footer />
    </div>
  );
}
