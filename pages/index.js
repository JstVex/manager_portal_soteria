import Donation from '../components/Donation';
import Modal from '../components/Modal';
import { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css'
import Campaign from '@/components/Campaign';
import ModalCampaign from '@/components/ModalCampaign';

export default function Home({ donations, campaigns }) {
  const [nopost, setNopost] = useState("there is no post at this moment");
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [selectedText, setSelectedText] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [selectedTarget, setSelectedTarget] = useState(null);
  const [selectedPrize, setSelectedPrize] = useState(null);
  const [selectedForwhom, setSelectedForwhom] = useState(null);
  const [selectedUrl, setSelectedUrl] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  useEffect(() => {
    if (donations.length > 0 || campaigns.length > 0) {
      setNopost(null)
    }
  })

  // console.log(donations)
  return (
    <div className={styles.container}>
      <div className={styles.word}>
        {nopost}
      </div>

      {donations.length > 0 && <div className={styles.title}>
        Donations
      </div>}
      <div className={styles.content}>

        {donations && donations.map((donation) => {
          return <Donation donation={donation} key={donation._id} setSelectedTitle={setSelectedTitle}
            setSelectedImg={setSelectedImg} setSelectedStartDate={setSelectedStartDate} setSelectedEndDate={setSelectedEndDate} setSelectedText={setSelectedText} setSelectedName={setSelectedName} setSelectedTarget={setSelectedTarget} setSelectedUrl={setSelectedUrl} setSelectedLocation={setSelectedLocation} setSelectedPayment={setSelectedPayment} setSelectedId={setSelectedId} setSelectedDonation={setSelectedDonation} />
        })}
      </div>
      {campaigns.length > 0 && <div className={styles.title}>
        Campaigns
      </div>}
      <div className={styles.content}>

        {campaigns && campaigns.map((campaign) => {
          return <Campaign campaign={campaign} key={campaign._id} setSelectedTitle={setSelectedTitle}
            setSelectedImg={setSelectedImg} setSelectedStartDate={setSelectedStartDate} setSelectedEndDate={setSelectedEndDate} setSelectedText={setSelectedText} setSelectedName={setSelectedName} setSelectedTarget={setSelectedTarget} setSelectedUrl={setSelectedUrl} setSelectedPrize={setSelectedPrize} setSelectedForwhom={setSelectedForwhom} setSelectedPayment={setSelectedPayment} setSelectedId={setSelectedId} setSelectedCampaign={setSelectedCampaign} />
        })}
      </div>
      {selectedLocation && <Modal setSelectedLocation={setSelectedLocation} selectedTitle={selectedTitle} selectedImg={selectedImg} selectedStartDate={selectedStartDate} selectedEndDate={selectedEndDate} selectedText={selectedText} selectedName={selectedName} selectedTarget={selectedTarget} selectedUrl={selectedUrl} selectedLocation={selectedLocation} selectedPayment={selectedPayment} selectedId={selectedId} selectedDonation={selectedDonation} />}

      {selectedPrize && <ModalCampaign setSelectedPrize={setSelectedPrize} selectedTitle={selectedTitle} selectedImg={selectedImg} selectedStartDate={selectedStartDate} selectedEndDate={selectedEndDate} selectedText={selectedText} selectedName={selectedName} selectedTarget={selectedTarget} selectedUrl={selectedUrl} selectedPrize={selectedPrize} selectedForwhom={selectedForwhom} selectedPayment={selectedPayment} selectedId={selectedId} selectedCampaign={selectedCampaign} />}
    </div >
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:4008/donations/new`)
  const donations = await res.json()
  const res2 = await fetch(`http://localhost:4008/campaigns/new`)
  const campaigns = await res2.json()
  return { props: { donations: donations, campaigns: campaigns } }
}
