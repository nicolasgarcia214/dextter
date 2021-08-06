import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dextter</title>
        <meta name="description" content="We can do better 💡" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <section className={styles.section}>
            <img className={styles.img} src="assets/images/dextter.png" />
            <h1 className={styles.title}>Dextter</h1>
            <h2 className={styles.subtitle}>Let's talk about crypto</h2>
          </section>
        </main>
      </div>
    </div>
  );
}
