import Image from "../../components/Image";
import NavBar from "../../layouts/Navbar";

function Service() {
  return (
    <div>
      <NavBar />
      <div className="mt-3">
        <h3 className="fs-4 fw-bold text-dark mt-2 text-center">
          The services our website give to Teachers and Students
        </h3>
        <p className="fs-5 mt-2 ms-2">
          Our website give easy and simple service without consuming your time.
          If you are teacher and want to have work or you are very interested in
          teaching, you don't have to worry you will get all you want but you
          have to have an account and give all useful information then there is
          nothing to worry about getting job.
        </p>
        <p className="fs-5 ms-2">
          Share your knowledge to the others for better future and for best and
          skilled children..
        </p>
        <p className="fs-5 ms-2">
          No need to think about consuming time or inconvenience, our website
          will give you the job that fits your information by considering your
          need.
        </p>
        <Image />
        <p className="fs-5 mt-3 ms-2">
          This website is also useful for students and parents this means if you
          are student and you want to study or want to have your own teacher but
          don't know where to get the best teacher that is convenient for you
          both within time and quality you don't have to worry our website can
          give you what you are looking for you can get the teacher you are
          looking for in short period of time all you have to do is signing up
          to our website and you can visit whenever you want by log into the
          website you will save your time by working with us :)
        </p>
        <p className="fs-5 mt-3 ms-2">
          If you are parent and you are looking for teacher for your children
          all you have to do is having an account by signing up and you will get
          what you need you will be grateful for working with us!!
        </p>
        <p className="fs-4 text-center">Work With Us For Better Experience!</p>
      </div>
    </div>
  );
}

export default Service;
