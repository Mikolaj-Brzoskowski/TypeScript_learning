import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export interface MainPageSlidesProps {

}

const MainPageSlides: React.FC<MainPageSlidesProps> = ({ }) => {
return (
    <Carousel fade id="introduction">
       <Carousel.Item interval={10000}>
            <HashLink to="/home#about">	
                <img
                className="d-block w-100"
                src="assets/music_sleep.jpg"
                alt="First slide"
                />
                <Carousel.Caption bsPrefix='custom-caption'>
                <h3>Welcome to Drimiral!</h3>
                <p>App that is all about your dreams. Read the introduction to know more about.</p>
                </Carousel.Caption>
            </HashLink>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
            <Link to="/journal">
            <img
            className="d-block w-100"
            src="assets/MIMIR.jpg"
            alt="Second slide"
            />
            <Carousel.Caption bsPrefix='custom-caption'>
            <h3>Start your journal now!</h3>
            <p>Click to create a free account.</p>
            </Carousel.Caption>
            </Link>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
            <Link to="/contact">
            <img
            className="d-block w-100"
            src="assets/sleeping_woman.jpg"
            alt="Third slide"
            />
            <Carousel.Caption bsPrefix='custom-caption'>
            <h3>Do you have any suggestions or ideas what to improve?</h3>
            <p>
                Contact us right now! We are taking in consideration users feedback.
            </p>
            </Carousel.Caption>
            </Link>
        </Carousel.Item>
        </Carousel>
        )
}

export default MainPageSlides;