// URL: productdetailssell/sellerId/bookId

import Document from "../../../document";
import Navbar from "../../../components/Navbar";
import GeneralSidebar from "../../../components/GeneralSidebar";
import Footer from "../../../components/Footer";
import ProductDetailsSell from "../../../components/ProductDetailsSell";
import SellerDonaterDetails from "../../../components/Seller-DonaterDetails";


export default function ProductDetailsSellPage({sellBooksDetails, UserBookDetails}) {
    return (
      <>  
      <Document />
      <Navbar/>
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
      />
      </div>
      <div className="lg:ml-[300px]">
          <Footer />
      </div>

      </>
    )
  }

  export async function getServerSideProps({params:{pid, uid}}) {
    try{
      const res = await fetch(`https://booklee.vercel.app/api/sellbook/${pid}`);
      const res2 = await fetch(`https://booklee.vercel.app/api/user/userdetails/${uid}`);
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