import Blog from "../../components/blog/Blog";
import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Brand from "../../components/partner/Brand";
import PropertyList from "../../components/propertyList/PropertyList";
import Residential from "../../components/residential/Residential";
import Testimonial from "../../components/testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <PropertyList/>
        <Residential />
        <Testimonial />
        <Blog />
        <Brand />
        {/* <FeaturedProperties/> */}
        {/* <MailList/>*/}
        <Footer/> 
      </div>
    </div>
  );
};

export default Home;
