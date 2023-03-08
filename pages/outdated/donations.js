import styles from '@/styles/Home.module.css'
import OutdatedDonation from '@/components/OutdatedDonation';
import { useEffect, useState } from 'react';
import OutdatedModal from '@/components/OutdatedModal';

export default function OutdatedDonations({ donations }) {
    const [outdatedDonationList, setOutdatedDonationList] = useState(donations)
    const [outdatedDonation, setOutdatedDonation] = useState(true);

    const [outdatedDonationTitle, setOutdatedDonationTitle] = useState(null);
    const [outdatedDonationImg, setOutdatedDonationImg] = useState(null);
    const [outdatedDonationStartDate, setOutdatedDonationStartDate] = useState(null);
    const [outdatedDonationEndDate, setOutdatedDonationEndDate] = useState(null);
    const [outdatedDonationText, setOutdatedDonationText] = useState(null);
    const [outdatedDonationName, setOutdatedDonationName] = useState(null);
    const [outdatedDonationTarget, setOutdatedDonationTarget] = useState(null);
    const [outdatedDonationUrl, setOutdatedDonationUrl] = useState(null);
    const [outdatedDonationLocation, setOutdatedDonationLocation] = useState(null);
    const [outdatedDonationPayment, setOutdatedDonationPayment] = useState(null);
    const [outdatedDonationId, setOutdatedDonationId] = useState(null);

    let currentDate = new Date();

    const handleOutdatedDonationDelete = async (id) => {
        const response = await fetch(`http://localhost:4004/donations/${id}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        setOutdatedDonationList(data)
        setOutdatedDonationTitle(null)
    }

    useEffect(() => {
        if (donations.length === 0) setOutdatedDonation(false);
    }, [donations])

    return (
        <div className={styles.container}>

            {outdatedDonation || <div className={styles.word}>
                There is no outdated donation
            </div>}

            {donations.length > 0 && <div className={styles.title}>
                Outdated Donations
            </div>}

            <div className={styles.content}>
                {outdatedDonationList && outdatedDonationList.map((donation) => {
                    const enddate = donation.endDate;
                    const enddateDateformat = new Date(enddate)

                    if (currentDate > enddateDateformat) {
                        return <OutdatedDonation donation={donation} key={donation._id} setOutdatedDonationTitle={setOutdatedDonationTitle}
                            setOutdatedDonationImg={setOutdatedDonationImg} setOutdatedDonationStartDate={setOutdatedDonationStartDate} setOutdatedDonationEndDate={setOutdatedDonationEndDate} setOutdatedDonationText={setOutdatedDonationText} setOutdatedDonationName={setOutdatedDonationName} setOutdatedDonationTarget={setOutdatedDonationTarget} setOutdatedDonationUrl={setOutdatedDonationUrl} setOutdatedDonationLocation={setOutdatedDonationLocation} setOutdatedDonationPayment={setOutdatedDonationPayment} setOutdatedDonationId={setOutdatedDonationId} />
                    }

                })}
            </div>
            {outdatedDonationTitle && <OutdatedModal handleOutdatedDonationDelete={handleOutdatedDonationDelete} setOutdatedDonationTitle={setOutdatedDonationTitle} outdatedDonationTitle={outdatedDonationTitle} outdatedDonationImg={outdatedDonationImg} outdatedDonationStartDate={outdatedDonationStartDate} outdatedDonationEndDate={outdatedDonationEndDate} outdatedDonationText={outdatedDonationText} outdatedDonationName={outdatedDonationName} outdatedDonationTarget={outdatedDonationTarget} outdatedDonationUrl={outdatedDonationUrl} outdatedDonationLocation={outdatedDonationLocation} outdatedDonationPayment={outdatedDonationPayment} outdatedDonationId={outdatedDonationId} />}
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch(`http://localhost:4004/donations`)
    const donations = await res.json()
    return { props: { donations } }
}
