import { Row, Col,Card } from 'antd';
import './App.css'
function App() {
  return (
    <Row style={{padding:'50px',backgroundColor:'rgb(244, 245, 247)'}}>
      <Col sm={24} xs={24}>
        <Card headless>
         <div>
              <h1 style={{fontSize:'x-large'}}>Privacy Policy for WooCampus - School Management System</h1>
              </div>
                <div>
              <h1 style={{fontWeight:'unset',fontSize:'larger'}}><i>Effective Date: 22nd August 2023</i></h1>
              </div>
                <div>
              <h1 className='headingstyle' >1. Introduction</h1>
              <p style={{color:'#868eae'}}>Welcome to WooCampus, a comprehensive school management system designed to facilitate effective communication, management, and collaboration within educational institutions. This Privacy Policy explains how we collect, use, share, and protect your information as you interact with our Website and Application. By using WooCampus, you acknowledge and consent to the practices described herein.</p>
              </div>
                <div>
              <h1 className='headingstyle'>2.  Information We Collect</h1>
              <p style={{color:'#868eae'}}>We collect various types of information to provide you with a seamless user experience and improve our services. This information includes:</p>
              <p style={{color:'#868eae'}}><span style={{fontWeight:'bold'}}>Personal Information: </span>When you register, interact, or use WooCampus, we may collect personal information such as your name, contact details, email address, phone number, and other identifiers. This information is essential for user identification, communication, and personalized services.</p>
              <p style={{color:'#868eae'}}><span style={{fontWeight:'bold'}}>Usage Information: </span>We gather information about how you use WooCampus, including your interactions, preferences, and activities. This helps us understand your needs and improve our offerings.</p>
              <p style={{color:'#868eae'}}><span style={{fontWeight:'bold'}}>Transaction Information: </span>If you make transactions through WooCampus, such as payments for services, we collect payment-related details to facilitate those transactions securely.</p>
              <p style={{color:'#868eae'}}><span style={{fontWeight:'bold'}}>Device Information: </span>We may collect device-related information, including your IP address, browser type, operating system, and other technical details. This helps us enhance compatibility and security.</p>
              <p style={{color:'#868eae'}}><span style={{fontWeight:'bold'}}>Cookies and Similar Technologies:</span> We use cookies and similar technologies to gather information about your browsing habits and enhance your experience. Cookies do not contain personal information unless provided by you.</p>
              </div>
                <div>
              <h1 className='headingstyle'>3. How We Use Your Information</h1>
              <p style={{color:'#868eae'}}>We use the collected information for various purposes, including but not limited to:</p>
              <p style={{paddingLeft:'50px'}}>
                <ul style={{listStyle:'disc',color:'#868eae'}} >
                <li>Providing and enhancing WooCampus services</li>
                <li>Personalizing your experience and tailoring content</li>
                <li>Responding to your inquiries and requests</li>
                <li>Facilitating transactions and payments</li>
                <li>Sending important notifications and updates</li>
                <li>Conducting research and analysis for service improvement</li>
                <li>Complying with legal obligations and regulatory requirements</li>
                <li>Protecting our rights, privacy, safety, and property</li>
                </ul>
              </p>
              </div>
                <div>
              <h1 className='headingstyle'>4. Information Sharing and Disclosure</h1>
              <p style={{color:'#868eae'}}>We do not sell your personal information to third parties. However, we may share your information in the following circumstances:</p> 
             <Row gutter="25">
              <Col md={6}> 
                    <div>
                        <span style={{fontWeight:'bold'}}>Service Providers: </span>
                        <p style={{color:'#868eae'}}>We may share information with third-party service providers who assist us in offering and maintaining WooCampus. These providers are subject to confidentiality agreements.</p>
                    </div>
                </Col>
              <Col md={6}>
                    <div><span style={{fontWeight:'bold'}}>Legal Compliance: </span><p style={{color:'#868eae'}}>We may disclose information to comply with legal obligations, court orders, governmental inquiries, or enforceable requests.</p>
                        </div>
                </Col>
              <Col md={6}>
                    <div><span style={{fontWeight:'bold'}}>Business Transactions: </span><p style={{color:'#868eae'}}>In the event of a merger, acquisition, or transfer of assets, your information may be transferred or shared with the involved parties.</p>
                        </div>
                </Col>
              <Col md={6}>
                    <div><span style={{fontWeight:'bold'}}>Consent: </span><p style={{color:'#868eae'}}>We may share your information with third parties if you provide explicit consent.</p>
                        </div> 
                </Col>
                </Row>
              </div>
                <div>
              <h1 className='headingstyle'>5. Your Choices and Rights</h1>
              <p style={{color:'#868eae'}}>You have certain rights regarding your personal information:</p> 
             <Row gutter="25">
              <Col md={6}> 
                    <div>
                        <span style={{fontWeight:'bold'}}>Access and Correction: </span>
                        <p style={{color:'#868eae'}}>You can access and update your personal information in your WooCampus account settings.</p>
                    </div>
                </Col>
              <Col md={6}>
                    <div><span style={{fontWeight:'bold'}}>Data Portability: </span><p style={{color:'#868eae'}}>You can request a copy of your data in a structured format.</p>
                        </div>
                </Col>
              <Col md={6}>
                    <div><span style={{fontWeight:'bold'}}>Opt-Out: </span><p style={{color:'#868eae'}}>You can opt out of receiving marketing communications by following the instructions in our communications or contacting us.</p>
                        </div>
                </Col>
              <Col md={6}>
                    <div><span style={{fontWeight:'bold'}}>Deletion: </span><p style={{color:'#868eae'}}>You can request the deletion of your account and personal information.</p>
                        </div> 
                </Col>
                </Row>
              </div>
                <div>
              <h1 className='headingstyle'>6. Security Measures</h1>
              <p style={{color:'#868eae'}}>We employ industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, and destruction. However, no data transmission over the Internet is entirely secure.</p>
              </div>
                <div>
              <h1 className='headingstyle'>7. Children's Privacy</h1>
              <p style={{color:'#868eae'}}>WooCampus is not intended for children under the age of [minimum age]. We do not knowingly collect personal information from children under [minimum age]. If you believe a child has provided us with personal information, please contact us to have the information removed.</p>
              </div>
                <div>
              <h1 className='headingstyle'>8. Changes to this Policy</h1>
              <p style={{color:'#868eae'}}>We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify you of any material changes and obtain your consent if required.</p>
              </div>
                <div>
              <h1 className='headingstyle'>9. Contact Us</h1>
              <p style={{color:'#868eae'}}>If you have questions, concerns, or requests regarding this Privacy Policy, please contact us at [contact email]. Our dedicated Grievance Officer can also address any issues you may have.</p>
              </div>
    </Card>
    </Col>
    </Row>
  );
}

export default App;
