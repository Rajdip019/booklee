// URL: productdetailssell/sellerId/bookId

import Document from "../../../document";
import Navbar from "../../../components/Navbar";
import GeneralSidebar from "../../../components/GeneralSidebar";
import Footer from "../../../components/Footer";
import ProductDetailsSell from "../../../components/ProductDetailsSell";
import SellerDonaterDetails from "../../../components/Seller-DonaterDetails";
import { template } from "../../../../helpers/template";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";


export default function ProductDetailsSellPage({sellBooksDetails, UserBookDetails}) {
  const [progress, setProgress] = useState(0);

  const topLoader = () => {
    setProgress(30);
  };

    return (
      <>  
      <Document />
      <Navbar/>
      <LoadingBar
        color="#4287f5"
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <GeneralSidebar title="Book Details"/>
      <div className=" mr-6 lg:ml-[300px]">
      <ProductDetailsSell 
        name={sellBooksDetails.name}
        img={sellBooksDetails.photo}
        description={sellBooksDetails.description}
        category={sellBooksDetails.category}
        author={sellBooksDetails.author}
        condition={sellBooksDetails.condition}
        city={sellBooksDetails.city}
        address = {sellBooksDetails.adress}
        country = {sellBooksDetails.country}
        state = {sellBooksDetails.state}
        landmark ={sellBooksDetails.landmark}
        price={sellBooksDetails.price}
        college = {sellBooksDetails.college}
        school = {sellBooksDetails.school}
      />
      </div>
      <div className="lg:ml-[300px]">
      <SellerDonaterDetails
            _id = {UserBookDetails._id}
            name= {UserBookDetails.name}
            email = {UserBookDetails.email}
            img = {UserBookDetails.image}
            phno={UserBookDetails.phone}
            adress= {UserBookDetails.address}
            country ={UserBookDetails.country}
            city = {UserBookDetails.city}
            state = {UserBookDetails.state}
            landmark = {UserBookDetails.landmark}
            book_id = {sellBooksDetails._id}
            cityB={sellBooksDetails.city}
            addressB = {sellBooksDetails.adress}
            countryB = {sellBooksDetails.country}
            stateB = {sellBooksDetails.state}
            landmarkB ={sellBooksDetails.landmark}
            pinB = {sellBooksDetails.pin}
            college = {sellBooksDetails.college}
            school = {sellBooksDetails.school}
            topLoader = {topLoader}
      />
      </div>
      <div className="lg:ml-[300px]">
          <Footer />
      </div>

      </>
    )
  }

  export async function getServerSideProps({params:{pid, uid}}) {
    const {templateString} = template;
    try{
      const res = await fetch(`${templateString}/api/sellbook/${pid}`);
      const res2 = await fetch(`${templateString}/api/user/userdetails/${uid}`);
      const data = await res.json()
      const data2 = await res2.json()
      return{
        props:{
          sellBooksDetails : data,
          UserBookDetails : data2
        }
      }
    }catch{
      return {
        notFound: true,
      }
    }
  }