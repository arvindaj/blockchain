import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Bussiness from "../assets/img2/bussinessimg.svg";

// Import your own images instead of icons
import MobileImg from "../assets/img2/XMLID1.svg";
import TargetImg from "../assets/img2/XMLID2.svg";
import IdeaImg from "../assets/img2/XMLID3.svg";
import CheckImg from "../assets/img2/XMLID4.svg";

export default function BusinessGrowth() {
    return (
        <div className="container my-5 p-3">
            <div className="row align-items-center">

                {/* Left Image */}
                <div className="col-md-5 mb-4 mb-md-0">
                    <div className="position-relative rounded overflow-hidden">
                        <img
                            src={Bussiness}
                            alt="Business Growth"
                            className="img-fluid rounded"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div className="col-md-7">
                    <h2 className="fw-bold display-6">
                        Our Top-Performing For <br /> Business Growth
                    </h2>
                    <p className="text-muted fs-5 col-lg-10 ">
                        Intelivita specializes in delivering scalable Android app solutions,
                        leveraging our team’s expertise across the entire development process.
                    </p>

                    <ul className="list-unstyled mt-4 fs-5">
                        <li className="d-flex align-items-start mb-3">
                            <img src={MobileImg} alt="Mobile" className="me-3 mt-1 flex-shrink-0" width={28} height={44} />
                            <span className="text-wrap flex-grow-1 mt-3">
                                Intelivita specializes in delivering scalable Android app solutions.
                            </span>
                        </li>
                        <li className="d-flex align-items-start mb-3">
                            <img src={TargetImg} alt="Target" className="me-3 mt-1 flex-shrink-0" width={28} height={44} />
                            <span className="text-wrap flex-grow-1 mt-3">
                                Intelivita specializes in delivering scalable Android app solutions.
                            </span>
                        </li>
                        <li className="d-flex align-items-start mb-3">
                            <img src={IdeaImg} alt="Idea" className="me-3 mt-1 flex-shrink-0" width={28} height={44} />
                            <span className="text-wrap flex-grow-1 mt-3">
                                Intelivita specializes in delivering scalable Android app solutions,
                                leveraging our team's expertise across the entire development process.
                            </span>
                        </li>
                        <li className="d-flex align-items-start mb-3">
                            <img src={CheckImg} alt="Check" className="me-3 mt-1 flex-shrink-0" width={28} height={44} />
                            <span className="text-wrap flex-grow-1 mt-3">
                                Intelivita specializes in delivering scalable Android app solutions.
                            </span>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
}
