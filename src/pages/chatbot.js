/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import "../asset/style_ch.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function chatbot() {
  const [loading, setLoading] = useState(true);
  //set loading state

  // dummy loading
  setTimeout(() => {
    setLoading(false);
  }, 4000);

  return (
    // make loading bootstrap spinner
    <div className="container" id="body_chtbt">
      <Header />
      {/* className="card d-flex flex-column vh-100 overflow-hidden" */}
      <div className="card d-flex flex-column vh-100 overflow-hidden">
        <div className="card-header" class="ctb_hdr">
          <div class="row align-items-center">
            <div class="col-5">
              <div className="p bd-highlight ">
                <Link
                  className="btn btn-warning flex-shrink-0 text-dark"
                  to="/"
                >
                  Back to Home
                </Link>
              </div>
            </div>
            <div class="col text-light">Chatbot FOOD'AHOLIC</div>
          </div>
        </div>
        <div
          className="card-body"
          style={{ overflowY: "scroll" }}
          id="content-chat-feed"
        >
          {!loading ? (
            <div className="containerbot">
              <img
                src="./icons/bot.png"
                alt="Avatar"
                style={{ width: "100%" }}
              />
              <div className="row">
                <div className="col-sm-8 pt-4">Hi, selamat datang </div>
                <div className="col-sm-4 pt-2">
                  <span className="time-right">
                    98.99%
                    <br />
                    11:00 PM
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
        <div className="card-footer">
          <div className="input-group">
            <input type="text" className="form-control" id="input-chat" />
            <button className="btn btn-primary" type="button" id="btn-chat">
              Send
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
