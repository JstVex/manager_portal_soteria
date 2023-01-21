import Donation from '../components/Donation';
import Modal from '../components/Modal';
import { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css'

export default function Home({ donations }) {
  const [nopost, setNopost] = useState("there is no post at this moment");
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [selectedText, setSelectedText] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [selectedTarget, setSelectedTarget] = useState(null);
  const [selectedUrl, setSelectedUrl] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedDonation, setSelectedDonation] = useState(null);

  useEffect(() => {
    if (donations.length > 0) {
      setNopost(null)
    }
  })

  // console.log(donations)
  return (
    <div className={styles.container}>
      <div className={styles.word}>
        {nopost}
      </div>

      <div className={styles.content}>
        {donations && donations.map((donation) => {
          return <Donation donation={donation} key={donation._id} setSelectedTitle={setSelectedTitle}
            setSelectedImg={setSelectedImg} setSelectedStartDate={setSelectedStartDate} setSelectedEndDate={setSelectedEndDate} setSelectedText={setSelectedText} setSelectedName={setSelectedName} setSelectedTarget={setSelectedTarget} setSelectedUrl={setSelectedUrl} setSelectedLocation={setSelectedLocation} setSelectedPayment={setSelectedPayment} setSelectedId={setSelectedId} setSelectedDonation={setSelectedDonation} />
        })}
      </div>
      {selectedTitle && <Modal setSelectedTitle={setSelectedTitle} selectedTitle={selectedTitle} selectedImg={selectedImg} selectedStartDate={selectedStartDate} selectedEndDate={selectedEndDate} selectedText={selectedText} selectedName={selectedName} selectedTarget={selectedTarget} selectedUrl={selectedUrl} selectedLocation={selectedLocation} selectedPayment={selectedPayment} selectedId={selectedId} selectedDonation={selectedDonation} />}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:4008/donations/new`)
  const donations = await res.json()
  return { props: { donations } }
}
