import styles from "../styles/Donation.module.css"

const Campaign = ({ campaign, setSelectedTitle, setSelectedImg, setSelectedStartDate, setSelectedEndDate, setSelectedText, setSelectedName, setSelectedTarget, setSelectedUrl, setSelectedPrize, setSelectedForwhom, setSelectedPayment, setSelectedId, setSelectedCampaign }) => {

    const handleSelectedPost = () => {
        setSelectedCampaign(campaign);
        setSelectedTitle(campaign.title);
        setSelectedImg(campaign.img);
        setSelectedStartDate(campaign.startDate);
        setSelectedEndDate(campaign.endDate);
        setSelectedText(campaign.text);
        setSelectedName(campaign.name);
        setSelectedTarget(campaign.target);
        setSelectedUrl(campaign.url);
        setSelectedPrize(campaign.prize);
        setSelectedForwhom(campaign.forWhom);
        setSelectedPayment(campaign.payment);
        setSelectedId(campaign._id)
    }

    return (
        <div className={styles.card} onClick={handleSelectedPost}>
            <p className={styles.title}>{campaign.title}</p>
            <img src={campaign.img} alt="" className={styles.img} />
            <p className={styles.text}>{campaign.text.slice(0, 100) + '...'}</p>
            <div className={styles.extra}>
                <p className={styles.name}>{campaign.name}</p>
                <p className={styles.location}>{campaign.location}</p>
                <p className={styles.date}>{campaign.startDate}</p>
            </div>
        </div>
    );
}

export default Campaign;