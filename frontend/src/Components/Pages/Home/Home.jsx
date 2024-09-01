import AboutUs from "./component/AboutUs"
import Footer from "./component/Footer"
import Hero from "./component/Hero"
import LatestArticles from "./component/LatestArticles"



const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero/>
      <LatestArticles/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default Home