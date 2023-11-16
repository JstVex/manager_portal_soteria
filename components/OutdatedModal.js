import styles from "@/styles/Modal.module.css"
import Payment from "./Payment"
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import toast, { Toaster } from "react-hot-toast";

export default function OutdatedModal({ handleOutdatedDonationDelete, setOutdatedDonationTitle, outdatedDonationTitle, outdatedDonationImg, outdatedDonationStartDate, outdatedDonationEndDate, outdatedDonationText, outdatedDonationName, outdatedDonationTarget, outdatedDonationUrl, outdatedDonationLocation, outdatedDonationPayment, outdatedDonationId }) {
    const { user } = useContext(AuthContext);

    const handleDisappear = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setOutdatedDonationTitle(null)
        }
    }
    const noUser = () => toast.error("You don't have permission to do this");

    const handleDelete = () => {
        if (user.role === 'admin') {
            handleOutdatedDonationDelete(outdatedDonationId)
        } else {
            noUser();
        }
    }


    return (
        <div className={`${styles.backdrop} backdrop`} onClick={handleDisappear}>
            <div className={styles.card}>
                <p className={styles.title}>{outdatedDonationTitle}</p>
                <div className={styles.flex}>
                    <img src={outdatedDonationImg} alt="" className={styles.img} />
                    <p className={styles.text}>{outdatedDonationText}</p>
                </div>

                <div className={styles.info}>
                    <span>name - </span>
                    {outdatedDonationName}
                </div>
                <div className={styles.info}>
                    <span>start date - </span>
                    {outdatedDonationStartDate}
                </div>
                <div className={styles.info}>
                    <span>end date - </span>
                    {outdatedDonationEndDate}
                </div>
                <div className={styles.info}>
                    <span>location - </span>
                    {outdatedDonationLocation}
                </div>
                <div className={styles.info}>
                    <span>target - </span>
                    {outdatedDonationTarget}
                </div>
                <div className={styles.info}>
                    <span>payment methods - </span>
                    {outdatedDonationPayment.map((payment) => {
                        return <Payment payment={payment} />
                    })}
                </div>
                <div className={styles.info}>
                    <a href={outdatedDonationUrl} target="_blank">
                        <span className={styles.btn_text}>donate</span>
                    </a>
                </div>
                <div className={styles.flex2}>
                    <span className={styles.no} onClick={handleDelete}>Delete</span>
                </div>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>

    )
}