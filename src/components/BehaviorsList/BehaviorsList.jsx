import { Link } from 'react-router-dom';
import { ListGroup, Button, Badge, Row, Col } from 'react-bootstrap';

export default function BehaviorsList({behaviors}){

  return (
    <ListGroup variant="flush">
      {Object.values(behaviors).map(function(behavior, keyIndex) {
        return (
          <ListGroup.Item key={keyIndex} className="p-4 border-0 border-bottom">
            <Row className="align-items-center">
              <Col md={8}>
                <div>
                  <h5 className="fw-bold mb-2">{behavior.behaviorName}</h5>
                  <div className="d-flex align-items-center">
                    <Badge bg="primary" className="me-2">
                      {behavior.measurementType || 'Frequency'}
                    </Badge>
                    <small className="text-muted">
                      Target: {behavior.targetBehavior || 'Increase positive behavior'}
                    </small>
                  </div>
                </div>
              </Col>
              <Col md={4} className="text-end">
                <div className="d-flex gap-2 justify-content-end">
                  <Button 
                    as={Link} 
                    to={`/dashboard/behavior/${behavior._id}/records`}
                    variant="outline-secondary" 
                    size="sm"
                  >
                    📊 Records
                  </Button>
                  <Button 
                    as={Link} 
                    to={`/dashboard/behavior/${behavior._id}`}
                    variant="primary" 
                    size="sm"
                  >
                    📈 View Graph
                  </Button>
                </div>
              </Col>
            </Row>
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}