import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Commodi minima excepturi repudiandae velit hic maxime doloremque.
            Quaerat provident commodi consectetur veniam similique ad earum
            omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
            fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores
            labore suscipit quas? Nulla, placeat. Voluptatem esse tempore unde
            ratione, eveniet mollitia, perferendis eius temporibus dicta
            blanditiis doloremque explicabo quasi sunt vero optio cum aperiam
            vel consectetur! Laborum enim accusantium atque, excepturi sapiente
            amet! Tenetur ducimus aut commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
