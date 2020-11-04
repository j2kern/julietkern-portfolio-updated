import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Pages.css';

// Webpage currently Under Construction 
// GOAL - Case study & breakdown of the Memory Maps Project

function MemorymapsPage(props){
    return(
        <>
        <div className="header-background">
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg="8" md="8" >
                        <img class="mx-auto d-block home-image " src="memorymaps-header.png" alt=""/>
                    </Col>
                </Row>
            </Container>
        </div>
        <Container>
                <Row className="justify-content-md-center">
                    <Col lg="9">
                        <p class="case-subheading">Keeping Your Family Safe with Memorymaps</p>
                    </Col>
                </Row>
        </Container>
        <Container >
                <Row className="justify-content-md-center">
                    <Col lg="9">
                        <p class="portfolio-paragraph"></p>
                        <p class="portfolio-paragraph">An application that focuses on preventing people with neurological disorders such as Alzheimer’s or other dementia from unsafe conditions. Collaborated with team members (Amna Mughal, Chris Santos, Helena Lee) under high-pressure and short time constraint to complete the project efficiently. The implementation used HTML5, CSS3 and Google Maps API. </p>
                    </Col>
                </Row>
        </Container>
        <Container>
                <Row className="justify-content-md-center">
                    <Col lg="9">
                        <p class="case-subheading">Problem Space</p>
                    </Col>
                </Row>
        </Container>
        <Container >
                <Row className="justify-content-md-center">
                    <Col lg="9">
                        <p class="portfolio-paragraph"></p>
                        <p class="portfolio-paragraph">Dementia, Alzheimers and other neurological disorders can cause disorientation, which leads to wandering into potentially unsafe situations. We wanted to explore a solution that curbs wandering for high-risk patients and allows for a safe return in the unforunate case it does. </p>
                        <p class="portfolio-paragraph">
                            <p class="portfolio-sentence"> According to </p>
                            <p class="portfolio-sentence">
                                <a class="portfolio-link" href="https://www.alz.org/help-support/caregiving/caregiver-health/caregiver-stress">alz.org</a>
                            </p>
                            <p class="portfolio-sentence">, caregiver stress can be very common to patients with Alzheimers or other dementia. Taking this into consideration, we also wanted to provide a solution that alleviates some of the possible stresses that go along with taking care of a patient. </p>
                        </p>
                    </Col>
                </Row>
        </Container>
        <Container>
                <Row className="justify-content-md-center">
                    <Col lg="9">
                        <p class="case-subheading">Goal</p>
                    </Col>
                </Row>
        </Container>
        <Container >
                <Row className="justify-content-md-center">
                    <Col lg="9">
                        <p class="portfolio-paragraph"></p>
                        <p class="portfolio-paragraph">Though it currently only exists as a prototype, Memory Maps is an application serving to keep patients that live with Alzheimers or other dementia safe. As a team, we aim to develop this application to form an accessible, reliable connection between caregivers and their patient or family members with a relative. We also envision Memory Maps providing a way for caregivers to take mental health breaks to focus more on themselves as the app keeps notice of the patient.</p>
                    </Col>
                </Row>
        </Container>
        <Container>
                <Row className="justify-content-md-center">
                    <Col lg="9">
                        <p class="case-subheading">Needs Assessment</p>
                    </Col>
                </Row>
        </Container>
        <Container >
                <Row className="justify-content-md-center">
                    <Col lg="9">
                        <p class="portfolio-paragraph"></p>
                        <p class="portfolio-paragraph">Amna Mughal, Chris Santos, Helena Lee, Juliet Kern </p>
                    </Col>
                </Row>
        </Container>
        <Container>
                <Row className="justify-content-md-center">
                    <Col lg="9">
                        <p class="case-subheading">Wireframing</p>
                    </Col>
                </Row>
        </Container>
        <Container >
                <Row className="justify-content-md-center">
                    <Col lg="9">
                        <p class="portfolio-paragraph"></p>
                        <p class="portfolio-paragraph">Amna Mughal, Chris Santos, Helena Lee, Juliet Kern </p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                </Row >
                <Row className="justify-content-md-center">
                    <Col lg="4" >
                        <img class="mx-auto d-block case-image " src={"wireframe.png"}/>
                    </Col>
                </Row >
                <Row className="justify-content-md-center">
                    <Col lg="3" md="4" sm="4" >
                        <img class="mx-auto d-block case-image " src={"wireframe1.png"}/>
                    </Col>
                    <Col lg="3" md="4" sm="4" >
                        <img class="mx-auto d-block case-image " src={"wireframe2.jpeg"}/>
                    </Col>
                    <Col lg="3" md="4"sm="4" >
                        <img class="mx-auto d-block case-image " src={"wireframe3.jpeg"}/>
                    </Col>
                </Row >
        </Container>
        <Container>
                <Row className="justify-content-md-center">
                    <Col lg="9">
                        <p class="case-subheading">Prototyping</p>
                    </Col>
                </Row>
        </Container>
        <Container >
                <Row className="justify-content-md-center">
                    <Col lg="9">
                        <p class="portfolio-paragraph"></p>
                        <p class="portfolio-paragraph">Amna Mughal, Chris Santos, Helena Lee, Juliet Kern </p>
                    </Col>
                </Row>
        </Container>
        <Container>
                <Row className="justify-content-md-center">
                    <Col lg="9">
                        <p class="case-subheading">Implementation</p>
                    </Col>
                </Row>
        </Container>
        <Container >
                <Row className="justify-content-md-center">
                    <Col lg="9">
                        <p class="portfolio-paragraph"></p>
                        <p class="portfolio-paragraph">Amna Mughal, Chris Santos, Helena Lee, Juliet Kern </p>
                    </Col>
                </Row>
        </Container>
        <Container>
                <Row className="justify-content-md-center">
                    <Col lg="9">
                        <p class="case-subheading">Results</p>
                    </Col>
                </Row>
        </Container>
        <Container >
                <Row className="justify-content-md-center">
                    <Col lg="9">
                        <p class="portfolio-paragraph"></p>
                        <p class="portfolio-paragraph">Amna Mughal, Chris Santos, Helena Lee, Juliet Kern </p>
                    </Col>
                </Row>
        </Container>
        <Container>
                <Row className="justify-content-md-center">
                    <Col lg="9">
                        <p class="case-subheading">Iterations</p>
                    </Col>
                </Row>
        </Container>
        <Container >
                <Row className="justify-content-md-center">
                    <Col lg="9">
                        <p class="portfolio-paragraph"></p>
                        <p class="portfolio-paragraph">Amna Mughal, Chris Santos, Helena Lee, Juliet Kern </p>
                    </Col>
                </Row>
        </Container>
        </>
    );
}

export default MemorymapsPage;