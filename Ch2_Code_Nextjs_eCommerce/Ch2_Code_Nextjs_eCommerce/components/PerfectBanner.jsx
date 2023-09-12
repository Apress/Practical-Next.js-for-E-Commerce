import React from "react";
import Image from "next/image";
import perfect from "../../public/images/perfect.jpg";

const PerfectBanner = () => (
  <div className="perfect-occasions">
    <div>
      <Image src={perfect} alt="perfect occasion" width="442" height="532" />
    </div>
    <div className="perfect-message">
      <p>Perfect for </p>
      <p>special occasions</p>
      <p>
        Share the love and give every guest a little explosion of sweetness with
        our show stopping macaron towers. Perfect for weddings, anniversaries
        and parties. You could even add a touch of luxury to party bags and
        wedding favors with these perfect bite sized treats.
      </p>
    </div>
  </div>
);

export default PerfectBanner;
