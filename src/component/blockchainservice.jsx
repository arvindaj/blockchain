import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import productivtyone from '../assets/img2/Mask group.svg'
import BusinessGrowth from '../assets/img2/Business Growth.svg'
import RunningAppExperience from '../assets/img2/Running App Experience.svg'
import '../assets/css/explorecard.css'

export default function BlockchainService() {
  return (
    <div className="container text-center my-5 py-5">
      {/* Heading */}
      <h2 className="fw-bold mb-4 display-6">
        End-to-end Blockchain <br /> Development Service
      </h2>

      {/* Three columns */}
      <div className="row mb-5">
        {/* Productivity */}
        <div className="col-md-4 mb-4">
          <h5 className="fw-bold mb-3">Productivity</h5>
          <div className="card shadow-sm border-0 rounded-3">
            <img
              src={productivtyone}
              alt="Productivity"
              className="card-img-top rounded-3"
            />
          </div>
        </div>

        {/* Running App Experience */}
        <div className="col-md-4 mb-4">
          <h5 className="fw-bold mb-3">Running App Experience</h5>
          <div className="card shadow-sm border-0 rounded-3">
            <img
              src={BusinessGrowth}
              alt="Running App Experience"
              className="card-img-top rounded-3"
            />
          </div>
        </div>

        {/* Business Growth */}
        <div className="col-md-4 mb-4">
          <h5 className="fw-bold mb-3 ">Business Growth</h5>
          <div className="card shadow-sm border-0 rounded-3">
            <img
              src={RunningAppExperience}
              alt="Business Growth"
              className="card-img-top rounded-3"
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <p className=" mb-4 px-md-5 fs-5"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 200,
          fontStyle: "normal",
          fontSize: "16px",
          letterSpacing: "0%",
          verticalAlign: "middle",
        }}>
        We provide blockchain solutions at every stage of the process; strategy to deployment.
        Custom Smart Contracts - Smart-contracts that are entirely automatic, and enforce themselves fully, your workflows.

      </p>

      {/* Button */}
      <button className="btn  btn-lg px-4 py-2 rounded-pill explore-btn">
        Explore Now
      </button>
    </div>
  );
}
