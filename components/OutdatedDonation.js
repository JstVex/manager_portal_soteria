import styles from "../styles/Card.module.css"

const OutdatedDonation = ({ donation, setOutdatedDonationTitle, setOutdatedDonationImg, setOutdatedDonationStartDate, setOutdatedDonationEndDate, setOutdatedDonationText, setOutdatedDonationName, setOutdatedDonationTarget, setOutdatedDonationUrl, setOutdatedDonationLocation, setOutdatedDonationPayment, setOutdatedDonationId }) => {

    const handleOutdatedDonationPost = () => {
        setOutdatedDonationTitle(donation.title);
        setOutdatedDonationImg(donation.img);
        setOutdatedDonationStartDate(donation.startDate);
        setOutdatedDonationEndDate(donation.endDate);
        setOutdatedDonationText(donation.text);
        setOutdatedDonationName(donation.name);
        setOutdatedDonationTarget(donation.target);
        setOutdatedDonationUrl(donation.url);
        setOutdatedDonationLocation(donation.location);
        setOutdatedDonationPayment(donation.payment);
        setOutdatedDonationId(donation._id)
    }

    return (
        // <a href={donation.url} target="_blank">
        <div className={styles.card} onClick={handleOutdatedDonationPost}>
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

export default OutdatedDonation;