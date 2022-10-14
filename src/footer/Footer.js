import React  from "react";
import { Link } from "react-router-dom";
import './footer.css';
function Fotter() {
return(
<>

<footer class="footer"data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
  	 <div class="containerfotter">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				{/* <li>About us</li> */}
            <li><p> Vidyalankar Institute of Technology was started in the year 1999 after having secured permission from the AICTE and University of Mumbai. It secured an A grade rating from the Mumbai University in 2005</p></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		{/* <div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div> */}
  	 		<div class="footer-col">
  	 			<h4>Quick Link</h4>
  	 			<ul>
  	 				<li> <Link className="lin" to="/" >Home</Link></li>
  	 				<li><Link className="lin" to="/aboutus" >Abouts us</Link></li>
  	 				<li><Link className="lin" to="/contact" >Contact us</Link></li>
  	 				<li><Link className="lin" to="/class" >Class</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				{/* <a href="#"><i class="fab fa-linkedin"></i></a> */}
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				{/* <a href="#"><i class="fab fa-instagram"></i></a> */}
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
</>
)
};
export default Fotter;