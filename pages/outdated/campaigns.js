import styles from '@/styles/Home.module.css'
import OutdatedCampaigns from '@/components/OutdatedCampaigns';
import { useEffect, useState } from 'react';
import OutdatedCampaignModal from '@/components/OutdatedCampaignModal';
import ProtectedRoute from '@/components/ProtectedRoute';

const OutdatedCampaign = ({ campaigns }) => {
    const [outdatedCampaignList, setOutdatedCampaignList] = useState(campaigns);
    const [outdatedCampaignExist, setOutdatedCampaignExist] = useState(true);

    const [outdatedCampaignTitle, setOutdatedCampaignTitle] = useState(null);
    const [outdatedCampaignImg, setOutdatedCampaignImg] = useState(null);
    const [outdatedCampaignStartDate, setOutdatedCampaignStartDate] = useState(null);
    const [outdatedCampaignEndDate, setOutdatedCampaignEndDate] = useState(null);
    const [outdatedCampaignText, setOutdatedCampaignText] = useState(null);
    const [outdatedCampaignName, setOutdatedCampaignName] = useState(null);
    const [outdatedCampaignTarget, setOutdatedCampaignTarget] = useState(null);
    const [outdatedCampaignUrl, setOutdatedCampaignUrl] = useState(null);
    const [outdatedCampaignPrize, setOutdatedCampaignPrize] = useState(null);
    const [outdatedCampaignForwhom, setOutdatedCampaignForwhom] = useState(null);
    const [outdatedCampaignPayment, setOutdatedCampaignPayment] = useState(null);
    const [outdatedCampaignId, setOutdatedCampaignId] = useState(null);

    let currentDate = new Date();

    const handleOutdatedCampaignDelete = async (id) => {
        const response = await fetch(`http://localhost:4004/campaigns/${id}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        setOutdatedCampaignList(data)
        setOutdatedCampaignPrize(null)
    }

    useEffect(() => {
        if (outdatedCampaignList.length === 0) setOutdatedCampaignExist(false);
    }, [outdatedCampaignList])

    return (
        <div className={styles.container}>
            {outdatedCampaignExist || <div className={styles.word}>
                There is no outdated campaign
            </div>}

            {outdatedCampaignList.length > 0 && <div className={styles.heading}>
                Outdated Campaigns
            </div>}

            <div className={styles.content}>
                {outdatedCampaignList && outdatedCampaignList.map((campaign) => {
                    const enddate = campaign.endDate;
                    const enddateDateformat = new Date(enddate)

                    if (currentDate > enddateDateformat) {
                        return <OutdatedCampaigns campaign={campaign} key={campaign._id} setOutdatedCampaignTitle={setOutdatedCampaignTitle}
                            setOutdatedCampaignImg={setOutdatedCampaignImg} setOutdatedCampaignStartDate={setOutdatedCampaignStartDate} setOutdatedCampaignEndDate={setOutdatedCampaignEndDate} setOutdatedCampaignText={setOutdatedCampaignText} setOutdatedCampaignName={setOutdatedCampaignName} setOutdatedCampaignTarget={setOutdatedCampaignTarget} setOutdatedCampaignUrl={setOutdatedCampaignUrl} setOutdatedCampaignPrize={setOutdatedCampaignPrize} setOutdatedCampaignForwhom={setOutdatedCampaignForwhom} setOutdatedCampaignPayment={setOutdatedCampaignPayment} setOutdatedCampaignId={setOutdatedCampaignId} />
                    }
                })}
            </div>
            {outdatedCampaignPrize && <OutdatedCampaignModal handleOutdatedCampaignDelete={handleOutdatedCampaignDelete} setOutdatedCampaignPrize={setOutdatedCampaignPrize} outdatedCampaignTitle={outdatedCampaignTitle} outdatedCampaignImg={outdatedCampaignImg} outdatedCampaignStartDate={outdatedCampaignStartDate} outdatedCampaignEndDate={outdatedCampaignEndDate} outdatedCampaignText={outdatedCampaignText} outdatedCampaignName={outdatedCampaignName} outdatedCampaignTarget={outdatedCampaignTarget} outdatedCampaignUrl={outdatedCampaignUrl} outdatedCampaignPrize={outdatedCampaignPrize} outdatedCampaignForwhom={outdatedCampaignForwhom} outdatedCampaignPayment={outdatedCampaignPayment} outdatedCampaignId={outdatedCampaignId} />}
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch(`http://localhost:4004/campaigns`)
    const campaigns = await res.json()
    return { props: { campaigns } }
}

export default ProtectedRoute(OutdatedCampaign);
