import "bootstrap/dist/css/bootstrap.min.css";
import bottomimg  from '../assets/img2/whyimgbottom.svg'



export default function WhyChooseUs() {
    return (
        <div
            className="text-center py-5"
            style={{ background: "linear-gradient(180deg, #F8F1F1, #f8f9fa, #CBCBCB)" }}
        >
            {/* Heading */}
            <h2 className="fw-bold display-5">
                Why Choose Us to PavalSoft <br /> Blockchain Developers
            </h2>

            {/* Centered Paragraph */}
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <p className="text-muted mt-3 mb-5 fs-5">
                            How we helped bring a live Web2 game with 20M+ users on-chain,
                            with zero disruption to gameplay. Accelerate MVP development
                            and full-scale launch with expert dApp developers.
                        </p>
                    </div>
                </div>
            </div>

            {/* Three Columns */}
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 mb-4">
                        <p className="fs-5 fw-bold text-muted">
                            How we helped bring a live Web2 game with 20M+ users on-chain,
                            with zero disruption to gameplay.
                        </p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <p className="fw-bold fs-5 text-muted">
                            How we helped bring a live Web2 game with 20M+ users on-chain,
                            with zero disruption to gameplay.
                        </p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <p className="fw-bold fs-5 text-muted">
                            How we helped bring a live Web2 game with 20M+ users on-chain,
                            with zero disruption to gameplay.
                        </p>
                    </div>
                </div>
            </div>

            {/* Button */}
            <button className="btn btn-dark btn-lg rounded-pill px-4 mt-3">
                Connect with Expert
            </button>

            
            {/* Decorative Bottom Bar with Image */}
            <div className="mt-5">
                <img
                    src={bottomimg}  // <-- replace with your actual image path
                    alt="decorative bottom bar"
                    className="img-fluid w-100"
                    style={{ objectFit: "cover", height: "60px" }}
                />
            </div>
        </div>
    );
}
