import './section7.css';
import img1 from '../../1/box.png';
export function Section7() {
    return(
<div>
    <div className="container-fluid section7"> 
<div className="row">
    <div className="col-lg-6 col-md-6 col-sm-12">
        <div className ="section7-ptag">
        <p>Improve this page | Report a problem</p>
        <img src= {img1} alt=""/>
        <p>The content driving this site is licensed under the Creative Commons Attribution-ShareAlike 4.0 license.</p>
        </div>
    </div>
    <div className="col-lg-2 col-md-2 col-sm-12">
        <hr />
        <h4>Resources</h4>
      <a href="#">Downloads</a> <br/> 
      <a href="#">Blog</a><br/>
      <a href="#">Documentation</a><br/>
      <a href="#">Plugins</a><br/>
      <a href="#">Security</a><br/>
      <a href="#">Contributing</a>
    </div>
    <div className="col-lg-2 col-md-2 col-sm-12">
        <hr/>
        <h4>Project</h4>
        <a href="#">Structure and governance</a><br/>
        <a href="#">Issue </a><br/>
        <a href="#">tracker</a><br/>
        <a href="#">Roadmap</a><br/>
        <a href="#">GitHub</a><br/>
        <a href="#">Jenkins on Jenkins</a>
    </div>
    <div className="col-lg-2 col-md-2 col-sm-12">
        <hr/>
        <h4>Community</h4>
        <a href="#">Event</a><br/>
        <a href="#">Mailing lists</a><br/>
        <a href="#">Chats</a><br/>
        <a href="#">Special Interest Groups</a><br/>
        <a href="#">Twitter</a><br/>
        <a href="#">Reddit</a>
    </div>

</div>
    </div>
</div>

    )
}