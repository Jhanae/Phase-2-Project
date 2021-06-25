import React from "react";
import gif from './Pictures/giphy.gif'
import Footer from './Footer'

function About() {
    return (
        <div id="about">
            
            <h2 className="text-light">About Us</h2>
            <br />
            <p className="text-light">Planetarium site for Phase 2 Project</p>
            <small className="text-light">Built with React JS, Bootstrap and lots of CSS.</small>
            <br />
            
            <img src={gif} alt="I made this" />
            <br />
            
            <div>
            <br />
                
                <h3 className="text-light">Links</h3>
                <br />
                <a href="https://github.com/Jhanae/Phase-2-Project">GitHub Repo</a>
                <br/>
                {/* <a href="https://www.linkedin.com/in/liza/">LinkedIn</a> */}
                <br/>
                <br/>
                <br />
                <li/>
            </div>
            <Footer />
        </div>
    );
}

export default About;
