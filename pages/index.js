import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          Welcome to Manager Portal for <a target='_blank' href='http://localhost:3000' className={styles.app}>Soteria</a> Application
        </div>
        <div className={styles.text}>
          It is to manage new and outdated posts for donations and campaigns.
        </div>
        {user ? (
          <Link href='/new/donations' className={styles.btn}>
            Manage Posts
          </Link>
        ) : (
          <Link href='/login' className={styles.login}>
            Login
          </Link>
        )
        }
      </div>
    </div >
  );
}
