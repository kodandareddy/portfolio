import React from "react";
import "./Projects.scss";
import { Card, Button, Row, Col, Badge } from "react-bootstrap";
import { projects } from "./project";
import { v4 as uuidv4 } from 'uuid'
const Projects = ({work}) => {
  return (
    <div className="projects" ref={work}>
      <h1 className="projects-heading">My Work</h1>
      <div className="cards-container max-width">
        <Row className="mx-2">
          {projects.map((proj) => {
            return (
              <Col  sm={12} md={6} lg={4}  className="mb-5" key={uuidv4()} data-aos="fade-left">
                <Card>
                  <div className="image-container">
                  <Card.Img
                    variant="top"
                    className="project_img"
                    src={process.env.PUBLIC_URL + proj.img_path}
                  />
                  </div>
                 
                  <div className="badges">
                    {proj?.badge.map((bad) => {
                      return (
                        <Badge key={uuidv4()} pill bg="primary">
                          #{bad}
                        </Badge>
                      );
                    })}
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title>{proj?.title}</Card.Title>

                    <div className="buttons-group d-flex justify-content-center">
                      <a href={proj?.github_link} target="_blank">
                        <Button variant="primary">Git Hub</Button>
                      </a>
                      <a href={proj?.live_project} target="_blank">
                      <Button variant="primary">Live Link</Button>
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Projects;
