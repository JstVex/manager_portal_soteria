import styles from "../styles/Modal.module.css"

const Payment = ({ payment }) => {
    return (
        <>
            <span className={styles.payment}>
                {payment}
            </span>
            <span> </span>
        </>
    );
}

export default Payment;