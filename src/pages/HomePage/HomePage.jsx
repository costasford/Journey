import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage(){
    const features = [
        {
            icon: "👤",
            title: "Create Account",
            description: "Get started in minutes with our intuitive sign-up process. Begin tracking progress immediately with our user-friendly platform."
        },
        {
            icon: "📊",
            title: "Record Data",
            description: "Use evidence-based ABA measurement techniques including frequency, duration, latency, and interval recording methods."
        },
        {
            icon: "📈",
            title: "Visualize Progress",
            description: "Automatic graphing features transform your data into clear, professional charts that showcase meaningful progress over time."
        },
        {
            icon: "📤",
            title: "Share Results",
            description: "Export and share detailed reports with therapists, educators, and care teams to ensure coordinated, effective treatment."
        }
    ];

    return(
        <>
            {/* Hero Section */}
            <Container fluid className="hero-section py-5">
                <Container>
                    <Row className="align-items-center min-vh-75">
                        <Col lg={6} className="hero-content">
                            <h1 className="display-4 fw-bold mb-4">
                                Start Your Journey to Better 
                                <span className="text-primary"> ABA Outcomes</span>
                            </h1>
                            <p className="lead mb-4">
                                Professional data collection and progress tracking for Applied Behavior Analysis. 
                                Empower your team with evidence-based insights that drive meaningful results.
                            </p>
                            <div className="hero-buttons">
                                <Button variant="primary" size="lg" as={Link} to='/signup' className="me-3">
                                    Get Started Free
                                </Button>
                                <Button variant="outline-primary" size="lg" as={Link} to='/recordings'>
                                    Learn More
                                </Button>
                            </div>
                        </Col>
                        <Col lg={6} className="text-center">
                            <img 
                                src="https://i.imgur.com/JK1D7Lz.jpg" 
                                alt="Professional ABA therapy session" 
                                className="img-fluid rounded shadow-lg hero-image"
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* How It Works Section */}
            <Container className="py-5">
                <Row>
                    <Col lg={12} className="text-center mb-5">
                        <h2 className="display-5 fw-bold">How Journey Works</h2>
                        <p className="lead text-muted">
                            Four simple steps to transform your ABA data collection and analysis
                        </p>
                    </Col>
                </Row>
                
                <Row>
                    {features.map((feature, index) => (
                        <Col md={6} lg={3} className="mb-4" key={index}>
                            <Card className="h-100 text-center border-0 shadow-sm feature-card">
                                <Card.Body className="p-4">
                                    <div className="feature-icon mb-3">
                                        <span style={{ fontSize: '3rem' }}>{feature.icon}</span>
                                    </div>
                                    <h4 className="fw-bold mb-3">{feature.title}</h4>
                                    <p className="text-muted">{feature.description}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* Benefits Section */}
            <Container fluid className="bg-light py-5">
                <Container>
                    <Row>
                        <Col lg={6} className="mb-4">
                            <h2 className="display-6 fw-bold mb-4">Why Choose Journey?</h2>
                            <div className="benefits-list">
                                <div className="benefit-item mb-3 d-flex align-items-start">
                                    <span className="text-primary me-3" style={{ fontSize: '1.5rem' }}>✓</span>
                                    <div>
                                        <h5 className="fw-bold">Evidence-Based Methods</h5>
                                        <p className="text-muted mb-0">Built on proven ABA measurement techniques and industry best practices.</p>
                                    </div>
                                </div>
                                <div className="benefit-item mb-3 d-flex align-items-start">
                                    <span className="text-primary me-3" style={{ fontSize: '1.5rem' }}>✓</span>
                                    <div>
                                        <h5 className="fw-bold">Real-Time Insights</h5>
                                        <p className="text-muted mb-0">Track progress instantly with automatic data visualization and reporting.</p>
                                    </div>
                                </div>
                                <div className="benefit-item mb-3 d-flex align-items-start">
                                    <span className="text-primary me-3" style={{ fontSize: '1.5rem' }}>✓</span>
                                    <div>
                                        <h5 className="fw-bold">Team Collaboration</h5>
                                        <p className="text-muted mb-0">Share data seamlessly with therapists, educators, and family members.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="text-center">
                            <div className="stats-container p-4">
                                <Row>
                                    <Col sm={6} className="mb-4">
                                        <div className="stat-item">
                                            <h3 className="display-6 fw-bold text-primary">95%</h3>
                                            <p className="text-muted">User Satisfaction</p>
                                        </div>
                                    </Col>
                                    <Col sm={6} className="mb-4">
                                        <div className="stat-item">
                                            <h3 className="display-6 fw-bold text-primary">24/7</h3>
                                            <p className="text-muted">Data Access</p>
                                        </div>
                                    </Col>
                                    <Col sm={6} className="mb-4">
                                        <div className="stat-item">
                                            <h3 className="display-6 fw-bold text-primary">50+</h3>
                                            <p className="text-muted">ABA Centers</p>
                                        </div>
                                    </Col>
                                    <Col sm={6} className="mb-4">
                                        <div className="stat-item">
                                            <h3 className="display-6 fw-bold text-primary">1000+</h3>
                                            <p className="text-muted">Success Stories</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* CTA Section */}
            <Container className="py-5 text-center">
                <Row>
                    <Col lg={8} className="mx-auto">
                        <h2 className="display-5 fw-bold mb-4">Ready to Transform Your ABA Practice?</h2>
                        <p className="lead mb-4">
                            Join thousands of professionals who trust Journey for their data collection and analysis needs.
                        </p>
                        <Button variant="primary" size="lg" as={Link} to='/signup' className="me-3">
                            Start Free Trial
                        </Button>
                        <Button variant="outline-primary" size="lg" as={Link} to='/contactus'>
                            Contact Sales
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>    
    )
}