import Header from "../components/Header";
import { Container } from "react-bootstrap";
import { useState } from "react";

const OldProfile = () => {
  const [infos, setInfos] = useState([
    { title: "Name", value: localStorage.getItem("name"), id: 1 },
    { title: "Email", value: localStorage.getItem("email"), id: 2 },
    { title: "Phone Number", value: localStorage.getItem("phoneNo"), id: 3 },
    { title: "Address", value: localStorage.getItem("address"), id: 4 },
  ]);
  return (
    <div>
      <Header />
      <Container className="container-lg float-end">
        {infos.map((info) => (
          <div className="info-preview" key={info.id}>
            <h3 className="text-danger float-start mt-3">{info.title} :</h3>
            <p className="p-5">
              Your {info.title} Is: {info.value}
            </p>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default OldProfile;
