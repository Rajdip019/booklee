import Document from "./document"
import HomePageMain from "./components/HomePageMain"
import Navbar from "./components/Navbar.js"
import NewlyAddedHome from "./components/NewlyAddedHome"
import GetBooksHome from "./components/GetBooksHome"
import TopFreeBooksHome from "./components/TopFreeBooksHome"
import TopStoryBooksHome from "./components/TopStoryBooksHome"
import DonateBottomHome from "./components/DonateBottomHome"
import Footer from "./components/Footer";
import LoadingBar from 'react-top-loading-bar';
import { useState } from "react"


export default function Home() {

  const [progress, setProgress] = useState(0)

  const topLoader = () => {
    setProgress(30);
  }
  return (
    <>  
    <div className="scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-blue-300 h-screen overflow-y-scroll">
    <Document />
    <Navbar/>
    <LoadingBar
        color='#4287f5'
        height = {4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {/* <button onClick={topLoader}>click</button> */}
    <HomePageMain />
    <div className="relative z-20 bg-white">

    <NewlyAddedHome 
      topLoader = {topLoader}
    />
    <GetBooksHome 
    topLoader = {topLoader}
    />
    <TopFreeBooksHome 
    topLoader = {topLoader}
    />
    <TopStoryBooksHome 
      topLoader = {topLoader}
    />
    <DonateBottomHome 
      topLoader = {topLoader}
    />
    <Footer />
    </div>
    </div>
    </>
  )
}


