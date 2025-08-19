import "bootstrap/dist/css/bootstrap.min.css";
import overlayImg from "../assets/img2/tradingeasy.svg"; // small overlay image
import laptopBg from "../assets/img2/tradingimg.svg"; // background image
import Criclebg from "../assets/img2/cricle.svg"; // background image
import Greentike from "../assets/img2/greenacircle.svg";
import '../assets/css/wordpresssection.css'
import '../assets/css/tradingsection.css'
import "bootstrap/dist/css/bootstrap.min.css";

const TradingSection = () => {
    return (
        <section className="py-2 mt-5">
            <div className="container">
                <div className="row align-items-center">

                    {/* Left Images */}
                    <div className="col-lg-6 col-md-6 col-12 position-relative mb-5 mb-md-0 d-flex justify-content-center">
                        <div className="position-relative w-100 d-flex justify-content-center">
                            {/* Bottom Image with Animation */}
                            <img
                                src={laptopBg}
                                alt="Laptop Background"
                                className="img-fluid rounded-4 laptop-bg-animation"
                            />

                            {/* Overlay small image with Animation */}
                            <div className="tradingesay">
                                <img
                                    src={overlayImg}
                                    alt="Overlay"
                                    className="img-fluid rounded-4"
                                />
                            </div>

                        </div>
                    </div>


                    {/* Right Content */}
                    <div className="col-lg-6 col-md-6 col-12 text-center text-md-start px-lg-5">

                        <h1 className="mb-3 display-5">Automate, Increase ConfidenceWith Blockchains</h1>
                        <p
                            className="text-muted mb-3"
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                fontWeight: 200,
                                fontStyle: "normal",
                                fontSize: "16px",
                                letterSpacing: "0%",
                                verticalAlign: "middle",
                            }}
                        >
                            Blockchain alters the way organizations perform operations – it cuts
                            down the levels of intermediation, automates the work process and
                            records that are tamper-resistant. Decentralized Ledger makes every node
                            a copy of a verified record – which means single points of failure.
                        </p>
                        <div className="card  border-0 rounded-4 p-3 d-flex flex-row align-items-center justify-content-between" style={{ backgroundColor: '#F9F9F9' }}>
                            {/* Left Side - Features */}
                            <div className="mt-2">
                                <p className="d-flex align-items-center  mb-2" style={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: 200,
                                    fontStyle: "normal",
                                    fontSize: "16px",
                                    lineHeight: "100%",
                                }}>
                                    <img
                                        src={Greentike}
                                        alt="check"
                                        className="me-2"
                                        style={{ width: "30px", height: "20px" }}
                                    />
                                    Trade in 3 fiat
                                </p>
                                <p className="d-flex align-items-center mb-2" style={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: 200,
                                    fontStyle: "normal",
                                    fontSize: "16px",
                                    lineHeight: "100%",
                                }}>
                                    <img
                                        src={Greentike}
                                        alt="check"
                                        className="me-2"
                                        style={{ width: "30px", height: "20px" }}
                                    />
                                    24/7 live chat
                                </p>
                                <p className="d-flex align-items-center mb-2 " style={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontSize: "16px",
                                    lineHeight: "100%",
                                }}>
                                    <img
                                        src={Greentike}
                                        alt="check"
                                        className="me-2"
                                        style={{ width: "30px", height: "20px" }}
                                    />
                                    Margin Trading
                                </p>
                            </div>



                            {/* Right Side - Circle */}
                            <div
                                className=" d-flex align-items-center justify-content-center"
                                style={{
                                    height: "130px",
                                    width: '50%'
                                }}
                            >
                                <img
                                    src={Criclebg}
                                    alt="Laptop Background"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default TradingSection;