import Document from "../document";
import Navbar from "../components/Navbar";
import GeneralSidebar from "../components/GeneralSidebar";
import DonationMainCounter from "../components/DonationMainCounter";
import { template } from "../../helpers/template";


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

  export async function getServerSideProps(){
    const {templateString} = template;

    try{
      const res = await fetch(`${templateString}/api/donatengo/counter`);
      const donateNGOData = await res.json(); 
      return {
          props : {
              donateNGOData,
          }
      }

    }catch{
      return {
        notFound: true,
      }
    }
  

  };