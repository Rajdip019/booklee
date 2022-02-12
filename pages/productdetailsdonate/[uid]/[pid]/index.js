// URL: productdetailsdonate

import Document from "../../../document";
import Navbar from "../../../components/Navbar";
import GeneralSidebar from "../../../components/GeneralSidebar";
import ProductDetailsDonation from "../../../components/ProductDetailsDonation";
import SellerDonaterDetailsDonate from "../../../components/Seller-DonatorDetailsDonate";
import Footer from "../../../components/Footer";
import { template } from "../../../../helpers/template";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

export default function ProductDetailsDonate({
  donateBooksDetails,
  UserBookDetails,
}) {

  const [progress, setProgress] = useState(0);

  const topLoader = () => {
    setProgress(30);
  };
  return (
    <>
      <Document />
      <Navbar />
      <LoadingBar
        color="#4287f5"
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <GeneralSidebar title="Book Details" />
      <div className=" mr-6 lg:ml-[300px] my-10">
        <ProductDetailsDonation
          name={donateBooksDetails.name}
          img={donateBooksDetails.photo}
          description={donateBooksDetails.description}
          author={donateBooksDetails.author}
          condition={donateBooksDetails.condition}
          city={donateBooksDetails.city}
          country={donateBooksDetails.country}
          state={donateBooksDetails.state}
          landmark={donateBooksDetails.landmark}
          college = {donateBooksDetails.college}
        school = {donateBooksDetails.school}
        />
      </div>
      <div className="lg:ml-[300px]">
        <SellerDonaterDetailsDonate
          _id={UserBookDetails._id}
          name={UserBookDetails.name}
          email = {UserBookDetails.email}
          img={UserBookDetails.image}
          phno={UserBookDetails.phone}
          adress={UserBookDetails.address}
          country={UserBookDetails.country}
          city={UserBookDetails.city}
          state={UserBookDetails.state}
          landmark={UserBookDetails.landmark}
          book_id = {donateBooksDetails._id}
          cityB={donateBooksDetails.city}
          addressB={donateBooksDetails.adress}
          countryB={donateBooksDetails.country}
          stateB={donateBooksDetails.state}
          landmarkB={donateBooksDetails.landmark}
          pinB={donateBooksDetails.pin}
          topLoader = {topLoader}
          college = {donateBooksDetails.college}
        school = {donateBooksDetails.school}
        />
      </div>
      <div className="lg:ml-[300px]">
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps({ params: { pid, uid } }) {
  const {templateString} = template;
  try {
    const res = await fetch(`${templateString}/api/donatebook/${pid}`);
    const res2 = await fetch(
      `${templateString}/api/user/userdetails/${uid}`
    );
    const data = await res.json();
    const data2 = await res2.json();
    return {
      props: {
        donateBooksDetails: data,
        UserBookDetails: data2,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
