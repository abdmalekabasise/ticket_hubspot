import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const TermsConent = () => {
  return (
    <Tabs>
      <div className="row y-gap-30">
        <div className="col-lg-3">
          <div className="px-30 py-30 rounded-4 border-light">
            <TabList className="tabs__controls row y-gap-10 js-tabs-controls">
              <Tab className="col-12 tabs__button js-tabs-button">
              Terms & Conditions
              </Tab>
              <Tab className="col-12 tabs__button js-tabs-button">
              Privacy Policy
              </Tab>
              
            </TabList>
          </div>
        </div>
        {/* End .col-lg-3 */}

        <div className="col-lg-9">
        <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1 className="text-30 fw-600 mb-15">Terms & Conditions</h1>
              
              <p className="text-15 text-dark-1 mt-5">
              Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the Ticket Hubspot website (the "Service") operated by Ticket Hubspot ("us", "we", or "our").
                <br />
                <br />
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
                <br />
                <br />
                Intellectual Property
                <br />
                <br />
                The Service and its original content, features, and functionality are and will remain the exclusive property of Ticket Hubspot and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States of America and foreign countries.
                <br />
                <br />
                Our Service may contain links to third-party websites or services that are not owned or controlled by Ticket Hubspot. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
                Termination
                <br />
                <br />
                We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                <br />
                <br />
                Limitation of Liability
                <br />
                <br />
                In no event shall Ticket Hubspot, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
                Governing Law
                <br />
                <br />
                These Terms shall be governed and construed in accordance with the laws of the United States of America, without regard to its conflict of law provisions.
                <br />
                <br />
                Changes
                <br />
                <br />
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                <br />
                <br />
                Contact Us
                <br />
                <br />
                If you have any questions about these Terms, please contact us at contact@tickethubspot.com.
              </p>


              <h2 className="text-16 fw-500 mt-35">
                We may collect personal information that you provide to us when you:
              </h2>
              <ul className="list-disc text-15 mt-30">
    
                <li>Register for an account</li>
                <li>Purchase tickets or services</li>
                <li>Subscribe to our newsletter or updates</li>
                <li>Participate in surveys or promotions</li>
                <li>Contact us for support or other inquiries</li>
              </ul>
              <h2 className="text-16 fw-500 mt-35">
              The types of personal information we may collect include but are not limited to:

              </h2>

              <ul className="list-disc text-15 mt-30">
    
                <li>Name</li>
                <li>Email address</li>
                <li>Mailing address</li>
                <li>Phone number</li>
                <li>Payment information</li>
              </ul>
              <p className="text-15 text-dark-1 mt-5">
              We may also collect non-personal information such as your IP address, browser type, device type, and usage data through cookies and similar technologies.
                <br />
                <br />
                How We Use Your Information

              </p>
              <h2 className="text-16 fw-500 mt-35">
              We may use the information we collect for various purposes including:

              </h2>
              <ul className="list-disc text-15 mt-30">
    
                <li>Providing and personalizing our services</li>
                <li>Processing transactions</li>
                <li>Sending you updates, newsletters, and marketing communications</li>
                <li>Conducting research and analysis to improve our services</li>
                <li>Responding to your inquiries and providing customer support</li>
                <li>Complying with legal obligations</li>
              </ul>

              
                <br />
              <p className="text-15 text-dark-1 mt-5">
              Disclosure of Your Information
              </p>

              <h2 className="text-16 fw-500 mt-35">
              We may share your information with third parties for the following purposes:

              </h2>

              <ul className="list-disc text-15 mt-30">
    
                <li>Service providers: We may share your information with third-party service providers who assist us in operating our website and providing our services.</li>
                <li>Business partners: We may share your information with trusted business partners who offer products or services that may be of interest to you.</li>
                <li>Legal purposes: We may disclose your information to comply with applicable laws, regulations, or legal processes.</li>
                
              </ul>

              <p className="text-15 text-dark-1 mt-5">
              We do not sell, rent, or trade your personal information to third parties for their marketing purposes without your consent.
              <br />
              <br />
              We implement appropriate technical and organizational measures to protect your information from unauthorized access, disclosure, alteration, or destruction.
              <br />
              <br />
              Your Choices
              <br />
              <br />
              You may choose not to provide certain personal information, but this may limit your ability to use certain features of Ticket Hubspot.
              <br />
              You may opt-out of receiving marketing communications from us by following the instructions provided in such communications or by contacting us directly.
              <br />
              Changes to This Privacy Policy
              <br />
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              <br />
              <br />
              Contact Us
              <br />
              <br />
              If you have any questions or concerns about this Privacy Policy, please contact us at contact@tickethubspot.com.
              </p>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1 className="text-30 fw-600 mb-15">Privacy Policy</h1>
              
              <p className="text-15 text-dark-1 mt-5">
              Thank you for visiting Ticket Hubspot. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our website and any associated services
                <br />
                <br />
                By accessing or using Ticket Hubspot, you agree to the terms of this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use Ticket Hubspot.
                versions of Lorem Ipsum.
                <br />
                <br />
                Information We Collect

              </p>


              <h2 className="text-16 fw-500 mt-35">
                We may collect personal information that you provide to us when you:
              </h2>
              <ul className="list-disc text-15 mt-30">
    
                <li>Register for an account</li>
                <li>Purchase tickets or services</li>
                <li>Subscribe to our newsletter or updates</li>
                <li>Participate in surveys or promotions</li>
                <li>Contact us for support or other inquiries</li>
              </ul>
              <h2 className="text-16 fw-500 mt-35">
              The types of personal information we may collect include but are not limited to:

              </h2>

              <ul className="list-disc text-15 mt-30">
    
                <li>Name</li>
                <li>Email address</li>
                <li>Mailing address</li>
                <li>Phone number</li>
                <li>Payment information</li>
              </ul>
              <p className="text-15 text-dark-1 mt-5">
              We may also collect non-personal information such as your IP address, browser type, device type, and usage data through cookies and similar technologies.
                <br />
                <br />
                How We Use Your Information

              </p>
              <h2 className="text-16 fw-500 mt-35">
              We may use the information we collect for various purposes including:

              </h2>
              <ul className="list-disc text-15 mt-30">
    
                <li>Providing and personalizing our services</li>
                <li>Processing transactions</li>
                <li>Sending you updates, newsletters, and marketing communications</li>
                <li>Conducting research and analysis to improve our services</li>
                <li>Responding to your inquiries and providing customer support</li>
                <li>Complying with legal obligations</li>
              </ul>

              
                <br />
              <p className="text-15 text-dark-1 mt-5">
              Disclosure of Your Information
              </p>

              <h2 className="text-16 fw-500 mt-35">
              We may share your information with third parties for the following purposes:

              </h2>

              <ul className="list-disc text-15 mt-30">
    
                <li>Service providers: We may share your information with third-party service providers who assist us in operating our website and providing our services.</li>
                <li>Business partners: We may share your information with trusted business partners who offer products or services that may be of interest to you.</li>
                <li>Legal purposes: We may disclose your information to comply with applicable laws, regulations, or legal processes.</li>
                
              </ul>

              <p className="text-15 text-dark-1 mt-5">
              We do not sell, rent, or trade your personal information to third parties for their marketing purposes without your consent.
              <br />
              <br />
              We implement appropriate technical and organizational measures to protect your information from unauthorized access, disclosure, alteration, or destruction.
              <br />
              <br />
              Your Choices
              <br />
              <br />
              You may choose not to provide certain personal information, but this may limit your ability to use certain features of Ticket Hubspot.
              <br />
              You may opt-out of receiving marketing communications from us by following the instructions provided in such communications or by contacting us directly.
              <br />
              Changes to This Privacy Policy
              <br />
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              <br />
              <br />
              Contact Us
              <br />
              <br />
              If you have any questions or concerns about this Privacy Policy, please contact us at contact@tickethubspot.com.
              </p>
            </div>
          </TabPanel>
          {/* End  General Terms of Use */}

     
          {/* End  Privacy policy */}

      
          {/* End  Cookie Policy */}

       
          {/* End  Best Price Guarantee */}
        </div>
        {/* End col-lg-9 */}
      </div>
    </Tabs>
  );
};

export default TermsConent;
