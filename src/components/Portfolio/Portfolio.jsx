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
            <h2>Placeholder</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              dolore!
            </p>
          </div>
          <div className="gallery-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              consequuntur esse deserunt exercitationem inventore distinctio
              modi eaque. Odio fuga incidunt ex, commodi vitae exercitationem
              laudantium, ducimus similique nostrum sequi sed doloremque?
              Repellat ab earum exercitationem? Temporibus consectetur quam,
              totam, quia ullam obcaecati eius nihil nemo odio cum quos
              aspernatur necessitatibus.
            </p>
          </div>
        </div>

        <div className="gallery-picture-bl gallery-picture">
          <div className="gallery-caption">
            <h2>Placeholder</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              dolore!
            </p>
          </div>
          <div className="gallery-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              consequuntur esse deserunt exercitationem inventore distinctio
              modi eaque. Odio fuga incidunt ex, commodi vitae exercitationem
              laudantium, ducimus similique nostrum sequi sed doloremque?
              Repellat ab earum exercitationem? Temporibus consectetur quam,
              totam, quia ullam obcaecati eius nihil nemo odio cum quos
              aspernatur necessitatibus.
            </p>
          </div>
        </div>

        <div className="gallery-picture-center gallery-picture">
          <div className="gallery-caption">
            <h2>Placeholder</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              dolore!
            </p>
          </div>
          <div className="gallery-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              consequuntur esse deserunt exercitationem inventore distinctio
              modi eaque. Odio fuga incidunt ex, commodi vitae exercitationem
              laudantium, ducimus similique nostrum sequi sed doloremque?
              Repellat ab earum exercitationem? Temporibus consectetur quam,
              totam, quia ullam obcaecati eius nihil nemo odio cum quos
              aspernatur necessitatibus.
            </p>
          </div>
        </div>

        <div className="gallery-picture-tr gallery-picture">
          <div className="gallery-caption">
            <h2>Placeholder</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              dolore!
            </p>
          </div>
          <div className="gallery-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              consequuntur esse deserunt exercitationem inventore distinctio
              modi eaque. Odio fuga incidunt ex, commodi vitae exercitationem
              laudantium, ducimus similique nostrum sequi sed doloremque?
              Repellat ab earum exercitationem? Temporibus consectetur quam,
              totam, quia ullam obcaecati eius nihil nemo odio cum quos
              aspernatur necessitatibus.
            </p>
          </div>
        </div>

        <div className="gallery-picture-br gallery-picture">
          <div className="gallery-caption">
            <h2>Placeholder</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              dolore!
            </p>
          </div>
          <div className="gallery-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              consequuntur esse deserunt exercitationem inventore distinctio
              modi eaque. Odio fuga incidunt ex, commodi vitae exercitationem
              laudantium, ducimus similique nostrum sequi sed doloremque?
              Repellat ab earum exercitationem? Temporibus consectetur quam,
              totam, quia ullam obcaecati eius nihil nemo odio cum quos
              aspernatur necessitatibus.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
