import React from 'react'
import './Footer.css'

function Footer(){
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* column 1 */}
                    <div className="col">
                        <h4>FlatIron Planetarium</h4>
                        <ul className="list-unstyled">
                            <li>123-456-7890</li>
                            <li>Washington DC</li>
                            <li>666 Fake Street</li>
                        </ul>
                    </div>
                    {/* column 2 */}
                    <div className="col">
                        <h4>Jhanae Chisholm</h4>
                        <ul className="list-unstyled">
                            <li>jhanaechisholm12@gmail.com</li>
                            <li>Harrisburg PA</li>
                        </ul>
                    </div>
                    {/* column 3 */}
                    <div className="col">
                        <h4>Kaia Bergmann-Dean</h4>
                        <ul className="list-unstyled">
                            <li>kbergmanndean@gmail.com</li>
                            <li>Riverdale MD</li>
                        </ul>
                    </div>
                </div>
                {/* <hr/> */}
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} FLATIRON PLANETARIUM INC | All rights reserved | Terms of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer