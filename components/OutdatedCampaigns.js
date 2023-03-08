import styles from "../styles/Card.module.css"

export default function OutdatedCampaigns({ campaign, setOutdatedCampaignTitle, setOutdatedCampaignImg, setOutdatedCampaignStartDate, setOutdatedCampaignEndDate, setOutdatedCampaignText, setOutdatedCampaignName, setOutdatedCampaignTarget, setOutdatedCampaignUrl, setOutdatedCampaignPrize, setOutdatedCampaignForwhom, setOutdatedCampaignPayment, setOutdatedCampaignId }) {

    const handleOutdatedCampaignPost = () => {
        setOutdatedCampaignTitle(campaign.title);
        setOutdatedCampaignImg(campaign.img);
        setOutdatedCampaignStartDate(campaign.startDate);
        setOutdatedCampaignEndDate(campaign.endDate);
        setOutdatedCampaignText(campaign.text);
        setOutdatedCampaignName(campaign.name);
        setOutdatedCampaignTarget(campaign.target);
        setOutdatedCampaignUrl(campaign.url);
        setOutdatedCampaignPrize(campaign.prize);
        setOutdatedCampaignForwhom(campaign.forWhom);
        setOutdatedCampaignPayment(campaign.payment);
        setOutdatedCampaignId(campaign._id);
    }

    return (
        <div className={styles.card} onClick={handleOutdatedCampaignPost}>
            <p className={styles.title}>{campaign.title}</p>
            <img src={campaign.img} alt="" className={styles.img} />
            <p className={styles.text}>{campaign.text.slice(0, 100) + '...'}</p>
            <div className={styles.extra}>
                <p className={styles.name}>{campaign.name}</p>
                <p className={styles.location}>{campaign.location}</p>
                <p className={styles.date}>{campaign.startDate}</p>
            </div>
        </div>
    )
}