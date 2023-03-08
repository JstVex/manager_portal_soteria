import styles from "../styles/Card.module.css"

const Donation = ({ donation, setDonationTitle, setDonationImg, setDonationStartDate, setDonationEndDate, setDonationText, setDonationName, setDonationTarget, setDonationUrl, setDonationLocation, setDonationPayment, setDonationId, setNewDonation }) => {

    const handleDonationPost = () => {
        setDonationTitle(donation.title);
        setDonationImg(donation.img);
        setDonationStartDate(donation.startDate);
        setDonationEndDate(donation.endDate);
        setDonationText(donation.text);
        setDonationName(donation.name);
        setDonationTarget(donation.target);
        setDonationUrl(donation.url);
        setDonationLocation(donation.location);
        setDonationPayment(donation.payment);
        setDonationId(donation._id);
        setNewDonation(donation)
    }

    return (
        // <a href={donation.url} target="_blank">
        <div className={styles.card} onClick={handleDonationPost}>
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