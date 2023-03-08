import styles from "@/styles/Home.module.css"
import { useEffect, useState } from "react";
import CampaignModal from "@/components/CampaignModal";
import Campaign from "@/components/Campaign";

export default function NewCampigns({ campaigns }) {
    const [newCampaign, setNewCampaign] = useState(true);

    const [campaignTitle, setCampaignTitle] = useState(null);
    const [campaignImg, setCampaignImg] = useState(null);
    const [campaignStartDate, setCampaignStartDate] = useState(null);
    const [campaignEndDate, setCampaignEndDate] = useState(null);
    const [campaignText, setCampaignText] = useState(null);
    const [campaignName, setCampaignName] = useState(null);
    const [campaignTarget, setCampaignTarget] = useState(null);
    const [campaignUrl, setCampaignUrl] = useState(null);
    const [campaignPrize, setCampaignPrize] = useState(null);
    const [campaignForwhom, setCampaignForwhom] = useState(null);
    const [campaignPayment, setCampaignPayment] = useState(null);
    const [campaignId, setCampaignId] = useState(null);

    useEffect(() => {
        if (campaigns.length === 0) setNewCampaign(false);
    }, [campaigns])

    return (
        <div className={styles.container}>
            {newCampaign || <div className={styles.word}>
                There is no new campaign
            </div>}

            {campaigns.length > 0 && <div className={styles.title}>
                New Campaigns
            </div>}

            <div className={styles.content}>

                {campaigns && campaigns.map((campaign) => {
                    return <Campaign campaign={campaign} key={campaign._id} setCampaignTitle={setCampaignTitle}
                        setCampaignImg={setCampaignImg} setCampaignStartDate={setCampaignStartDate} setCampaignEndDate={setCampaignEndDate} setCampaignText={setCampaignText} setCampaignName={setCampaignName} setCampaignTarget={setCampaignTarget} setCampaignUrl={setCampaignUrl} setCampaignPrize={setCampaignPrize} setCampaignForwhom={setCampaignForwhom} setCampaignPayment={setCampaignPayment} setCampaignId={setCampaignId} />
                })}
            </div>
            {campaignPrize && <CampaignModal setCampaignPrize={setCampaignPrize} campaignTitle={campaignTitle} campaignImg={campaignImg} campaignStartDate={campaignStartDate} campaignEndDate={campaignEndDate} campaignText={campaignText} campaignName={campaignName} campaignTarget={campaignTarget} campaignUrl={campaignUrl} campaignPrize={campaignPrize} campaignForwhom={campaignForwhom} campaignPayment={campaignPayment} campaignId={campaignId} />}
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:4008/campaigns/new`)
    const campaigns = await res.json()
    return { props: { campaigns } }
}
