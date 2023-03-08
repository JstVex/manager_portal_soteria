import styles from "../styles/Modal.module.css"
import Payment from "./Payment"

const CampaignModal = ({ handleNo, handleYes, setCampaignPrize, campaignTitle, campaignImg, campaignStartDate, campaignEndDate, campaignText, campaignName, campaignTarget, campaignUrl, campaignPrize, campaignForwhom, campaignPayment, campaignId, campaignCampaign }) => {

    const handleDisappear = (e) => {
        if (e.target.classList.contains('backdrop2')) {
            setCampaignPrize(null);
        }

    }
    console.log(campaignId)

    return (
        <div className={`${styles.backdrop} backdrop2`} onClick={handleDisappear}>
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
                    <span className={styles.no} onClick={() => handleNo(campaignId)}>No</span>
                    <button className={styles.button}>
                        <a href={campaignUrl} target="_blank">
                            <span className={styles.btn_text}>donate</span>
                        </a>
                    </button>
                    <button className={styles.yes} onClick={() => handleYes(campaignId)}>
                        <span >Yes</span>
                    </button>

                </div>

            </div>
        </div>

    );
}

export default CampaignModal;