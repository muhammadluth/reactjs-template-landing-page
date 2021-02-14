import React, { useState } from "react";
import { Animated } from "react-animated-css";
import { ToastContainer, toast } from "react-toastify";

export function NewsletterPanel() {
  const [isVisible, setVisible] = useState(true);
  const [email, setEmail] = useState("");

  const handleClick = () => {
    toast.info(`Thank You!, ${email}`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <div className="col-xl-6 col-md-6 col-sm-4">
        <div className="newsletter">
          <Animated
            animationIn="slideInUp"
            animationOut="slideOutDown"
            isVisible={isVisible}
          >
            <div className="card text-white">
              <div className="card-body view-card-newsletter">
                <div className="icon-exit">
                  <i
                    className="fa fa-times"
                    onClick={() => setVisible(false)}
                  />
                </div>
                <h5 className="card-title">
                  Get latest updates in web technologies
                </h5>
                <p className="card-text newsletter-text">
                  I write articles related to web technologies, such as design
                  trends, development tools, UI/UX case studies and reviews, and
                  more. Sign up to my newsletter to get them all.
                </p>
                <div className="row">
                  <div className="col-xl-9 col-md-12 col-sm-12 view-newsletter">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="Enter Address"
                    />
                  </div>
                  <div className="col-xl-3 col-md-12 col-sm-12 view-newsletter">
                    <button
                      disabled={email === ""}
                      onClick={() => handleClick()}
                      className="btn btn-warning button-newsletter"
                    >
                      <div className="text-button">Count me in!</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Animated>
        </div>
      </div>
      <ToastContainer
        position={toast.POSITION.BOTTOM_RIGHT}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
