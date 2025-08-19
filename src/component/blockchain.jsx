import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Blockchainimg from "../assets/img2/Group 148.svg";
import bgBlockchain from "../assets/img2/Groupbg.svg";
import "../assets/css/blockchain.css";

// Import your custom icons
import iconExplore from "../assets/img2/Group.svg";
import iconApi from "../assets/img2/Groupone.svg";
import iconCharts from "../assets/img2/Grouptwo.svg";
import iconCrypto from "../assets/img2/Groupthree.svg";

const BlockchainSection = () => {
  const [activeFeature, setActiveFeature] = useState("Explore the top blockchains");

  const features = [
    {
      title: "80% Increased Security",
      description:
        "It is cryptographically secure and nearly impossible to hack because of cryptographic integrity and immutability.",
      icon: iconExplore,
    },
    {
      title: "Real-Time Transparency",
      description:
        "The level of transparency of all transactions in the network is immediate.",
      icon: iconApi,
    },
    {
      title: "35 Times Quicker Deployment",
      description:
        "The ready-made ledger tools and frameworks accelerate the project turnaround enormously.",
      icon: iconCharts,
    },
    {
      title: "Real-time crypto prices",
      description:
        "Stay updated with live cryptocurrency price feeds from multiple exchanges.",
      icon: iconCrypto,
    },
  ];

  return (
    <div className="container py-5 p-4 mt-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-md-6 mb-4">
          <h2 className="fs-1">
            Safe, More Efficient, more transparent Data Storage
          </h2>
          <p className="text-muted fs-5">
            Blockchain provides a new generation data solution - distributed, encrypted, trust based.
            Immutable Storage- Changes cannot be made once committed and thus integrity.
            Distributed Consensus: Reduction in the requirement of central management based on the validation of the data by the multiple participants.

          </p>

          {/* Features List */}
          <ul className="list-unstyled fs-5">
            {features.map((feature) => (
              <li
                key={feature.title}
                role="button"
                className={`p-3 d-flex flex-column mb-3 rounded-3 ${activeFeature === feature.title
                    ? "bg-light shadow-sm border"
                    : ""
                  }`}
                onClick={() => setActiveFeature(feature.title)}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="me-3"
                    style={{ width: "32px", height: "32px" }}
                  />
                  <strong>{feature.title}</strong>
                </div>

                {/* Show description only if active */}
                {activeFeature === feature.title && (
                  <p className="text-muted mt-2 mb-0">{feature.description}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Images */}
        <div className="col-lg-6 col-md-6 col-12 position-relative mb-5 mb-md-0 d-flex justify-content-center">
          <div className="position-relative w-100 d-flex justify-content-center">
            {/* Base image */}
            <img
              src={Blockchainimg}
              alt="Laptop"
              className="rounded-4 laptop-bg-animation"
            />

            {/* Overlay images */}
            <div className="blockchain-overlay-card">
              <img src={bgBlockchain} alt="Overlay" className="bgBlockchaintwo" />
              <img src={bgBlockchain} alt="Overlay" className="bgBlockchainone" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainSection;
