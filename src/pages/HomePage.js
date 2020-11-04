import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Pages.css';

function HomePage(props){

    function Skills({ skills, index }){
        return(
            <Row className="justify-content-md-center ">
                    <Col lg="1" md="2" sm="3" xs="3">
                    <img class="mx-auto dev-des-image" src={skills.imageUrl} alt=""/>
                    </Col>
                    <Col lg="4" md="6" sm="6" xs="9" className="dev-des">
                        <p class="dev-des-header">{skills.name}</p>
                        <p class="welcome-paragraph">{skills.list}</p>
                    </Col>
            </Row>
        )
    }
    const [skills, setSkills] = useState([
        {
            imageUrl: 'design-logo.png',
            name: 'Design',
            list: 'Photoshop, AdobeXD, Axure, Figma, User Research and Testing'
        },
        {
            imageUrl: 'development-logo.png',
            name: 'Developmen',
            list: 'React, Angular, HTML, CSS, JavaScript, Google Analytics'
        },
        {
            imageUrl: '3D-modeling-logo.png',
            name: '3D Modeling',
            list: 'Solidworks, Rapid Prototyping, 3D Printing'
        },
    ]);

    return(
        <>
        {/* Header */}
        <div className="header-background">
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg="8" md="8" >
                        <img class="mx-auto d-block home-image " src="med-tech-shadows.png" alt=""/>
                    </Col>
                </Row>
            </Container>
        </div>
        {/* Mobile Caption */}
        <Container >
                <Row className="justify-content-md-center">
                    <Col sm={9}>
                    <p class="subheading ">Hi I'm Juliet</p>
                        <p class="welcome-paragraph ">I’m a Biomedical Engineering Student with a passion for design and technology, heavily focused on user centered design.</p>
                    </Col>
                </Row>
        </Container>
        {/* How can I help? - State "Skills" */}
        <Container >
                <Row className="justify-content-md-center">
                    <Col sm={9}>
                    <p class="subheading " > How can I Help?</p>
                    </Col>
                </Row>
        </Container>
        <Container>
            <div> 
                {skills.map((skills, index) => (
                    <Skills key={index} index={index} skills={skills}/>
                ))} 
            </div>
        </Container>
        {/* A little more about me */}
        <Container >
            <Row className="justify-content-md-center">
                <Col sm={9}>
                    <p class="subheading" >A Little More About Me</p>
                </Col>
            </Row>
        </Container>
        <Container >
            <Row className="justify-content-md-center">
                <Col sm={9}>
                    <p class="about-paragraph">I am a candidate for a Bachelors of Science in Biomedical Engineering at the University of Waterloo. I am interested in combining design, creative problem solving and technology to one day improve the future of healthcare. I am always up for a challenge and love to embrace the uncomfortable. Currently seeking an internship co-op position starting January 2021, feel free to reach out and connect!</p>
                </Col>
            </Row>
        </Container>
        {/* Contact Me */}
        <Container >
            <Row className="justify-content-md-center">
                <Col sm={9}>
                    <p class="subheading" >Contact</p>
                </Col>
            </Row>
        </Container>
        <Container >
            <Row className="justify-content-md-center">
                <Col sm={9}>
                    <a href="mailto:j2kern@uwaterloo.ca"><i class="fa fa-envelope contact"></i></a>
                    <a href="https://github.com/j2kern"><i class="fa fa-github contact"></i></a>
                    <a href="https://www.linkedin.com/in/julietkern"><i class="fa fa-linkedin contact"></i></a>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                </Col>
            </Row>
        </Container>
        <br/>
        </>
    );
}

export default HomePage;