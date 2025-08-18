import "bootstrap/dist/css/bootstrap.min.css";
import Minebanner from "../assets/img2/banner.svg";
import bgbanner from "../assets/img2/bgbanner.svg";

const HeroSection = () => {
    return (
        <section
            className="container-fluid text-dark position-relative p-5"
            style={{ overflow: "hidden" }}
        >
            {/* Background geometric shapes */}
            <div
                className="position-absolute d-none d-lg-block"
                style={{
                    top: "15%",
                    left: "43%",
                    width: "60%",
                    height: "550px",
                    backgroundImage: `url(${bgbanner})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    zIndex: 0, // stays behind
                }}
            ></div>


            <div className="row align-items-center position-relative" style={{ zIndex: 1 }}>
                {/* Left Text Section */}
                <div className="col-md-6 px-5 mt-0 mb-5">
                    <h1 className="fw-bold display-2">
                        Build Better <br />
                        Chain <br />
                        Advancing <br />
                        Global
                    </h1>
                    <p className="text-muted mt-3 fs-5">
                        Our vetted developers deliver robust and user-friendly iOS
                        applications
                    </p>
                    <div className="d-flex mt-4">
                        <button className="btn btn-dark rounded-pill me-3 px-4">
                            Get A Quote
                        </button>
                        <button className="btn btn-outline-dark rounded-pill px-4">
                            Call Expert
                        </button>
                    </div>
                </div>


                {/* Right Image Section */}
                <div className="col-md-6 text-center px-5">
                    <div className="mx-auto p-3 rounded-4">
                        <div className="mt-0 text-center">
                            <img
                                src={Minebanner}
                                alt="blockchain"
                                className="img-fluid"
                                style={{ width: "700px", marginTop: "-60px" }}
                            />
                        </div>
                    </div>

                    {/* Notch + Text inline */}
                    <div className="d-flex align-items-center justify-content-end mt-3">
                        <div
                            style={{
                                width: "30px",
                                height: "12px",
                                borderRadius: "6px",
                                backgroundColor: "#8C8D8C",
                                marginRight: "10px",
                            }}
                        ></div>
                        <p className="text-muted small mb-0">The Gateway to Potential</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
