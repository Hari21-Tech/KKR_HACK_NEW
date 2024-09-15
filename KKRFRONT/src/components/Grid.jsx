import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Shop from "./Shop";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Grid() {
  const [shop, setShop] = useState([]);
  const navigate = useNavigate();

  const getShop = () => {
    axios.get("http://127.0.0.1:8000/shop/show").then((res) => {
      // const { data: people } = res;
      const shop = res.data;
      console.log(shop);
      // console.log(people.data);
      // this.setState({ people });
      setShop(shop);
    });
  };

  const askForEmail = () => {
    // console.log("qejnfq");
    navigate("/shops/joinQueue");
  };

  useEffect(() => getShop(), []);

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
            {/* {console.log(shops)} */}
            {shop.map((shop, index) => {
              return (
                <Card
                  key={index}
                  // className="bg-blue-100"
                  // bg="bg-green-100"
                  style={{
                    height: "20rem",
                    width: "18rem",
                    marginRight: 20,
                    background: "aqua",
                  }}
                >
                  <Card.Body>
                    <Card.Title
                      // style={{ mb: "20px" }}
                      className="text-5xl font-bold mb-10"
                    >
                      {shop.name}
                    </Card.Title>
                    {/* <Card.Title className="text-5xl font-bold"></Card.Title> */}
                    <Card.Text className="text-4xl">{`🌟${shop.rating}`}</Card.Text>
                    <Card.Text className="text-2xl">{`Opens:  ${shop.open_t} AM`}</Card.Text>
                    <Card.Text className="text-2xl">{` Closes:  ${shop.close_t} PM`}</Card.Text>
                    {/* <Link to="/" /> <button>Home</button> */}
                    {/* <Link to="/about">
          </Link> */}
                    <Card.Text>
                      <Button onClick={askForEmail} style={{ marginTop: 30 }}>
                        Join the virtual queue
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
            {/* <Shop shopName="Jaggis" shopRating="4" /> */}
            <Card
              // className="bg-blue-100"
              // bg="bg-green-100"
              style={{
                height: "20rem",
                width: "18rem",
                marginRight: 20,
                background: "aqua",
              }}
            >
              <Card.Body>
                <Card.Title
                  // style={{ mb: "20px" }}
                  className="text-5xl font-bold mb-10"
                >
                  Jaggis
                </Card.Title>
                {/* <Card.Title className="text-5xl font-bold"></Card.Title> */}
                <Card.Text className="text-4xl">{`🌟4`}</Card.Text>
                <Card.Text className="text-2xl">Opens: 8 AM</Card.Text>
                <Card.Text className="text-2xl">Closes: 8 PM</Card.Text>
                <Card.Text className="text-2xl font-bold">
                  Currently out of service
                </Card.Text>
                {/* <Link to="/" /> <button>Home</button> */}
                {/* <Link to="/about">
          </Link> */}
              </Card.Body>
            </Card>
            {/* <Shop shopName="Gblock Cafe" shopRating="4.5" /> */}
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
            {/* <Shop shopName="Nescafe" shopRating="3" /> */}
            {/* <Shop isAvailable="true" shopName="WrapChick" shopRating="2" /> */}
            {/* <Shop shopName="Sips And Bytes" shopRating="4" /> */}
          </div>
        </Col>
        <Col>
          <div style={{ marginTop: 20 }} className="shopDrop">
            {/* <select id="dropdown">
            <option value="option1">Choose Shop</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select> */}
            {/* <Shop isAvailable="true" shopName="Juice Shop" shopRating="4" /> */}
            {/* <Shop shopName="Barber Shop" shopRating="3" /> */}
            {/* <Shop shopName="Airtel" shopRating="2" /> */}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Grid;
