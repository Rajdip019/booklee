import Document from "./document"
import HomePageMain from "./components/HomePageMain"
import Navbar from "./components/Navbar.js"
import NewlyAddedHome from "./components/NewlyAddedHome"
import GetBooksHome from "./components/GetBooksHome"
import TopFreeBooksHome from "./components/TopFreeBooksHome"
import TopStoryBooksHome from "./components/TopStoryBooksHome"
import DonateBottomHome from "./components/DonateBottomHome"
import Footer from "./components/Footer"
import {template} from "../helpers/template"


export default function Home({sellBooks, donateBooks, sellerDetails}) {

  console.log(template)
  return (
    <>  
    <Document />
    <Navbar/>
    <HomePageMain />
    <NewlyAddedHome 
      sellBooks={sellBooks}
      sellerDetails = {sellerDetails}
    />
    <GetBooksHome />
    <TopFreeBooksHome 
    donateBooks={donateBooks}
    sellerDetails = {sellerDetails}
    />
    <TopStoryBooksHome 
      sellBooks={sellBooks}
      sellerDetails = {sellerDetails}
    />
    <DonateBottomHome />
    <Footer />
    </>
  )
}

export async function getStaticProps() {
  const {templateString} = template;
  try{
    const res = await fetch(`${templateString}/api/sellbook`);
    const res2 = await fetch(`${templateString}/api/donatebook`);
    const res3 = await fetch (`${templateString}/api/user`)
    const data = await res.json()
    const data2 = await res2.json()
    const data3 = await res3.json()
    return{
      props:{
        sellBooks : data,
        donateBooks : data2,
        sellerDetails : data3
      }
    }

  }catch{
    return{
      notFound : true
    }
  }
}

