import styles from "../styles/Card.module.css"

const Campaign = ({ campaign, setCampaignTitle, setCampaignImg, setCampaignStartDate, setCampaignEndDate, setCampaignText, setCampaignName, setCampaignTarget, setCampaignUrl, setCampaignPrize, setCampaignForwhom, setCampaignPayment, setCampaignId }) => {

    const handleCampaignPost = () => {
        setCampaignTitle(campaign.title);
        setCampaignImg(campaign.img);
        setCampaignStartDate(campaign.startDate);
        setCampaignEndDate(campaign.endDate);
        setCampaignText(campaign.text);
        setCampaignName(campaign.name);
        setCampaignTarget(campaign.target);
        setCampaignUrl(campaign.url);
        setCampaignPrize(campaign.prize);
        setCampaignForwhom(campaign.forWhom);
        setCampaignPayment(campaign.payment);
        setCampaignId(campaign._id)
    }

    return (
        <div className={styles.card} onClick={handleCampaignPost}>
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