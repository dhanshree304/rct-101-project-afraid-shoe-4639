import React from "react";
import "../App.css";
import { Heading } from "@chakra-ui/react";

const FormsPage = () => {
  const forms = [
    {
      id: 1,
      title: "Fund Application Form",
      image:
        "https://thumbs.dreamstime.com/b/loan-application-form-desk-58609467.jpg",
    },
    {
      id: 2,
      title: "Investment Agreement Form",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.tugJUCZJI_JF04YhrDyh9AAAAA&pid=ImgDet&rs=1",
    },
    {
      id: 3,
      title: "KYC (Know Your Customer) Form",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.q1QsaUD31qYUqzOyR_hAUQHaDt&pid=ImgDet&rs=1",
    },
    {
      id: 4,
      title: "Fund Application Form",
      image:
        "https://thumbs.dreamstime.com/b/loan-application-form-desk-58609467.jpg",
    },
  ];

  return (
    <div className="forms-page-container">
      <Heading mb={10}>Forms</Heading>
      <div className="forms-list">
        {forms.map((form) => (
          <div key={form.id} className="form-card">
            <img src={form.image} alt={form.title} className="form-image" />
            <div className="form-overlay">
              <h3 className="form-title">{form.title}</h3>
              <button className="form-download-button">Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormsPage;
