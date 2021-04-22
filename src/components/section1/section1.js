import img1 from "../../1/icon2.svg";
import { Navbar } from '../Navbar/navbar';
import './section1.css';
export function Section1() {
    return (
        <div className="container-fluid" >
            <div className="row">
                <div className="col-12">
                    <Navbar />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-0">
                </div>
                <div className="col-sm-12 col-lg-5 col-md-5" >
                    <div>
                        <img src={img1} alt="" />
                    </div>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-4">
                    <div id = "secondHalf">
                        <h1>Jenkins</h1>
                        <p><b>Build great things at any scale</b></p>
                        <p>The leading open source automation server, Jenkins provides hundreds of plugins to support building, deploying and automating any project.</p>
                        <button type="button" class="btn  sec-btn-documentation ">Documentation</button>
                            <button type="button" class="btn  sec-btn-download">Download</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
