import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaQuestionCircle } from "react-icons/fa";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.items);
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const [shippingMethod, setShippingMethod] = useState("");
  const [showHelp, setShowHelp] = useState(false);
  
  const dispatch = useDispatch();

  const handleShippingChange = (e) => {
    setShippingMethod(e.target.value);
  };

  const handleHelpClick = () => {
    setShowHelp(!showHelp);
  };

  const handlePlaceOrder = () => {
    if (shippingMethod) {
      alert("Order placed successfully!");
      // Logic to handle order placement
      // For example, dispatching an action to clear the cart or navigate to a confirmation page
    } else {
      alert("Please select a shipping method.");
    }
  };

  return (
    <Container className="mt-5 d-flex flex-column align-items-center justify-content-center" fluid>
      <div className="card p-4 w-50">
        <h2>Your Cart</h2>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <p>
                {item.name} - ${item.price}
              </p>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      <h3 className="text-center mt-4">Total: ${total}</h3>

      {/* Shipping Method Selection */}
      <Form.Group className="mt-4 w-50">
        <Form.Label>Select Shipping Method</Form.Label>
        <Form.Control as="select" value={shippingMethod} onChange={handleShippingChange}>
          <option value="">Select...</option>
          <option value="standard">Standard Shipping - $5.00</option>
          <option value="express">Express Shipping - $15.00</option>
        </Form.Control>
      </Form.Group>

      {/* Help Section */}
      <Button
        variant="link"
        className="mt-3 d-flex align-items-center"
        onClick={handleHelpClick}
      >
        <FaQuestionCircle className="me-2" /> Need help with shipping?
      </Button>
      {showHelp && (
        <div className="alert alert-info mt-2 w-50">
          <p><strong>Standard Shipping:</strong> Delivered within 5-7 business days.</p>
          <p><strong>Express Shipping:</strong> Delivered within 1-2 business days.</p>
        </div>
      )}

      {/* Place Order Button */}
      <Button className="bg-success mt-4" onClick={handlePlaceOrder} disabled={cart.length === 0}>
        Place Order
      </Button>
    </Container>
  );
};

export default CartPage;
