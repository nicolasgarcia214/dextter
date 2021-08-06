import Head from "next/head";
import styles from "../styles/pages/Home.module.scss";
import Button from "../components/Button";
import { loginWithGithub } from "../firebase/client.js";

export default function Home() {
  const handleClick = () => {
    loginWithGithub()
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            <Button onClick={handleClick}>Login with GitHub</Button>
          </section>
        </main>
      </div>
    </div>
  );
}
