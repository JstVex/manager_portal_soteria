import styles from "@/styles/Modal.module.css"
import Payment from "./Payment"
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import toast, { Toaster } from "react-hot-toast";

export default function OutdatedCampaignModal({ handleOutdatedCampaignDelete, setOutdatedCampaignPrize, outdatedCampaignTitle, outdatedCampaignImg, outdatedCampaignStartDate, outdatedCampaignEndDate, outdatedCampaignText, outdatedCampaignName, outdatedCampaignTarget, outdatedCampaignUrl, outdatedCampaignPrize, outdatedCampaignForwhom, outdatedCampaignPayment, outdatedCampaignId }) {
    const { user } = useContext(AuthContext);

    const handleDisappear = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setOutdatedCampaignPrize(null)
        }
    }

    const noUser = () => toast.error("You don't have permission to do this");

    const handleDelete = () => {
        if (user.role === 'admin') {
            handleOutdatedCampaignDelete(outdatedCampaignId)
        } else {
            noUser();
        }
    }

    return (
        <div className={`${styles.backdrop} backdrop`} onClick={handleDisappear}>
            <div className={styles.card}>
                <p className={styles.title}>{outdatedCampaignTitle}</p>
                <div className={styles.flex}>
                    <img src={outdatedCampaignImg} alt="" className={styles.img} />
                    <p className={styles.text}>{outdatedCampaignText}</p>
                </div>

                <div className={styles.info}>
                    <span>name - </span>
                    {outdatedCampaignName}
                </div>
                <div className={styles.info}>
                    <span>start date - </span>
                    {outdatedCampaignStartDate}
                </div>
                <div className={styles.info}>
                    <span>end date - </span>
                    {outdatedCampaignEndDate}
                </div>
                <div className={styles.info}>
                    <span>target - </span>
                    {outdatedCampaignTarget}
                </div>
                <div className={styles.info}>
                    <span>prize - </span>
                    {outdatedCampaignPrize}
                </div>
                <div className={styles.info}>
                    <span>for whom - </span>
                    {outdatedCampaignForwhom}
                </div>
                <div className={styles.info}>
                    <span>payment methods - </span>
                    {outdatedCampaignPayment.map((payment) => {
                        return <Payment payment={payment} />
                    })}
                </div>
                <div className={styles.info}>
                    <a href={outdatedCampaignUrl} target="_blank">
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