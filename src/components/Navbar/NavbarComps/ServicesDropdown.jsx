import React from "react";
import { Link } from "react-router-dom";

import marketing from '../../../img/marketing.png'

export default function ServiceDropdown() {
  return (
    <div
      style={{backgroundImage: `url(${marketing})`, backgroundSize: '20%', backgroundRepeat: 'no-repeat', backgroundPosition: '80% 80%'}}
    >
      <Link to="/webdev">Web Development</Link>
      <Link to="/marketing-ceo">Merketing - SEO</Link>
      <Link to="/marketing-camp">Merketing - Campain</Link>
    </div>
  );
}
