import React, { useState } from "react";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import { Component } from "react";
import axios from "axios";

class AllPhotosTable extends Component {
  state = {
    allPhotosTable: [],
  };

  getAllPictures = async () => {
    var res = await axios(`https://localhost:44394/api/pictures`);
    var tempItem = res.data;
    return this.setState({
    allPhotosTable: tempItem,
    });
  };

  render() {
    console.log(this.state.allPhotosTable);
    return (
      <React.Fragment>
        <div>
          <Button
            style={{ backgroundColor: "black", borderColor: "crimson" }}
            onClick={this.getAllPictures}
          >
            Display All Pictures
          </Button>
        </div>
        <Container>
          <Row>
            <Col sm={4}>
              <h1 className="title">All Products</h1>
            </Col>
            <Col sm={8}></Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className="d-flex justify-content-center m-1">
            {this.state.allPhotosTable.map((photo) => {
              var image = new Image();
              if (photo.image === null || photo.image === "") {
                image.src =
                  "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg";
              } else {
                image.src = photo.image;
              }

              return (
                <Card
                  className="customCard card-container border"
                  style={{ width: "25rem", margin: "1rem" }}
                >
                  <Card.Img className="prodImg" variant="top" src={image.src} />
                  <Card.Body className="text-center">
                    <Card.Title className="fs-4">
                      {photo.ShootName}
                    </Card.Title>
                    <hr className="titleSeperator"></hr>

                    <Card.Text className="fs-5">
                      {photo.Category}
                    </Card.Text>
                    <div className="mb-2"></div>
                    <div className="d-flex justify-content-center"></div>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default AllPhotosTable;
