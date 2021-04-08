import Register from "../Register";
import { useState, useEffect } from "react";
import axios from "axios";
import TableRaw from "../TableRaw";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
`;
const Title = styled.div`
  font-size: 24px;
  font-style: italic;
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
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    console.dir(event.currentTarget);
  };

  return (
    <Container>
      <Title>Suivi des entreprises</Title>
      <Register />
      <form onSubmit={onSubmit}>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Entreprise</th>
              <th>Contact(site)</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Intitulé du poste</th>
              <th>Techniques</th>
              <th>Lien de l'offre</th>
              <th>Date de relance 1</th>
              <th>Date de relance 2</th>
              <th>Resultat</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {Societies &&
              Societies.map((society) => (
                <TableRaw
                  key={society._id}
                  _id={society._id}
                  date={new Date(parseInt(society.date))
                    .toString()
                    .slice(0, 16)}
                  name={society.name}
                  contact={society.contact}
                  mail={society.mail}
                  telephone={society.telephone}
                  post_name={society.post_name}
                  techniques={society.techniques}
                  url={society.url}
                  date_relaunch1={society.date_relaunch1}
                  date_relaunch2={society.date_relaunch2}
                  result={society.result}
                />
              ))}
          </tbody>
        </table>
      </form>
    </Container>
  );
};
export default Main;
