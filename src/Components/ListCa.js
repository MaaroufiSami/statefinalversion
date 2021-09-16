import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Shows = ({Personne}) => {
  return (
    <div>
      <Card>
        <CardImg  src={Personne.imgSrc} alt="Card image cap" className="img" />
        <CardBody>
          <CardTitle tag="h5">{Personne.fullName}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{Personne.profession}</CardSubtitle>
          <CardText>{Personne.bio}.</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Shows;