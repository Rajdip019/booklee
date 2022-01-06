import Document from "./document"
import HomePageMain from "./components/HomePageMain"
import Navbar from "./components/Navbar.js"
import NewlyAddedHome from "./components/NewlyAddedHome"
import GetBooksHome from "./components/GetBooksHome"
import TopFreeBooksHome from "./components/TopFreeBooksHome"
import TopStoryBooksHome from "./components/TopStoryBooksHome"
import DonateBottomHome from "./components/DonateBottomHome"
import Footer from "./components/Footer"


export default function Home({sellBooks, donateBooks, sellerDetails}) {


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
  const res = await fetch("https://booklee.vercel.app/api/sellbook");
  const res2 = await fetch("https://booklee.vercel.app/donatebook");
  const res3 = await fetch ("https://booklee.vercel.app/api/user")
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
}

