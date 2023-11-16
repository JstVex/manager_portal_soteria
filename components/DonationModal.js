import styles from "../styles/Modal.module.css"
import Payment from "./Payment"
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import toast, { Toaster } from "react-hot-toast";

const Modal = ({ handleNo, handleYes, setDonationLocation, donationTitle, donationImg, donationStartDate, donationEndDate, donationText, donationName, donationTarget, donationUrl, donationLocation, donationPayment, donationId }) => {
    const { user } = useContext(AuthContext);

    const handleDisappear = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setDonationLocation(null)
        }
    }

    const noUser = () => toast.error("You don't have permission to do this");

    const handleRefuse = () => {
        if (user.role === 'admin') {
            handleNo(donationId)
        } else {
            noUser();
        }
    }

    const handleApprove = () => {
        if (user.role === 'admin') {
            handleYes(donationId)
        } else {
            noUser();
        }
    }

    console.log(donationId)

    return (
        <div className={`${styles.backdrop} backdrop`} onClick={handleDisappear}>
            <div className={styles.card}>
                <p className={styles.title}>{donationTitle}</p>
                <div className={styles.flex}>
                    <img src={donationImg} alt="" className={styles.img} />
                    <p className={styles.text}>{donationText}</p>
                </div>

                <div className={styles.info}>
                    <span>name - </span>
                    {donationName}
                </div>
                <div className={styles.info}>
                    <span>start date - </span>
                    {donationStartDate}
                </div>
                <div className={styles.info}>
                    <span>end date - </span>
                    {donationEndDate}
                </div>
                <div className={styles.info}>
                    <span>location - </span>
                    {donationLocation}
                </div>
                <div className={styles.info}>
                    <span>target - </span>
                    {donationTarget}
                </div>
                <div className={styles.info}>
                    <span>payment methods - </span>
                    {donationPayment.map((payment) => {
                        return <Payment payment={payment} />
                    })}
                </div>
                <div className={styles.flex2}>
                    <span className={styles.no} onClick={handleRefuse}>Refuse</span>
                    <button className={styles.button}>
                        <a href={donationUrl} target="_blank">
                            <span className={styles.btn_text}>Link</span>
                        </a>
                    </button>
                    <button className={styles.yes} onClick={handleApprove}>
                        <span>Approve</span>
                    </button>
                </div>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>

    );
}

export default Modal;