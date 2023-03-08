import styles from "../styles/Modal.module.css"
import Payment from "./Payment"

const Modal = ({ setDonationLocation, donationTitle, donationImg, donationStartDate, donationEndDate, donationText, donationName, donationTarget, donationUrl, donationLocation, donationPayment, donationId, donationDonation }) => {
    const handleDisappear = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setDonationLocation(null)
        }

    }
    console.log(donationId)

    const handleNo = async (id) => {
        const response = await fetch(`http://localhost:4008/donations/${id}`, {
            method: 'DELETE'
        })
        const json = await response.json()
        console.log(json)
    }

    const handleYes = async (id) => {

        const response = await fetch(`http://localhost:4004/donations`, {
            method: 'POST',
            body: JSON.stringify(donationDonation),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        const data = await response.json();
        console.log(data)

        const response2 = await fetch(`http://localhost:4008/donations/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ newPost: false }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data2 = await response2.json();
        console.log(data2)
    }

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
                    <span className={styles.no} onClick={() => handleNo(donationId)}>No</span>
                    <button className={styles.button}>
                        <a href={donationUrl} target="_blank">
                            <span className={styles.btn_text}>donate</span>
                        </a>
                    </button>
                    <button className={styles.yes} onClick={() => handleYes(donationId)}>
                        <span >Yes</span>
                    </button>

                </div>

            </div>
        </div>

    );
}

export default Modal;