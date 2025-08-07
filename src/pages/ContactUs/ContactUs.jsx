import './ContactUs.css';
import { BsFillTelephoneFill, BsEnvelopeFill } from 'react-icons/bs';
import { useForm } from '@formspree/react';
import { useState } from 'react';
import ReactJsAlert from "reactjs-alert";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { isDemoMode } from '../../utils/apiWrapper';

export default function ContactUs(){

    const [state, handleSubmit] = useForm("xvolnjwr");
    const [status, setStatus] = useState(false);
    const [type, setType] = useState("success");
    const [title, setTitle] = useState("");
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setForm({
            ...form,
            [name]: value
        })
    }

    function alertUser(e){
        if (isDemoMode()) {
            e.preventDefault();
            setStatus(true);
            setType("info");
            setTitle("Demo Mode: Form submission simulated successfully!");
            setForm({ name: "", email: "", message: "" });
        } else {
            setStatus(true);
            setType("success");
            setTitle("Your email has been sent!");
        }
    }

    return (
        <>
            <ReactJsAlert
                status={status}
                type={type}
                title={title}
                Close={() => setStatus(false)}
            />
            
            <Container className="py-5">
                {isDemoMode() && (
                    <div style={{
                        backgroundColor: '#e3f2fd',
                        border: '1px solid #2196f3',
                        borderRadius: '4px',
                        padding: '12px',
                        margin: '20px auto',
                        maxWidth: '600px',
                        fontSize: '14px',
                        textAlign: 'center'
                    }}>
                        <strong>📧 Demo Mode:</strong> Contact form submissions are simulated for demo purposes
                    </div>
                )}
                
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <h1 className="text-center mb-5">Contact Us</h1>
                        
                        <Row>
                            <Col md={6} className="mb-4">
                                <Card className="h-100 shadow-sm">
                                    <Card.Body className="text-center">
                                        <h3 className="mb-4">Get In Touch</h3>
                                        <p className="mb-4">
                                            Feel free to reach out to the Journey Support Team. We're always open to 
                                            discussing ABA therapy insights, technical support, or collaboration opportunities.
                                        </p>
                                        
                                        <div className="mb-3">
                                            <BsFillTelephoneFill className="text-primary me-2" />
                                            <span>+1 (555) 123-4567</span>
                                        </div>
                                        
                                        <div className="mb-3">
                                            <BsEnvelopeFill className="text-primary me-2" />
                                            <span>support@journey-aba.com</span>
                                        </div>
                                        
                                        <div className="mt-4 p-3 bg-light rounded">
                                            <small className="text-muted">
                                                <strong>Office Hours:</strong><br />
                                                Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                                                Response time: Within 24 hours
                                            </small>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            
                            <Col md={6}>
                                <Card className="shadow-sm">
                                    <Card.Body>
                                        <h3 className="mb-4">Send us a Message</h3>
                                        
                                        <form onSubmit={isDemoMode() ? alertUser : handleSubmit}>
                                            <div className="mb-3">
                                                <label className="form-label">Full Name *</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="name" 
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    placeholder="Enter your full name" 
                                                    required 
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Email Address *</label>
                                                <input 
                                                    type="email" 
                                                    className="form-control" 
                                                    name="email" 
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    placeholder="Enter your email address" 
                                                    required 
                                                />
                                            </div>
                                            
                                            <div className="mb-4">
                                                <label className="form-label">Message *</label>
                                                <textarea 
                                                    className="form-control" 
                                                    rows="5" 
                                                    name="message" 
                                                    value={form.message}
                                                    onChange={handleChange}
                                                    placeholder="Tell us how we can help you..."
                                                    required>
                                                </textarea>
                                            </div>
                                            
                                            <button 
                                                type="submit" 
                                                className="btn btn-primary w-100"
                                                disabled={state.submitting}
                                                onClick={alertUser}>
                                                {state.submitting ? 'Sending...' : 'Send Message'}
                                            </button>
                                        </form>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}