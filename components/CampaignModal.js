import styles from "../styles/Modal.module.css"
import Payment from "./Payment"
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import toast, { Toaster } from "react-hot-toast";

const CampaignModal = ({ handleNo, handleYes, setCampaignPrize, campaignTitle, campaignImg, campaignStartDate, campaignEndDate, campaignText, campaignName, campaignTarget, campaignUrl, campaignPrize, campaignForwhom, campaignPayment, campaignId }) => {
    const { user } = useContext(AuthContext);

    const handleDisappear = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setCampaignPrize(null);
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

    console.log(campaignId)

    return (
        <div className={`${styles.backdrop} backdrop`} onClick={handleDisappear}>
            <div className={styles.card}>
                <p className={styles.title}>{campaignTitle}</p>
                <div className={styles.flex}>
                    <img src={campaignImg} alt="" className={styles.img} />
                    <p className={styles.text}>{campaignText}</p>
                </div>

                <div className={styles.info}>
                    <span>name - </span>
                    {campaignName}
                </div>
                <div className={styles.info}>
                    <span>start date - </span>
                    {campaignStartDate}
                </div>
                <div className={styles.info}>
                    <span>end date - </span>
                    {campaignEndDate}
                </div>
                <div className={styles.info}>
                    <span>target - </span>
                    {campaignTarget}
                </div>
                <div className={styles.info}>
                    <span>prize - </span>
                    {campaignPrize}
                </div>
                <div className={styles.info}>
                    <span>for whom - </span>
                    {campaignForwhom}
                </div>
                <div className={styles.info}>
                    <span>payment methods - </span>
                    {campaignPayment.map((payment) => {
                        return <Payment payment={payment} />
                    })}
                </div>
                <div className={styles.flex2}>
                    <span className={styles.no} onClick={handleRefuse}>Refuse</span>
                    <button className={styles.button}>
                        <a href={campaignUrl} target="_blank">
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

export default CampaignModal;