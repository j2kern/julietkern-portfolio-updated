import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Pages.css';

function PortfolioPage(props){

    function Projects({ projects, index }){
        return(
            <a href={projects.link} class="button">
            <Row className="justify-content-md-center project-box">
                <Col lg="4" >
                    <img class="mx-auto d-block portfolio-image" src={projects.imageUrl}/>
                </Col>
                <Col lg="6" >
                    <p class="portfolio-header"> {projects.name} </p>
                    <p class="portfolio-paragraph"> {projects.paragraph}</p>
                    <p class="portfolio-paragraph">{projects.date}</p>
                </Col>
            </Row>
            </a>
        )
    }
    const [projects, setProjects] = useState([
        {
            imageUrl: 'canada_tech_dropshadow.png',
            name: 'Canada Technology Website & Brand | The Home Depot',
            paragraph: `A webpage that simplifies a new hire's navigation through the 
            resources available to them at the Home Depot head office. Designed with Axure
             and Photoshop and developed in Angular with integrated Google Maps.`,
            date: 'May 2020 - Aug. 2020',
            subHueading: 'The Home Depot'
        },
        {
            imageUrl: 'memorymaps_dropshadow.png',
            name: 'Memory Maps | Waterloo Hackathon',
            paragraph: `An application that focuses on preventing people with neurological 
            disorders such as Dementia or Alzheimer’s from unsafe conditions. Collaborated 
            with team members (Amna Mughal, Chris Santos, Helena Lee) under high-pressure 
            and short time constraint to complete the project efficiently. The implementation 
            used HTML5, CSS3 and Google Maps API.`,
            date: 'Jan. 2020',
            link: 'https://devpost.com/software/memorymaps#updates'
        },
        {
            imageUrl: 'wallet.png',
            name: 'The Accessible Wallet | University of Waterloo Design Project',
            paragraph: `Designed an accessible wallet for users with arthritis to access the
            contents of their wallet while eliminating pinching or gripping motions,
            minimizing pain and stress on joints. Through collaborative and
            iterative design, we fabricated the wallet using Solidworks and 3D
            printed the prototype to conduct functional testing.`,
            date: 'Sept. 2019 - Dec. 2019'
        },
        {
            imageUrl: 'biotron_logo.png',
            name: 'Biomechatronics Design Team | CAD Assignment',
            paragraph: `Team Lead of Daniel's Arm project. The prosthetic is for a
            double amputee in El Salvador in need of a device. It is made of 3D
            printed material and the grip is mechanized to add an additional degree
            of freedom. The prosthetic is powered by rechargeable batteries,
            controlled by a programmed Arduino and connected to a linear actuator to
            allow for the gripping and extension of the fingers. As the Team Lead,
            the responsibilities include organizing club members and timelines to
            maximize productivity and ensure group stays focused to complete the
            project by the desired deadline.`,
            date: 'Jan. 2020 - Apr. 2020'
        }
    ]);


    return(
        <>
        <Container>
                <Row className="justify-content-md-center">
                    <Col sm={12}>
                        <p class="portfolio-subheading mx-auto d-block">Projects</p>
                    </Col>
                </Row>
        </Container>
        <Container>
            {projects.map((projects, index) => (
                <Projects key={index} index={index} projects={projects}/>
            ))}
                <Row className="justify-content-md-center">
                    <Col lg="10">
                    <img class="mx-auto d-none d-md-block portfolio-image-wide" src="biotron_armpieces.png"/>
                    </Col>
                </Row>
        </Container>
        </>
    );
}

export default PortfolioPage;