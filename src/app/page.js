import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Home() {
  const session = await getSession();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        {!session && (
          <a
            href="/api/auth/login"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              Register / Login <span>-&gt;</span>
            </h2>
            <p>
              Login or register here using Google or your email and password
            </p>
          </a>
        )}
        <Link
          href="/profile-client"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Client Profile <span>-&gt;</span>
          </h2>
          <p>Takes you to your very own profile page client side rendered</p>
        </Link>
        <Link
          href="/profile-server"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Server Profile <span>-&gt;</span>
          </h2>
          <p>Takes you to your very own profile page server side rendered</p>
        </Link>
        {session && (
          <a
            href="/api/auth/logout"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              Logout <span>-&gt;</span>
            </h2>
            <p>Logout of your account</p>
          </a>
        )}
      </div>
    </main>
  );
}
