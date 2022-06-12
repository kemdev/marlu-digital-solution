import React from "react";
import "./aboutUs.scss";

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us-title">
        {" "}
        <h1>OUR VISION</h1>
      </div>
      <div className="container">
        <div className="card business">
          <div className="front d-flex align-items-center justify-content-center">
            <h2>BUSINESS</h2>
          </div>
          <div className="back d-flex align-items-center justify-content-center">
            <div className="text-block mx-4 text-center">
              Our agency is a professional web development and online marketing
              agency that offers affordable, high-quality service to businesses
              of all sizes. Founded in 2022 by experienced professionals with
              several years of experience in the field, our team has a wealth of
              knowledge and expertise to offer clients across many different
              industries. From website design and branding to social media
              campaigns and SEO work - we can help your business reach its full
              potential online!
            </div>
          </div>
        </div>
        <div className="card sustainability">
          <div className="front d-flex align-items-center justify-content-center">
            <h2>SUSTAINABILITY</h2>
          </div>
          <div className="back d-flex align-items-center justify-content-center mx-2">
            <div className="text-block mx-4 text-center">
              The importance of sustainability to our agency is twofold. First,
              it is important to us because it is the responsible, sustainable,
              and pragmatic approach to develop that will result in the
              longest-term benefits for both our clients and the community.
              Second, we believe that promoting sustainability is important to
              our clients and stakeholders because it is the responsible and
              practical approach to develop that will protect the environment
              and promote prosperity. Our agency is committed to working with
              our clients, stakeholders, and the community to promote
              sustainable marketing campaigns and protect our environment.
            </div>
          </div>
        </div>
        <div className="card cultural">
          <div className="front d-flex align-items-center justify-content-center">
            <h2>CULTURE</h2>
          </div>
          <div className="back d-flex align-items-center justify-content-center mx-2">
            <div className="text-block mx-4 text-center">
              Australia is the world's largest island country and it occupies an
              area of more than 24 million square kilometers. The country is
              made up of a large number of different landmasses, each with its
              own unique cultural heritage. The predominant culture in Australia
              is Anglo Saxon, as it is the culture that has been most heavily
              influenced by the British. Australia is also home to the
              Aboriginal people, who possess a unique culture that is different
              from that of any other culture in the world. The Aborigines have a
              very complex spiritual and cultural heritage, which they have
              preserved through a number of traditional ceremonies and
              practices. Our Agency funds many projects that focuses on
              preserving these cultural Treasures.
            </div>
          </div>
        </div>
      </div>
      <div class="container-team">
        <div class="about-us-caption"> <h2>OUR FOUNDER TEAM</h2></div>
        <div class="card-amr d-flex flex-column align-items-center">
          <div className="amr-img team-img"></div>{" "}
          <div className="amr-text"><h3>Amr Attia</h3></div>
        </div>
        <div class="card-georgios d-flex flex-column align-items-center">
          <div className="georgios-img team-img"></div>{" "}
          <div className="amr-text"><h3>Georgios Roidis</h3></div>
        </div>
        <div class="card-kareem d-flex flex-column align-items-center">
          <div className="kareem-img team-img"></div>{" "}
          <div className="amr-text"><h3>Abdulkarim Alarmanazi</h3></div>
        </div>
        <div class="card-jude d-flex flex-column align-items-center">
          <div className="jude-img team-img"></div>{" "}
          <div className="amr-text"><h3>Judielle Villa</h3></div>
        </div>
      </div>
    </div>
  );
}
