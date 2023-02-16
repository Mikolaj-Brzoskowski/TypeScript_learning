import { Carousel } from "react-bootstrap";

export interface MainPageSlidesProps {

}

const MainPageSlides: React.FC<MainPageSlidesProps> = ({ }) => {
return (
    <Carousel fade>
        <Carousel.Item interval={10000}>
            <img
            className="d-block w-100"
            src="assets/music_sleep.jpg"
            alt="First slide"
            />
            <Carousel.Caption bsPrefix='custom-caption'>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
            <img
            className="d-block w-100"
            src="assets/MIMIR.jpg"
            alt="Second slide"
            />
            <Carousel.Caption bsPrefix='custom-caption'>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
            <img
            className="d-block w-100"
            src="assets/sleeping_woman.jpg"
            alt="Third slide"
            />
            <Carousel.Caption bsPrefix='custom-caption'>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        )
}

export default MainPageSlides;