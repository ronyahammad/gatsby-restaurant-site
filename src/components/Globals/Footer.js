import React from "react";
import Logo from "../../images/footer_logo.png" 
import { Link } from "gatsby"
export default function Footer() {
    
  return (
    <footer className="footer py-3">
      <div className="footer_top">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-md-6 col-lg-3 ">
                        <div className="footer_widget">
                            <div className="footer_logo">
                                <a >
                                    <img src={Logo} alt=""/>
                                </a>
                            </div>
                            <p>5th flora, 700/D kings road, green <br/> lane New York-1782 <br/> 
                                <a >+10 367 826 2567</a> <br/>
                                <a >contact@carpenter.com</a>
                            </p>
                            
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4 offset-xl-1">
                        <div className="footer_widget">
                            <h3 className="footer_title">
                                Useful Links
                            </h3>
                            <ul>
                                <Link to="/about" className="footer_widget">
                            About
                                    </Link>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="footer_widget">
                            <h3 className="footer_title">
                                Subscribe
                            </h3>
                            <form action="#" class="newsletter_form">
                                <input type="text" placeholder="Enter your mail"/>
                                <button type="submit">Subscribe</button>
                            </form>
                            <p className="newsletter_text">Esteem spirit temper too say adieus who direct esteem esteems
                                luckily.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copy-right_text">
            <div className="container">
                <div className="footer_border"></div>
                <div className="row">
                    <div className="col-xl-12">
                        <p className="copy_right text-center">
                            
<h3>
            Copyright © &copy; {new Date().getFullYear().toString()} All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank"> Colorlib</a>
            </h3>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}
