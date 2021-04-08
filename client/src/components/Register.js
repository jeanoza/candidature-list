import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Register() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [mail, setMail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [postName, setPostName] = useState("");
  const [techniques, setTechniques] = useState("");
  const [url, setUrl] = useState("");
  const [dateRelaunch1, setDateRelaunch1] = useState("");
  const [dateRelaunch2, setDateRelaunch2] = useState("");
  const [result, setResult] = useState("2");

  const onChangeName = (event) => {
    setName(event.currentTarget.value);
  };
  const onChangeContact = (event) => {
    setContact(event.currentTarget.value);
  };
  const onChangeMail = (event) => {
    setMail(event.currentTarget.value);
  };
  const onChangeTelephone = (event) => {
    setTelephone(event.currentTarget.value);
  };
  const onChangePostName = (event) => {
    setPostName(event.currentTarget.value);
  };
  const onChangeTechniques = (event) => {
    setTechniques(event.currentTarget.value);
  };
  const onChangeUrl = (event) => {
    setUrl(event.currentTarget.value);
  };
  const onChangeDateRelaunch1 = (event) => {
    setDateRelaunch1(event.currentTarget.value);
  };
  const onChangeDateRelaunch2 = (event) => {
    setDateRelaunch2(event.currentTarget.value);
  };
  const onChangeResult = (event) => {
    setResult(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const dataObj = {
      name,
      contact,
      mail,
      telephone,
      post_name: postName,
      techniques: techniques
        .split(",")
        .map((technique) => technique.replace(" ", "")),
      url,
      date_relaunch1: dateRelaunch1,
      date_relaunch2: dateRelaunch2,
      result: parseInt(result),
    };
    axios
      .post("/api/society/register", dataObj)
      .then((response) => {
        alert(`${response.data.data.name} est bien enrégistré.`);
        setName("");
        setContact("");
        setMail("");
        setTelephone("");
        setPostName("");
        setTechniques("");
        setUrl("");
        setDateRelaunch1("");
        setDateRelaunch2("");
        setResult("2");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        margin: "20px",
      }}
    >
      <label>Entreprise</label>
      <input onChange={onChangeName} type="text" value={name} required />
      <label>Contact(site)</label>
      <input onChange={onChangeContact} type="text" value={contact} />
      <label>Email</label>
      <input onChange={onChangeMail} type="text" value={mail} />
      <label>Téléphone</label>
      <input onChange={onChangeTelephone} type="text" value={telephone} />
      <br />
      <label>Intitulé du poste</label>
      <input onChange={onChangePostName} value={postName} required />
      <label>Techniques</label>
      <input onChange={onChangeTechniques} type="text" value={techniques} />
      <label>Lien de l'offre</label>
      <input onChange={onChangeUrl} type="text" value={url} required />
      <br />
      <label>Date de relance 1</label>
      <input
        onChange={onChangeDateRelaunch1}
        type="date"
        value={dateRelaunch1}
      />
      <label>Date de relance 2</label>
      <input
        onChange={onChangeDateRelaunch2}
        type="date"
        value={dateRelaunch2}
      />
      <label>Result</label>
      <select onChange={onChangeResult} value={result}>
        <option value={1}>accepté</option>
        <option value={0}>refusé</option>
        <option value={2}>en cours</option>
      </select>
      <button>Envoyer</button>
    </form>
  );
}

export default Register;
