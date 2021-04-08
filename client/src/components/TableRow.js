import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  border-bottom: 1px solid rgb(20, 20, 20, 0.7);
`;
const Row = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 5px;
  word-break: break-all;
  text-align: center;
`;
const Input = styled.input`
  width: 100%;
`;

function TableRow({ society }) {
  const [edit, setEdit] = useState(false);
  const [societyObj, setSocietyObj] = useState(society);
  const history = useHistory();

  const triggerEdit = (event) => {
    event.preventDefault();
    setEdit((prev) => !prev);
  };
  const onClick = () => {
    const { _id } = societyObj;
    axios.post("/api/society/delete", { _id });
  };
  const onChange = (event) => {
    const {
      currentTarget: { name, value },
    } = event;
    switch (name) {
      case "name":
        setSocietyObj({ ...societyObj, name: value });
        break;
      case "contact":
        setSocietyObj({ ...societyObj, contact: value });
        break;
      case "mail":
        setSocietyObj({ ...societyObj, mail: value });
        break;
      case "telephone":
        setSocietyObj({ ...societyObj, telephone: value });
        break;
      case "post_name":
        setSocietyObj({ ...societyObj, post_name: value });
        break;
      case "techniques":
        setSocietyObj({ ...societyObj, techniques: value });
        break;
      case "date_relaunch1":
        setSocietyObj({ ...societyObj, date_relaunch1: value });
        break;
      case "date_relaunch2":
        setSocietyObj({ ...societyObj, date_relaunch2: value });
        break;
      case "result":
        setSocietyObj({ ...societyObj, result: value });
        break;
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    axios.post("/api/society/update", societyObj).then((response) => {
      alert(response.data.success ? "Bien enrégistré" : "Il y a error");
      window.location.reload();
    });
  };

  return edit ? (
    <form style={{ width: "100%" }} onSubmit={onSubmit}>
      <Container>
        <Row>{new Date(parseInt(societyObj.date)).toString().slice(0, 16)}</Row>
        <Row style={{ fontWeight: "600" }}>
          <Input onChange={onChange} name="name" value={societyObj.name} />
        </Row>
        <Row>
          <Input
            onChange={onChange}
            name="contact"
            value={societyObj.contact}
          />
        </Row>
        <Row>
          <Input onChange={onChange} name="mail" value={societyObj.mail} />
        </Row>
        <Row>
          <Input
            onChange={onChange}
            name="telephone"
            value={societyObj.telephone}
          />
        </Row>
        <Row>
          <Input
            onChange={onChange}
            name="post_name"
            value={societyObj.post_name}
          />
        </Row>
        <Row>
          <Input
            onChange={onChange}
            name="techniques"
            value={societyObj.techniques}
          />
        </Row>
        <Row>
          <Input onChange={onChange} name="url" value={societyObj.url} />
        </Row>
        <Row>
          <Input
            onChange={onChange}
            name="date_relaunch1"
            value={societyObj.date_relaunch1}
          />
        </Row>
        <Row>
          <Input
            onChange={onChange}
            name="date_relaunch2"
            value={societyObj.date_relaunch2}
          />
        </Row>
        <Row>
          <Input onChange={onChange} name="result" value={societyObj.result} />
        </Row>
        <Row style={{ flexDirection: "column" }}>
          <button>Update</button>
          <button onClick={triggerEdit}>Cancel</button>
        </Row>
      </Container>
    </form>
  ) : (
    <Container>
      <Row> {new Date(parseInt(societyObj.date)).toString().slice(0, 16)} </Row>
      <Row style={{ fontWeight: "600" }}>{societyObj.name}</Row>
      <Row>
        <a href={societyObj.contact} target="_blank">
          {societyObj.contact.slice(8, 20)}
        </a>
      </Row>
      <Row>{societyObj.mail}</Row>
      <Row>{societyObj.telephone}</Row>
      <Row>{societyObj.post_name}</Row>
      <Row>{societyObj.techniques.join(", ")}</Row>
      <Row>
        <a href={societyObj.url} target="_blank">
          {societyObj.url.slice(8, 20)}
        </a>
      </Row>
      <Row>{societyObj.date_relaunch1}</Row>
      <Row>{societyObj.date_relaunch2}</Row>
      <Row>
        {societyObj.result === 2
          ? "En cours"
          : societyObj.result === 1
          ? "Accepté"
          : "Refusé"}
      </Row>
      <Row style={{ flexDirection: "column" }}>
        <button onClick={onClick}>Delete</button>
        <button onClick={triggerEdit}>Edit</button>
      </Row>
    </Container>
  );
}

export default TableRow;
