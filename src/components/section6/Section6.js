import './Section6.css';
import img1 from '../../1/aws.png';
import img2 from '../../1/cdf.png';
import img3 from '../../1/cloudbees.png';
import img4 from '../../1/github.png';
import img5 from '../../1/jfrog.png';
import img6 from '../../1/osuosl.png';
import img7 from '../../1/redhat.png';
export function Section6() {
    return(
<div>

<div className="container">
    <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
        <div className = "pTag">
    <p> <b> We thank the following organizations for their major commitments to support the Jenkins project.</b></p>
</div>
        </div>
    </div>
    <div className="row">
        <div className="col-lg-7 col-md-7 col-sm-12"> 
        <img src={img3} alt=""/>
        <img src={img6} alt=""/>
        <img src={img2} alt=""/>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
        <img src={img7} alt=""/>
        <img src={img1} alt=""/>
        </div>
    </div>
    <div className="row">
<div className="col-lg-2 col-md-2 col-sm-0">
</div>
<div className="col-lg-4 col-md-4 col-sm-0">
<img src={img4} alt=""/>
</div>
<div className="col-lg-4 col-md-4 col-sm-0">
<img src={img5} alt=""/>
</div>
<div className="col-lg-2 col-md-2 col-sm-0">
</div>
    </div>
    <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12">
    <div className = "pTag">
    <p> <b> We thank the following organizations for their support of the Jenkins project through free and/or open source licensing programs.</b></p>
</div>
    </div>
    </div>
    <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
            <a href="#" className = "aTag">
            Atlassian 
            </a>
            <a href="#" className = "aTag">
            Datadog 
            </a>
            <a href="#" className = "aTag">
            Mac Cloud 
            </a>
            <a href="#" className = "aTag">
            PagerDuty
            </a>
            <a href="#" className = "aTag">
            Sentry 
            </a>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
        
            <a href="#" className = "aTag">
            XMission
            </a>
            <a href="#" className = "aTag">
            Tsinghua University 
            </a>
            <a href="#" className = "aTag">
            Fastly 
            </a>
            <a href="#" className = "aTag">
            SpinUp 
            </a>
            <a href="#" className = "aTag">
            IBM
            </a>
        </div>
    </div>
</div>

</div>
    )
}