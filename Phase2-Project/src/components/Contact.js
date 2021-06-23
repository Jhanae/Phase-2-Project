import React from 'react'
import sun from "./Pictures/sun.png"

function Contact(){
    return (
        <div className="contact-page">
            <br />
            <br />
            <h3 className="text-light">Contact us</h3>
            <img src={sun} alt="the sun"/>
            <br />
            <br/>
            <br/>
            <br/>
            <h6 className="text-light">On Slack</h6>
            <div className="container">

                <div className="row">
                    {/* column 2 */}
                    <div className="col text-light">
                        <h4>Jhanae Chisholm</h4>
                        <ul className="list-unstyled">
                            <li>jhanaechisholm12@gmail.com</li>
                            <li>Harrisburg PA</li>
                        </ul>
                    </div>
                    {/* column 3 */}
                    <div className="col text-light">
                        <h4>Kaia Bergmann-Dean</h4>
                        <ul className="list-unstyled">
                            <li>kbergmanndean@gmail.com</li>
                            <li>Riverdale MD</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Contact;