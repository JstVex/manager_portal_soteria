import styles from "../../styles/Home.module.css"
import Donation from "@/components/Donation"
import DonationModal from "@/components/DonationModal";
import { useEffect, useState } from "react";

export default function NewDonations({ donations }) {
    const [newDonation, setNewDonation] = useState(true);

    const [donationTitle, setDonationTitle] = useState(null);
    const [donationImg, setDonationImg] = useState(null);
    const [donationStartDate, setDonationStartDate] = useState(null);
    const [donationEndDate, setDonationEndDate] = useState(null);
    const [donationText, setDonationText] = useState(null);
    const [donationName, setDonationName] = useState(null);
    const [donationTarget, setDonationTarget] = useState(null);
    const [donationUrl, setDonationUrl] = useState(null);
    const [donationLocation, setDonationLocation] = useState(null);
    const [donationPayment, setDonationPayment] = useState(null);
    const [donationId, setDonationId] = useState(null);
    // const [donation, setDonationDonation] = useState(null);

    useEffect(() => {
        if (donations.length === 0) setNewDonation(false);
    }, [donations])

    return (
        <div className={styles.container}>
            {newDonation || <div className={styles.word}>
                There is no new post
            </div>}


            {donations.length > 0 && <div className={styles.title}>
                New Donations
            </div>}
            <div className={styles.content}>

                {donations && donations.map((donation) => {
                    return <Donation donation={donation} key={donation._id} setDonationTitle={setDonationTitle}
                        setDonationImg={setDonationImg} setDonationStartDate={setDonationStartDate} setDonationEndDate={setDonationEndDate} setDonationText={setDonationText} setDonationName={setDonationName} setDonationTarget={setDonationTarget} setDonationUrl={setDonationUrl} setDonationLocation={setDonationLocation} setDonationPayment={setDonationPayment} setDonationId={setDonationId} />
                })}
            </div>
            {donationLocation && <DonationModal setDonationLocation={setDonationLocation} donationTitle={donationTitle} donationImg={donationImg} donationStartDate={donationStartDate} donationEndDate={donationEndDate} donationText={donationText} donationName={donationName} donationTarget={donationTarget} donationUrl={donationUrl} donationLocation={donationLocation} donationPayment={donationPayment} donationId={donationId} />}
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:4008/donations/new`)
    const donations = await res.json()
    return { props: { donations } }
}
