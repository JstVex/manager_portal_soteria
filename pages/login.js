import { useState, useContext } from "react";
import styles from '@/styles/Auth.module.css'
import { AuthContext } from '../context/AuthContext';
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useContext(AuthContext);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestBody = {
            email: email,
            password: password
        };

        try {
            const response = await fetch(`http://localhost:4008/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (response.ok) {
                const data = await response.json();
                login(data);
                router.push('/new/donations');
                console.log(data);
            } else {
                const errorData = await response.json();
                console.log(errorData.error);
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Login</h1>
                <form className={styles.form} action="" onSubmit={handleSubmit}>
                    <div className={styles.wrapper}>
                        <label className={styles.label} htmlFor="email">Email:</label>
                        <input
                            type="text"
                            className={styles.input}
                            id="email"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            autoComplete="off"
                        />
                    </div>
                    <div className={styles.wrapper}>
                        <label className={styles.label} htmlFor="password">Password:</label>
                        <input
                            type="password"
                            className={styles.input}
                            id="password"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <div className={styles.btn_wrap}>
                        <button className={styles.button}>
                            Submit
                        </button>
                    </div>
                </form>
                <div className={styles.change}>
                    <div>
                        New User?
                    </div>
                    <Link className={styles.link} href='/register'>
                        Register here
                    </Link>
                </div>
            </div>
        </div>
    )
} 