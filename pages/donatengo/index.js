import Document from "../document";
import Navbar from "../components/Navbar";
import GeneralSidebar from "../components/GeneralSidebar";
import DonationMainCounter from "../components/DonationMainCounter";


export default function ProductDetailsSellPage({donateNGOData}) {

      const totalDonationStr = donateNGOData.map((result) => ({
        quantity: result?.quantity,
      }));

      const result = totalDonationStr.map(a => a.quantity);

      const totalDonationArr = result.map(Number);

      const totalDonation = totalDonationArr.reduce((a, b) => a + b, 0)  

    return (
      <>  
      <Document />
      <Navbar/>
      <GeneralSidebar title="Donate to NGO"/>
      <div className="lg:ml-[300px]">
      <DonationMainCounter 
        totalDonation = {totalDonation}
      />  
      </div>
      </>
    )
  }

  export async function getStaticProps(){
    const res = await fetch("https://booklee.vercel.app/api/donatengo/counter");
    const donateNGOData = await res.json(); 
    
    if (!donateNGOData) {
      return {
        notFound: true,
      }
    }

    return {
        props : {
            donateNGOData,
        }
    }
  };