import './AboutUs.css'; 
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function AboutUs(){
    const teamMembers = [
        {
            name: "Max Antezana",
            role: "Lead Developer & ABA Specialist",
            image: "https://i.imgur.com/LNosXMw.png",
            link: "https://mantezana1998.github.io/new-portfolio/"
        },
        {
            name: "DiAnne Lozano",
            role: "Frontend Developer",
            image: "https://i.imgur.com/9aYehlv.png",
            link: "https://github.com/ditabu"
        },
        {
            name: "Steven Ballerini",
            role: "Backend Developer",
            image: "https://i.imgur.com/vTb8yMT.png",
            link: "https://github.com/StevenB94"
        },
        {
            name: "Costas Ford",
            role: "Full Stack Developer",
            image: "https://i.imgur.com/5SlMwqv.jpg",
            link: "https://github.com/costasford"
        }
    ];

    return (
        <>
            {/* Mission Section */}
            <Container fluid className="mission-section py-5 bg-light">
                <Container>
                    <Row>
                        <Col lg={8} className="mx-auto text-center">
                            <h1 className="display-4 fw-bold mb-4">
                                A little progress each day adds up to big results
                            </h1>
                            <h3 className="text-primary fw-bold mb-4">Built by RBTs for RBTs</h3>
                            <p className="lead">
                                From recording data to sharing insights with your therapeutic team, Journey helps you 
                                track behavioral progress beyond therapy sessions. We're dedicated to empowering clients 
                                and streamlining ABA practices so professionals can focus on what matters most - 
                                creating meaningful change in people's lives.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* Team Section */}
            <Container className="py-5">
                <Row>
                    <Col className="text-center mb-5">
                        <h2 className="display-5 fw-bold">Meet Our Team</h2>
                        <p className="lead text-muted">
                            Passionate developers and ABA professionals working together
                        </p>
                    </Col>
                </Row>
                
                <Row>
                    {teamMembers.map((member, index) => (
                        <Col lg={3} md={6} className="mb-4" key={index}>
                            <Card className="h-100 text-center shadow-sm border-0">
                                <Card.Img 
                                    variant="top" 
                                    src={member.image}
                                    style={{ 
                                        height: '300px', 
                                        objectFit: 'cover',
                                        objectPosition: 'center top'
                                    }}
                                    alt={`${member.name} profile`}
                                />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="fw-bold">{member.name}</Card.Title>
                                    <Card.Text className="text-muted mb-4">{member.role}</Card.Text>
                                    <div className="mt-auto">
                                        <Button 
                                            variant="primary" 
                                            size="sm"
                                            onClick={() => window.open(member.link, "_blank")}
                                        >
                                            View Profile
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* Values Section */}
            <Container fluid className="bg-primary text-white py-5">
                <Container>
                    <Row>
                        <Col lg={8} className="mx-auto text-center">
                            <h2 className="display-6 fw-bold mb-4">Our Values</h2>
                            <Row>
                                <Col md={4} className="mb-4">
                                    <div className="mb-3" style={{ fontSize: '3rem' }}>🎯</div>
                                    <h5 className="fw-bold">Evidence-Based</h5>
                                    <p>Every feature is grounded in proven ABA methodologies and research.</p>
                                </Col>
                                <Col md={4} className="mb-4">
                                    <div className="mb-3" style={{ fontSize: '3rem' }}>🤝</div>
                                    <h5 className="fw-bold">Collaborative</h5>
                                    <p>Built with input from RBTs, BCBAs, and families in the ABA community.</p>
                                </Col>
                                <Col md={4} className="mb-4">
                                    <div className="mb-3" style={{ fontSize: '3rem' }}>💡</div>
                                    <h5 className="fw-bold">Innovative</h5>
                                    <p>Leveraging technology to make data collection more efficient and insightful.</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}