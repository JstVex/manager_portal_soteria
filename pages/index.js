import styles from '@/styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          Welcome to Manager Portal for <a target='_blank' href='http://localhost:3000' className={styles.app}>Soteria</a> Application
        </div>
        <div className={styles.text}>
          It is to manage new and outdated posts for donations and campaigns.
        </div>
        <Link href='/login' className={styles.login}>
          Login
        </Link>
      </div>
    </div >
  );
}
