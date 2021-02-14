import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { NotificationTop } from "../components/NotificationTop";
import { NewsletterPanel } from "../components/NewsletterPanel";

export function Home() {
  const [isVisible, setVisible] = useState(true);

  const handleClick = () => {
    toast.info("Contact Me!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div className="home">
      <div>
        <Header handleClick={handleClick} isVisible={isVisible} />
        <NotificationTop handleClose={handleClose} isVisible={isVisible} />
      </div>
      <div className="content">
        <div className="container-fluid ">
          <div className="title-content">How Can I Help You?</div>
          <div className="text-desc-content">
            Our work then targeted, best practices outcomes social innovation
            synergy.
            <br /> Venture philanthrophy, revolutionary inclusive policymarker
            relief. User-centered <br /> program areas scale.
          </div>
          <div className="row view-card">
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="card border-dark m-2">
                <div className="card-body body-card">
                  <h5 className="card-title">Consult</h5>
                  <div className="view-icon">
                    <i className="fa fa-comments" />
                  </div>
                  <p className="card-text">
                    Co-create, design thinking; strengthen infrastructure resist
                    granular. Revolution circular, movements or framework social
                    impact low-hanging fruit. Save the world compelling
                    revolutionary progress.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="card border-dark m-2">
                <div className="card-body body-card ">
                  <h5 className="card-title">Design</h5>
                  <div className="view-icon">
                    <i className="fa fa-paint-brush" />
                  </div>
                  <p className="card-text">
                    Policymarker collaborates collective impact humanitarian
                    shared value vocabulary inspire issue outcomes agile.
                    Overcome injustice deep drive agile issue outcomes vibrant
                    boots on the ground sustainable.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="card border-dark m-2">
                <div className="card-body body-card ">
                  <h5 className="card-title">Develop</h5>
                  <div className="view-icon">
                    <i className="fa fa-cubes" />
                  </div>
                  <p className="card-text">
                    Revolutionary circular, movements a or impact framework
                    social impact low-hanging. Save the compelling revolutionary
                    inspire progress. Collective impacts and challenges for
                    opportunities of thought provoking.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="card border-dark m-2">
                <div className="card-body body-card ">
                  <h5 className="card-title">Marketing</h5>
                  <div className="view-icon">
                    <i className="fa fa-bullhorn" />
                  </div>
                  <p className="card-text">
                    Peaceful; vibrant paradigm, collaborative cities. Shared
                    vocabulary agile, replicable, effective altruism youth.
                    Mobilize commitment to overcome injustice resilient, uplift
                    social transparent effective.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="card border-dark m-2">
                <div className="card-body body-card ">
                  <h5 className="card-title">Manage</h5>
                  <div className="view-icon">
                    <i className="fa fa-tasks" />
                  </div>
                  <p className="card-text">
                    Change-makers innovation of shared unit of analysis.
                    Overcome injustice outcomes strategize vibrant boots on the
                    ground sustainable. Optimism, effective altruism invest
                    optimism corporate social.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="card border-dark m-2">
                <div className="card-body body-card ">
                  <h5 className="card-title">Evolve</h5>
                  <div className="view-icon">
                    <i className="fa fa-line-chart" />
                  </div>
                  <p className="card-text">
                    Activate catalyze and impact contextualize humanitarian.
                    Unit of analysis overcome injustice storytelling altruism.
                    Thought leadership mass incarceration. Outcomes big data,
                    fairness, social game-changer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
          <NewsletterPanel />
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
