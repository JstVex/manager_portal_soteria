import styles from "../../styles/Home.module.css"
import Donation from "@/components/Donation"
import DonationModal from "@/components/DonationModal";
import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

const NewDonations = ({ donations }) => {
    const [newDonationList, setNewDonationList] = useState(donations);
    const [newDonationExist, setNewDonationExist] = useState(true);

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
    const [newDonation, setNewDonation] = useState(null);

    const handleNo = async (id) => {
        const response = await fetch(`http://localhost:4008/donations/${id}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        console.log(data)
        setNewDonationList(data)
        setDonationLocation(null)
    }

    const handleYes = async (id) => {
        const response = await fetch(`http://localhost:4004/donations`, {
            method: 'POST',
            body: JSON.stringify(newDonation),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log('Posted', data)

        const patchResponse = await fetch(`http://localhost:4008/donations/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ newPost: false }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const updatedData = await patchResponse.json();
        console.log('Updated all donations:', updatedData);
        setNewDonationList(updatedData);
        setDonationLocation(null);
    }

    useEffect(() => {
        if (newDonationList.length === 0) setNewDonationExist(false);
    }, [newDonationList])

    return (
        <div className={styles.container}>
            {newDonationExist || <div className={styles.word}>
                There is no new donation
            </div>}

            {newDonationList.length > 0 && <div className={styles.heading}>
                New Donations
            </div>}
            <div className={styles.content}>
                {newDonationList && newDonationList.map((donation) => {
                    return <Donation donation={donation} key={donation._id} setDonationTitle={setDonationTitle}
                        setDonationImg={setDonationImg} setDonationStartDate={setDonationStartDate} setDonationEndDate={setDonationEndDate} setDonationText={setDonationText} setDonationName={setDonationName} setDonationTarget={setDonationTarget} setDonationUrl={setDonationUrl} setDonationLocation={setDonationLocation} setDonationPayment={setDonationPayment} setDonationId={setDonationId} setNewDonation={setNewDonation} />
                })}
            </div>
            {donationLocation && <DonationModal handleNo={handleNo} handleYes={handleYes} setDonationLocation={setDonationLocation} donationTitle={donationTitle} donationImg={donationImg} donationStartDate={donationStartDate} donationEndDate={donationEndDate} donationText={donationText} donationName={donationName} donationTarget={donationTarget} donationUrl={donationUrl} donationLocation={donationLocation} donationPayment={donationPayment} donationId={donationId} />}
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:4008/donations/new`)
    const donations = await res.json()
    return { props: { donations } }
}

export default ProtectedRoute(NewDonations);