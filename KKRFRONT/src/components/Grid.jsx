import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Shop from "./Shop";
import Card from "react-bootstrap/Card";

function Grid() {
  return (
    <Container>
      {/* <h1 style={{ color: "black" }}>asfn</h1> */}
      <Row>
        <Col>
          <div style={{ marginTop: 20 }} className="shopDrop">
            {/* <select id="dropdown">
            <option value="option1">Choose Shop</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select> */}
            {/* <Card.Title style={{ color: "white" }}>Kabir</Card.Title> */}
            <Shop
              isAvailable="true"
              shopName="Kabir Multistore"
              shopRating="2"
            />
            <Shop shopName="Jaggis" shopRating="4" />
            <Shop shopName="Gblock Cafe" shopRating="4.5" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={{ marginTop: 20 }} className="shopDrop">
            {/* <select id="dropdown">
            <option value="option1">Choose Shop</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select> */}
            <Shop shopName="Nescafe" shopRating="3" />
            <Shop isAvailable="true" shopName="WrapChick" shopRating="2" />
            <Shop shopName="Sips And Bytes" shopRating="4" />
          </div>
        </Col>
        <Col>
          <div style={{ marginTop: 20 }} className="shopDrop">
            {/* <select id="dropdown">
            <option value="option1">Choose Shop</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select> */}
            <Shop isAvailable="true" shopName="Juice Shop" shopRating="4" />
            <Shop shopName="Barber Shop" shopRating="3" />
            <Shop shopName="Airtel" shopRating="2" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Grid;
