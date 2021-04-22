import img1 from '../../1/shuffle-arrows.png'
import img2 from '../../1/download.png'
import img3 from '../../1/settings.png'
import img4 from '../../1/power.png'
import img5 from '../../1/puzzle-piece.png'
import img6 from '../../1/server.png'


import './section3.css'
export function Section3() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <img src={img1} alt="" height="40px" align="left" />
                    <h5>Continuous Integration and Continuous Delivery</h5>
                    <p>
                        As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project.
</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <img src={img2} alt="" height="40px" align="left" />
                    <h5>Easy configuration</h5>
                    <p>
                        Jenkins is a self-contained Java-based program, ready to run out-of-the-box, with packages for Windows, Linux, macOS and other Unix-like operating systems.
</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <img src={img3} alt="" height="40px" align="left" />
                    <h5>Easy installation</h5>
                    <p>
                        Jenkins can be easily set up and configured via its web interface, which includes on-the-fly error checks and built-in help
</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                <img src={img4} alt="" height="40px" align="left" />
                    <h5>Plugins</h5>
                    <p>
                        Jenkins can be easily set up and configured via its web interface, which includes on-the-fly error checks and built-in help
</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                <img src={img5} alt="" height="40px" align="left" />
                    <h5>Extensible</h5>
                    <p>
                    Jenkins can be extended via its plugin architecture, providing nearly infinite possibilities for what Jenkins can do.
</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                <img src={img6} alt="" height="40px" align="left" />
                    <h5>Distributed</h5>
                    <p>
                    Jenkins can easily distribute work across multiple machines, helping drive builds, tests and deployments across multiple platforms faster.
</p>
                </div>
            </div>
        </div>
    )
}