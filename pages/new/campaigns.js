import styles from "@/styles/Home.module.css"
import { useEffect, useState } from "react";
import CampaignModal from "@/components/CampaignModal";
import Campaign from "@/components/Campaign";
import ProtectedRoute from "@/components/ProtectedRoute";

const NewCampigns = ({ campaigns }) => {
    const [newCampaignList, setNewCampaignList] = useState(campaigns);
    const [newCampaignExist, setNewCampaignExist] = useState(true);

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
    const [newCampaign, setNewCampaign] = useState(null);

    const handleNo = async (id) => {
        const response = await fetch(`http://localhost:4008/campaigns/${id}`, {
            method: 'DELETE'
        })
        const data = await response.json();
        setNewCampaignList(data)
        setCampaignPrize(null);
    }

    const handleYes = async (id) => {
        const response = await fetch(`http://localhost:4004/campaigns`, {
            method: 'POST',
            body: JSON.stringify(newCampaign),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        const data = await response.json();
        console.log('Posted', data)

        const patchResponse = await fetch(`http://localhost:4008/campaigns/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ newPost: false }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const updatedData = await patchResponse.json();
        console.log('Updated all donations:', updatedData);
        setNewCampaignList(updatedData);
        setCampaignPrize(null);
    }

    useEffect(() => {
        if (newCampaignList.length === 0) setNewCampaignExist(false);
    }, [newCampaignList])

    return (
        <div className={styles.container}>
            {newCampaignExist || <div className={styles.word}>
                There is no new campaign
            </div>}

            {newCampaignList.length > 0 && <div className={styles.heading}>
                New Campaigns
            </div>}

            <div className={styles.content}>
                {newCampaignList && newCampaignList.map((campaign) => {
                    return <Campaign campaign={campaign} key={campaign._id} setCampaignTitle={setCampaignTitle}
                        setCampaignImg={setCampaignImg} setCampaignStartDate={setCampaignStartDate} setCampaignEndDate={setCampaignEndDate} setCampaignText={setCampaignText} setCampaignName={setCampaignName} setCampaignTarget={setCampaignTarget} setCampaignUrl={setCampaignUrl} setCampaignPrize={setCampaignPrize} setCampaignForwhom={setCampaignForwhom} setCampaignPayment={setCampaignPayment} setCampaignId={setCampaignId} setNewCampaign={setNewCampaign} />
                })}
            </div>
            {campaignPrize && <CampaignModal handleNo={handleNo} handleYes={handleYes} setCampaignPrize={setCampaignPrize} campaignTitle={campaignTitle} campaignImg={campaignImg} campaignStartDate={campaignStartDate} campaignEndDate={campaignEndDate} campaignText={campaignText} campaignName={campaignName} campaignTarget={campaignTarget} campaignUrl={campaignUrl} campaignPrize={campaignPrize} campaignForwhom={campaignForwhom} campaignPayment={campaignPayment} campaignId={campaignId} />}
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:4008/campaigns/new`)
    const campaigns = await res.json()
    return { props: { campaigns } }
}

export default ProtectedRoute(NewCampigns);