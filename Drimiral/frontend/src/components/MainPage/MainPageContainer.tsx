import { Container, Row, Col } from "react-bootstrap";
import { text } from "../../lorem_ipsum"
import MainPageSlides from "./MainPageSlides";

export interface MainPageContainerProps {

}

const containerFabric = (rowNum: number, colNum: number): React.ReactElement =>
{
    const colContainer: Array<React.ReactElement> = [];
    const rowContainer: Array<React.ReactElement> = [];
    for (let j = 0; j < colNum; j++) {
        colContainer.push(<Col className="square border border-info rounded" key={`col-${j}`}>{text}</Col>)
    }
    for (let i = 0; i < rowNum; i++) {
        rowContainer.push(
        <Row key={`row-${i}`}>
            {colContainer}
        </Row>);
    }
    return (
        <Container>
            <Row>
                <Col>
                    <MainPageSlides/>
                </Col>
            </Row>
            {rowContainer}
        </Container>
    )
} 

const MainPageContainer: React.FC<MainPageContainerProps> = ({ }) => {
    return (
        <div>
            {containerFabric(3,2)}
        </div>
    )
}

export default MainPageContainer;