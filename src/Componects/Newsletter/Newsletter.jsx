import React from "react";
import "../Newsletter/Newsletter.css";

const Newsletter = () => {
  return (
    <div className="Newsletter">
      <h1> Get Exclusive Offer and Updates! </h1>
      <p>
        Subscribe to our newsletter for exclusive offers, product updates, and
        more.
      </p>
      <div>
        <input type="email" placeholder="Your Email"></input>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
