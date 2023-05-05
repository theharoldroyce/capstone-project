import React from "react";
import styles from "../../styles/styles";
import Abc from "../../Assests/sponsor/abc.png"
import Bostik from "../../Assests/sponsor/bostik.jpg"
import Boysen from "../../Assests/sponsor/boysen.png"
import Hard from "../../Assests/sponsor/hard.png"
import Rs from "../../Assests/sponsor/rs.png"

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src={Abc}
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src={Bostik}
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src={Boysen}
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src={Hard}
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src={Rs}
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
