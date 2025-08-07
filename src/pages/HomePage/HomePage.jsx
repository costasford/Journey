import { Container, Row, Col, Button, Tabs, Tab } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage(){
    return(
    <>
            <Container fluid id="header">
                <Row>
                    <Col>
                        <div id="header-intro">
                            <h3>Start the journey to happiness and wellness with outcome-based autism care.</h3>
                            <h6>Delivering data collection to help your loved one achieve their goals.</h6>
                            <Button variant="primary" size="lg" as={Link} to='/signup'>Get Started</Button>
                        </div>
                    </Col>

                    <Col>
                        <img src="https://i.imgur.com/JK1D7Lz.jpg" id="kid-drawing" alt="adult guiding kid while she draws" height="600px" width="800px"/>
                    </Col>
                </Row>
            </Container>

            <div id="tab-groups">
                <h1>How it works</h1>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="home" title="Create Account">
                        <h3>Try Journey for free</h3>
                        <p>Transform the way you see and record progress. Get started in minutes.</p> 
                    </Tab>
                    <Tab eventKey="record data" title="Record Data" BsFillBugFill>
                        <h3>Record your data and see your loved ones progress</h3>
                        <p>Explore our many options of recording data.</p> 
                    </Tab>
                    <Tab eventKey="graph data" title="Graph Data">
                        <h3>Check out our automatic graphing features to compare progress</h3>
                        <p>Choose from our many options of graphing features.</p> 
                    </Tab>
                    <Tab eventKey="send data" title="Send Data">
                        <h3>Send data that matters</h3>
                        <p>Send a copy of the data to your therapist and help them reach their goals quicker.</p> 
                    </Tab>
                </Tabs>
            </div>
    </>    
    )
}