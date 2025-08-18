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
      title: "Explore the top blockchains",
      description:
        "Confirm transactions, analyze the market, or simply learn more about crypto.",
      icon: iconExplore,
    },
    {
      title: "Powerful Blockchain Data API",
      description:
        "Access reliable and scalable blockchain data through our powerful API.",
      icon: iconApi,
    },
    {
      title: "Industry leading charts",
      description:
        "Visualize market trends and blockchain activities with advanced charts.",
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
            Blockchain data is <br /> in our DNA
          </h2>
          <p className="text-muted fs-5">
            Intelivita specializes in delivering scalable Android app solutions,
            leveraging our team's expertise across the entire development
            process.
          </p>

          {/* Features List */}
          <ul className="list-unstyled fs-5">
            {features.map((feature) => (
              <li
                key={feature.title}
                role="button"
                className={`p-3 d-flex flex-column mb-3 rounded-3 ${
                  activeFeature === feature.title
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
