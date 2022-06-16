import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Gregory</div>
            <div className="brief_description">
                <h2>Hi there!</h2>
                <p>
                    I'm a rising junior at Columbia University studying
                    Computer Science and Mathematics. My favorite class so
                    far is CS Theory with Mihalis Yannakakis.
                </p>
                <p>
                    The photo to the left is badly out of date--I have
                    significantly more hair on my head now!
                    That's what happens when you don't get a haircut for 2
                    years during quarantine &#129335;
                </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
