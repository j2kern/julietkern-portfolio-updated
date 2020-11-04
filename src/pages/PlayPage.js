import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Pages.css';

function PlayPage(props){

    function Film ({ film, index }){
        return(
            <Col lg="5">
                <img class="mx-auto d-block resume-pdf " src={film.imageUrl}/>
            </Col>
        )
    };

    function Portrait({portrait, index}){
        return(
            <Col lg="3" >
                <img class="mx-auto d-block resume-pdf portrait grayscale" src={portrait.imageUrl}/>
            </Col>
        )
    };

    const [ film, setFilm ] = useState([
        {
            imageUrl: 'toronto_pic.jpeg'
        },
        {
            imageUrl: 'me_pic.jpeg'
        },
        {
            imageUrl: 'blurry_pic.jpeg'
        },
        {
            imageUrl: 'park_pic.jpeg'
        }
    ]);

    const [ portrait, setPortrait ] = useState([
        {
            imageUrl: 'portrait2.jpeg'
        },
        {
            imageUrl: 'portrait3.jpeg'
        },
        {
            imageUrl: 'portrait21.png'
        },
    ]);

    return(
        <>
        <Container>
                <Row className="justify-content-md-center">
                    <Col sm={12}>
                        <p class="portfolio-subheading mx-auto d-block">Film</p>
                    </Col>
                </Row>
        </Container>
        <Container>
            <Row className="justify-content-md-center">
                {film.map((film,index) => (
                    <Film key={film} index={index} film={film} />
                ))}
            </  Row>
        </Container>
        <Container>
                <Row className="justify-content-md-center">
                    <Col sm={12}> 
                        <p class="portfolio-subheading mx-auto d-block">Portraits</p>
                    </Col>
                </Row>
        </Container>
        <Container >
                <Row className="justify-content-md-center">
                    {portrait.map((portrait, index) => (
                        <Portrait key={index} index={index} portrait={portrait}/>
                    ))}
                </Row >
        </Container>
        <Container>
                <Row className="justify-content-md-center">
                    <Col sm={12}> 
                        <p class="portfolio-subheading mx-auto d-block">3D CAD Builds</p>
                    </Col>
                </Row>
        </Container>
        <Container >
                <Row className="justify-content-md-center project-box">
                    <Col lg="4">
                    <img class="mx-auto d-block portfolio-image" src="miway_bus.png"/>
                    </Col>
                    <Col lg="6" >
                        <p class="portfolio-header">Mi Way City Bus | CAD Assignment</p>
                        <p class="portfolio-paragraph">Built a 3D scale model of a Mississauga city bus on Solidworks using multiple parts in assembly. </p>
                        <p class="portfolio-paragraph">Oct. 2019</p>
                    </Col>
                </Row>
        </Container>
        </>
    );
}

export default PlayPage;