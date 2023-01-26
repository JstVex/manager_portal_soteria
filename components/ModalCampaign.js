import styles from "../styles/Modal.module.css"
import Payment from "./Payment"

const ModalCampaign = ({ setSelectedPrize, selectedTitle, selectedImg, selectedStartDate, selectedEndDate, selectedText, selectedName, selectedTarget, selectedUrl, selectedPrize, selectedForwhom, selectedPayment, selectedId, selectedCampaign }) => {

    const handleDisappear = (e) => {
        if (e.target.classList.contains('backdrop2')) {
            setSelectedPrize(null);
        }

    }
    console.log(selectedId)

    const handleNo = async (id) => {
        const response = await fetch(`http://localhost:4008/campaigns/${id}`, {
            method: 'DELETE'
        })
        const json = await response.json()
        console.log(json)
    }

    const handleYes = async (id) => {

        const response = await fetch(`http://localhost:4004/campaigns`, {
            method: 'POST',
            body: JSON.stringify(selectedCampaign),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        const data = await response.json();
        console.log(data)

        const response2 = await fetch(`http://localhost:4008/campaigns/${id}`, {
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
        <div className={`${styles.backdrop} backdrop2`} onClick={handleDisappear}>
            <div className={styles.card}>
                <p className={styles.title}>{selectedTitle}</p>
                <div className={styles.flex}>
                    <img src={selectedImg} alt="" className={styles.img} />
                    <p className={styles.text}>{selectedText}</p>
                </div>

                <div className={styles.info}>
                    <span>name - </span>
                    {selectedName}
                </div>
                <div className={styles.info}>
                    <span>start date - </span>
                    {selectedStartDate}
                </div>
                <div className={styles.info}>
                    <span>end date - </span>
                    {selectedEndDate}
                </div>
                <div className={styles.info}>
                    <span>target - </span>
                    {selectedTarget}
                </div>
                <div className={styles.info}>
                    <span>prize - </span>
                    {selectedPrize}
                </div>
                <div className={styles.info}>
                    <span>for whom - </span>
                    {selectedForwhom}
                </div>
                <div className={styles.info}>
                    <span>payment methods - </span>
                    {selectedPayment.map((payment) => {
                        return <Payment payment={payment} />
                    })}
                </div>
                <div className={styles.flex2}>
                    <span className={styles.no} onClick={() => handleNo(selectedId)}>No</span>
                    <button className={styles.button}>
                        <a href={selectedUrl} target="_blank">
                            <span className={styles.btn_text}>donate</span>
                        </a>
                    </button>
                    <button className={styles.yes} onClick={() => handleYes(selectedId)}>
                        <span >Yes</span>
                    </button>

                </div>

            </div>
        </div>

    );
}

export default ModalCampaign;