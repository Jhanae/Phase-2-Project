import { Button } from 'bootstrap'
import React from 'react'
import video from "./Pictures/spaceVideo.mp4"

function homeBody(){
    return (
        <div className="video-container">
            <video src="./Pictures/spaceVideo.mp4" autoPlay loop muted />
            <h1>Let's Explore</h1>
            <p>...the unknown</p>
            <div className="videobtns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    View Planets
                </Button>
            </div>
        </div>
    )
}
export default homeBody;