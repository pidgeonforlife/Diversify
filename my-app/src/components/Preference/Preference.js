import React, { useState } from "react"
import { Card, Button, Alert, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import './Preference.css'

function Preference() {
    

  return (
    <div className="preference">
      <div className="header"></div>
      <div>
      <Card className="cardContainer">
        <Card.Body>
        <div className="imagecontainer">
            <img src="./images/blank-profile-picture-973460_960_720.png" />
        </div>
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload Resume</Form.Label>
            <Form.Control type="file" />
        </Form.Group>
        <Form.Group id="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" required />
        </Form.Group>
        <Form.Group id="address">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" required />
        </Form.Group>
        <Form.Group id="name">
              <Form.Label>Preferred Name</Form.Label>
              <Form.Control type="text" required />
        </Form.Group>
        <Form.Group id="linkedin">
              <Form.Label>Linkedin Profile</Form.Label>
              <Form.Control type="text" required />
        </Form.Group>
        <Form.Group id="github">
              <Form.Label>Github</Form.Label>
              <Form.Control type="text" required />
        </Form.Group>
        
        <Form.Group id="description">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <div className="buttonFinishContainer">
            <Link to={'/app'}>
            <button>WELCOME!</button>
            </Link>
        </div>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
}

export default Preference;