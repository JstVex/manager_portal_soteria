import styles from "../styles/Donation.module.css"

const Donation = ({ donation, setSelectedTitle, setSelectedImg, setSelectedStartDate, setSelectedEndDate, setSelectedText, setSelectedName, setSelectedTarget, setSelectedUrl, setSelectedLocation, setSelectedPayment, setSelectedId, setSelectedDonation }) => {

    const handleSelectedPost = () => {
        setSelectedDonation(donation);
        setSelectedTitle(donation.title);
        setSelectedImg(donation.img);
        setSelectedStartDate(donation.startDate);
        setSelectedEndDate(donation.endDate);
        setSelectedText(donation.text);
        setSelectedName(donation.name);
        setSelectedTarget(donation.target);
        setSelectedUrl(donation.url);
        setSelectedLocation(donation.location);
        setSelectedPayment(donation.payment);
        setSelectedId(donation._id)
    }

    return (
        // <a href={donation.url} target="_blank">
        <div className={styles.card} onClick={handleSelectedPost}>
            <p className={styles.title}>{donation.title}</p>
            <img src={donation.img} alt="" className={styles.img} />
            <p className={styles.text}>{donation.text.slice(0, 100) + '...'}</p>
            <div className={styles.extra}>
                <p className={styles.name}>{donation.name}</p>
                <p className={styles.location}>{donation.location}</p>
                <p className={styles.date}>{donation.startDate}</p>
            </div>
        </div>
        // </a>
    );
}

export default Donation;