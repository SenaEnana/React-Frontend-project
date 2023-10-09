import Image from "../../components/Image";
import NavBar from "../../layouts/Navbar";

const About = () => {
  return (
    <div>
      <NavBar />
      <h4 className="text-dark mt-3 text-center">About Us</h4>
      <p className="fs-5 bg-white ms-2">
        Our website is simple and easy,developed by considering some problems
        that are difficult to our society. This website is developed in order to
        develop web designing skill and it is very useful and have great
        functionality. By using our website you can help yourself and also you
        will make our product well known.Thank you for visiting our website:)
      </p>
      <Image />
    </div>
  );
};

export default About;
