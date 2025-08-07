import './Dashboard.css';
import BehaviorsList from '../../components/BehaviorsList/BehaviorsList';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { isDemoMode } from '../../utils/apiWrapper';

export default function Dashboard({behaviors}){
    const behaviorCount = Object.keys(behaviors).length;

    return (
        <Container className="py-4">
            {isDemoMode() && (
                <div style={{
                    backgroundColor: '#e3f2fd',
                    border: '1px solid #2196f3',
                    borderRadius: '4px',
                    padding: '12px',
                    margin: '20px auto',
                    maxWidth: '800px',
                    fontSize: '14px',
                    textAlign: 'center'
                }}>
                    <strong>📊 Demo Dashboard:</strong> Viewing sample behavior data for demonstration purposes
                </div>
            )}
            
            <Row className="mb-4">
                <Col>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h1 className="display-6 fw-bold">Dashboard</h1>
                            <p className="lead text-muted">
                                Manage and track your ABA behavior data
                            </p>
                        </div>
                        <Button 
                            as={Link} 
                            to="/dashboard/behaviorform" 
                            variant="primary" 
                            size="lg"
                            className="ms-3"
                        >
                            + Add Behavior
                        </Button>
                    </div>
                </Col>
            </Row>

            {/* Quick Stats */}
            <Row className="mb-4">
                <Col md={4}>
                    <Card className="text-center border-0 shadow-sm">
                        <Card.Body>
                            <h3 className="display-6 fw-bold text-primary">{behaviorCount}</h3>
                            <p className="text-muted mb-0">Active Behaviors</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="text-center border-0 shadow-sm">
                        <Card.Body>
                            <h3 className="display-6 fw-bold text-success">85%</h3>
                            <p className="text-muted mb-0">Data Completion</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="text-center border-0 shadow-sm">
                        <Card.Body>
                            <h3 className="display-6 fw-bold text-info">12</h3>
                            <p className="text-muted mb-0">This Week</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Behaviors List */}
            <Row>
                <Col>
                    <Card className="shadow-sm">
                        <Card.Header className="bg-white border-bottom">
                            <h4 className="fw-bold mb-0">Your Behaviors</h4>
                        </Card.Header>
                        <Card.Body className="p-0">
                            {behaviorCount > 0 ? (
                                <BehaviorsList behaviors={behaviors} />
                            ) : (
                                <div className="text-center py-5">
                                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
                                    <h5>No behaviors yet</h5>
                                    <p className="text-muted mb-4">
                                        Get started by creating your first behavior to track.
                                    </p>
                                    <Button 
                                        as={Link} 
                                        to="/dashboard/behaviorform" 
                                        variant="primary"
                                    >
                                        Create First Behavior
                                    </Button>
                                </div>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}