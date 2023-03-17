import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer class = "footer" >
      <section className="faa">
        <div class="wrapper">
          <div class="footer-links-wrapper">
            <div class="footer-links">
             
              <ul className="paa">
                 <h4>Quick Links</h4>
                <li>
                  <a href="/quick-links/faqs">FAQS</a>
                </li>

                <li>
                  <a
                    href="/images/BPR_BANK_TARRIF_GUIDE_2022_-_UPDATED_29-6-2022.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tariff Guide
                  </a>
                </li>

                <li>
                  <a
                    href="/images/bpr_Bank_Product_and_Services_profile_compressed.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    BPR Bank Product Booklet 2022
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="black">
        <div class="col ">
          Regulated by the National Bank of
          Rwanda&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;© 2023 KCB
          Group Limited. All Rights Reserved.
        </div>
        <div class="col middle">
          <ul class="social-media">
            <li>
              {" "}
              <a
                href="https://www.facebook.com/BPRbankrw "
                class="icon icon-facebook"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.instagram.com/bprbankrw/ "
                class="icon icon-instagram-social"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
            <li>
              {" "}
              <a
                href="https://twitter.com/BPRbankrw "
                class="icon icon-twitter-social"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.linkedin.com/in/bpr-bank-rwanda-plc-70078b137/ "
                class="icon icon-linkedin-social"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
          </ul>
        </div>
        <div class="flex justify-between">
         
          <a href="/data-privacy-statement" class="link-wrapper ">
            Data Privacy Statement
          </a>
      
       
          <a href="/cookie-policy" class="link-wrapper ">
            Cookie Policy
          </a>
         
          <a href="#">Social Media Disclaimer</a> |{" "}
          <a href="#">Terms &amp; Condtions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
