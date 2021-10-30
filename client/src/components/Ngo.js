import React, { useState, useEffect } from 'react'
import "./Box.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md"
import { Link } from "react-router-dom";
import axios from 'axios'
const NgoList = () => {
  const [state, setstate] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/ngo/Agartala').then(response => {
      console.log(response.data[0].Ngo_collections)
      setstate(response.data[0].Ngo_collections)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className="grid">
      {
        state && state.map(card => {
          return (
            <Card style={{ width: "18rem" }} className="box text-center">
              <Card.Img variant="top" src="https://image.freepik.com/free-vector/people-holding-heart-hand-icons_53876-66152.jpg" />
              <Card.Body >
                <Card.Title><strong>{card.name}</strong></Card.Title>
                <Card.Text>{card.address.city}, {card.address.state}</Card.Text>
                <Card.Text><BsTelephoneFill /> {card.telephone}</Card.Text>
                <Card.Text><MdEmail /> {card.email}</Card.Text>
              </Card.Body>
              <Link to={{
                pathname: "/contact",
                state: card
              }} >
                <Button style={{ marginBottom: 10 }} variant="primary">Contact</Button>
              </Link>
            </Card>
          );
        })
      }
    </div>
  );
};

export default NgoList;