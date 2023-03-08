import styles from "@/styles/Modal.module.css"
import Payment from "./Payment"

export default function OutdatedModal({ handleOutdatedDonationDelete, setOutdatedDonationTitle, outdatedDonationTitle, outdatedDonationImg, outdatedDonationStartDate, outdatedDonationEndDate, outdatedDonationText, outdatedDonationName, outdatedDonationTarget, outdatedDonationUrl, outdatedDonationLocation, outdatedDonationPayment, outdatedDonationId }) {

    const handleDisappear = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setOutdatedDonationTitle(null)
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
                    <span className={styles.no} onClick={() => handleOutdatedDonationDelete(outdatedDonationId)}>Delete</span>
                    {/* <button className={styles.button}>
                        <a href={outdatedDonationUrl} target="_blank">
                            <span className={styles.btn_text}>donate</span>
                        </a>
                    </button> */}

                </div>

            </div>
        </div>

    )
}