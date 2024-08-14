import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import '../component/memeCards.css';

const Memecard = (props) => {
  const navigate = useNavigate();
  return (
    <div className="card-wrapper">
      <Card
        className="shadow-sm border-light"
        style={{ width: "100%", maxWidth: "300px" }}
      >
        <Card.Img variant="top" src={props.url} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Button
            onClick={() => navigate(`/edit?url=${props.url}`)}
            variant="primary"
            className="w-100"
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
