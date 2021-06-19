import '../App.css'
import './homeBody.css'
import React from 'react'
import video from "./Pictures/spaceVideo.mp4"
import { Button } from './button';

function Home(){
    return(
        <div className="video-container">
            
            <video src={video} autoPlay loop muted />
            
            <div className="video-btns">
            <h1>Let's Explore</h1>
            <p>...the unknown</p>
                <Button destination='/sign-up' className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    View All Planets
                </Button>
                <Button destination="/newplanet" className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    Register A Planet
                </Button>
            </div>
        </div>
    );
}
export default Home;