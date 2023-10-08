import Image from "../../components/Image";
import FrontPageHeader from "../../components/frontpageheader";

const About = () => {
  return (
    <div>
      <FrontPageHeader />

      <nav className="navbar badge text-wrap w-100 mt-5">
        <h3 className="text-dark mt-5">About Us</h3>
      </nav>
      <p className="fs-5 bg-white">
        Our website is simple and easy,developed by considering some problems
        that are difficult to our society. This website is developed in order to
        develop web designing skill and it is very useful and have great
        functionality. By using our website you can help yourself and also you
        will make our product well known.Thank you for visiting our website!!!
      </p>
      <Image />
    </div>
  );
};

export default About;
