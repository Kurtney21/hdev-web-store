import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Button, Card, Container, Dropdown, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { productsArray } from "../data/products"; // Import the productsArray

// Styled component for product image
const PhoneImg = styled(Card.Img)`
  width: 100%;
  height: 200px;
  object-fit: contain;
  display: block;
`;

// Styled component for product card
const StyledCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .card-text {
    height: 110px;
  }
`;

// Styled component for card body
const CardBody = styled(Card.Body)`
  flex-grow: 1;
`;

// Placeholder styled component for card text
const CardText = styled.div``;

const ProductPage = () => {
  const dispatch = useDispatch();

  return (
    <Container
      className="d-flex flex-column justify-content-end mx-auto p-4 my-4"
      fluid
    >
      <Row>
        {productsArray.map((product, index) => (
          <Col
            key={index}
            xs={12}
            sm={12}
            md={6}
            lg={4}
            xxl={3}
            className="pb-4"
          >
            <StyledCard className="card shadow-md p-2 p-md-4 m-2">
              <PhoneImg variant="top" src={product.defaultImg} />
              <CardBody className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted fw-bold">
                  Price: R {product.price}
                </Card.Subtitle>
                <CardText className="mb-2">
                  Description: {product.description}
                </CardText>
              </CardBody>
              <Card.Footer className="text-center">
                <Button
                  variant="primary"
                  className="px-5"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </StyledCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductPage;
