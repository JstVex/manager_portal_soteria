import styles from "../styles/Modal.module.css"
import Payment from "./Payment"

const Modal = ({ setSelectedTitle, selectedTitle, selectedImg, selectedStartDate, selectedEndDate, selectedText, selectedName, selectedTarget, selectedUrl, selectedLocation, selectedPayment, selectedId, selectedDonation }) => {
    const handleDisappear = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedTitle(null)
        }

    }
    console.log(selectedPayment)

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
            body: JSON.stringify(selectedDonation),
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
                    <span>location - </span>
                    {selectedLocation}
                </div>
                <div className={styles.info}>
                    <span>target - </span>
                    {selectedTarget}
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
                    <form action="" onClick={() => handleYes(selectedId)}>
                        <button className={styles.yes}>
                            <span >Yes</span>
                        </button>
                    </form>

                </div>

            </div>
        </div>

    );
}

export default Modal;