import { Container, Row, Col } from "react-bootstrap";
import { text } from "../../lorem_ipsum"

export interface MainPageContainerProps {

}

const MainPageContainer: React.FC<MainPageContainerProps> = ({ }) => {
    return (
        <div>
        <Container>
        <Row>
            <Col className="square border border-info rounded">{text}</Col>
            <Col className="square border border-info rounded">{text}</Col>
        </Row>
        <Row>
            <Col className="square border border-info rounded">{text}</Col>
            <Col className="square border border-info rounded">{text}</Col>
        </Row>
        <Row>
            <Col className="square border border-info rounded">{text}</Col>
            <Col className="square border border-info rounded">{text}</Col>
        </Row>
        </Container>
        </div>
    )
}

export default MainPageContainer;