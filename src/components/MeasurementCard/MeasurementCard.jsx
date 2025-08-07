

import { Card, Container, Row, Col } from 'react-bootstrap';

export default function MeasurementCard (){

    const measurements = [
        {
            measurementName: "Frequency", 
            description: "The event and rate recording method that counts the number of times a behavior happens within a specific time frame.",
            icon: "📊",
            example: "Counting how many times a child raises their hand in 30 minutes"
        },

        {
            measurementName: "Duration", 
            description: "The time length of how long a behavior lasts.",
            icon: "⏱️",
            example: "Recording that a tantrum lasted for 5 minutes and 30 seconds"
        },
        
        {
            measurementName: "Latency Recording",
            description: "Measuring the time that it takes for a behavior to occur after a verbal cue or an event.",
            icon: "⚡",
            example: "Time between saying 'sit down' and the child actually sitting"
        }, 

        {
            measurementName: "Interval Recording",
            description: "Measuring when a behavior occurs or doesn't occur during specified time frames.",
            icon: "📅",
            example: "Checking every 30 seconds if the behavior is happening"
        }
    ]

    return (
        <Container className="mt-4">
            <h1 className="text-center mb-4">ABA Recording Methods</h1>
            <p className="text-center text-muted mb-5">
                Learn about different measurement techniques used in Applied Behavior Analysis
            </p>
            
            <Row>
                {measurements.map((measurement, index) => (
                    <Col md={6} className="mb-4" key={index}>
                        <Card className="h-100 shadow-sm">
                            <Card.Header className="bg-primary text-white d-flex align-items-center">
                                <span className="me-2" style={{fontSize: '1.5rem'}}>{measurement.icon}</span>
                                <h5 className="mb-0">{measurement.measurementName}</h5>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text className="mb-3">
                                    {measurement.description}
                                </Card.Text>
                                <div className="bg-light p-3 rounded">
                                    <strong>Example:</strong>
                                    <br />
                                    <em>{measurement.example}</em>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}