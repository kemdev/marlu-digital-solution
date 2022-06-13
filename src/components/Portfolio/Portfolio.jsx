import React from "react";
import "./portfolio.scss";

import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="portfolio-container">
        <div className="gallery-picture-tl gallery-picture">
          <div className="gallery-caption">
            <h3>PANDEMIC</h3>
            <p>
              We helped hundreds of business to digitalize during the Pandemic.
            </p>
          </div>
          <div className="gallery-text d-flex flex-column align-items-center justify-content-center">
            <p>
              Our Agency helped many businesses during the pandemic to get their business online and revise new marketing techniques to adapt to the pandemic environment.
            </p>
            <button type="button" className="btn">
              <a href="./">Learn more</a>
            </button>
            
          </div>
        </div>

        <div className="gallery-picture-bl gallery-picture">
          <div className="gallery-caption">
            <h2>INCREASED TRAFFIC</h2>
            <p>
              We increased the traffic for our clients with our well performed marketing campaigns.
            </p>
          </div>
          <div className="gallery-text d-flex flex-column align-items-center justify-content-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              consequuntur esse deserunt exercitationem inventore distinctio
              modi eaque.
            </p>
            <button type="button" className="btn">
              <a href="./">Learn more</a>
            </button>
          </div>
        </div>

        <div className="gallery-picture-center gallery-picture">
          <div className="gallery-caption">
            <h2>NETFLIX ON MOBILE AND TABLETS</h2>
            <p>
              Our Agency was one of many who worked in the project of making Netflix available and responsive on mobiles and tablets
            </p>
          </div>
          <div className="gallery-text d-flex flex-column align-items-center justify-content-center">
            <p>
              I'm sure many of you have heard about this wonderful new service, but for those who haven't here is a quick overview: Netflix is an American subscription based video-on-demand streaming media provider headquartered in Los Gatos, California, with offices in Hollywood, New York City, and London. The company offers DVD rental by mail as well as online streaming to personal computers, smartphones, and tablets through its website and mobile applications for iOS and Android devices. We were one of those who made the latter part possible!
            </p>
            <button type="button" className="btn">
              <a href="./">Learn more</a>
            </button>
          </div>
        </div>

        <div className="gallery-picture-tr gallery-picture">
          <div className="gallery-caption">
            <h2>SOCIAL MEDIA</h2>
            <p>
              We created many Ads that elevated the expsoure of our clients.
            </p>
          </div>
          <div className="gallery-text d-flex flex-column align-items-center justify-content-center">
            <p>
              Be it Instagram, Facebook or Youtube. We will come up with the best ways to promote your business.
              Click below to see some of our professional ads.
            </p>
            <button type="button" className="btn">
              <a href="./">Learn more</a>
            </button>
          </div>
        </div>

        <div className="gallery-picture-br gallery-picture">
          <div className="gallery-caption">
            <h2>STRATEGIES</h2>
            <p>
              We devised marketing strategies for several leading companies in many industries.
            </p>
          </div>
          <div className="gallery-text d-flex flex-column align-items-center justify-content-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              consequuntur esse deserunt exercitationem inventore distinctio
              modi eaque.
            </p>
            <button type="button" className="btn">
              <a href="./">Learn more</a>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
