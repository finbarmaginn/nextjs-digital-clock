import Head from "next/head";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function About() {
  return (
    <div>
      <Head>
        <title>About | Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main className="container">
        <h2 role='heading'>About</h2>

        <article>
          <section>
            <p>
              This web application is built using NextJS, React, Jest, Modular
              CSS etc. It utilises NextJS&apos;s server side rendering capabilities.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
