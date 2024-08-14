import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const Memecard = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Card style={{ width: "300px", margin: "25px" }}>
        <Card.Img variant="top" src={props.url} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Button
            onClick={() => navigate(`/edit?url=${props.url}`)}
            variant="primary"
          >
            Edit
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

Memecard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Memecard;
