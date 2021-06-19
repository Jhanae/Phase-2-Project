import '../App.css'
import './homeBody.css'
import React from 'react'
import video from "./Pictures/spaceVideo.mp4"

function Home(){
    return(
        <div className="video-container">
            
            <video src={video} autoPlay loop muted />
            
            <div className="video-btns mx-auto">
                <br/>
                <br/>
                <h1 className="font-weight-bolder">Let's Explore</h1>
                <h5 className="font-italic">...the unknown</h5>
                <br/>
                <br/>
                <a className="btn btn-lg btn-light" href="/planets">
                    View All Planets
                </a>
                <vr />
                <a className="btn btn-lg btn-light" href="/newplanet">
                    Register A Planet
                </a>
                {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
            </div>
        </div>
    );
}
export default Home;