import React from "react";
import './GoogleMap.scss';

export default function GoogleMap() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8825518378667!2d151.19490219942972!3d-33.8669175823746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae37b47f5b37%3A0x8eaddfcd1b32ca52!2sGoogle%20Sydney!5e0!3m2!1sde!2sde!4v1654946161701!5m2!1sde!2sde"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        title="map"
        className="google-map"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
