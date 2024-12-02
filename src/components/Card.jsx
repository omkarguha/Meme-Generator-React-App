import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const MemeCard = (props) => {
    const navigate = useNavigate();
    return (
        <Card style={{ width: "18rem",margin:"10px" }}>
            <Card.Img variant="top" src={props.url}  style={{width:"250px"}} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Button variant="primary" onClick={e=> navigate(`/edit?url=${props.url}`)}>Edit</Button>
            </Card.Body>
        </Card>
    );
};


export default MemeCard;