import Register from "../Register";
import { useState, useEffect } from "react";
import axios from "axios";
import TableRow from "../TableRow";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: scroll;
`;
const Title = styled.div`
  font-size: 24px;
  font-style: italic;
`;
const Row = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
`;
const TableHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: rgb(20, 20, 20, 0.7);
  color: rgb(255, 255, 255);
  padding: 10px 0px;
`;

const Main = () => {
  const [Societies, setSocieties] = useState([]);

  useEffect(() => {
    axios
      .get("/api/society")
      .then((response) => {
        setSocieties(response.data);
      })
      .catch((err) => console.log(err));
  }, [Societies]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.dir(event.currentTarget);
  };

  return (
    <Container>
      <Title>Suivi des entreprises</Title>
      <Register />
      <TableHead>
        <Row>Date</Row>
        <Row>Entreprise</Row>
        <Row>Contact(site)</Row>
        <Row>Email</Row>
        <Row>Téléphone</Row>
        <Row>Intitulé du poste</Row>
        <Row>Techniques</Row>
        <Row>Lien de l'offre</Row>
        <Row>Date de relance 1</Row>
        <Row>Date de relance 2</Row>
        <Row>Resultat</Row>
        <Row>Option</Row>
      </TableHead>
      {Societies &&
        Societies.map((society) => (
          <TableRow key={society._id} society={society} />
        ))}
    </Container>
  );
};
export default Main;
