import axios from "axios";
import { useEffect, useState } from "react";

function TableRaw({
  _id,
  date,
  name,
  contact,
  mail,
  telephone,
  post_name,
  techniques,
  url,
  date_relaunch1,
  date_relaunch2,
  result,
}) {
  const [edit, setEdit] = useState(false);

  switch (result) {
    case 0:
      result = "Refusé";
      break;
    case 1:
      result = "Accepté";
      break;
    default:
      result = "en cours";
  }

  const triggerEdit = (event) => {
    event.preventDefault();
    setEdit((prev) => !prev);
  };
  const onClick = () => {
    axios.post("/api/society/delete", { _id });
  };
  return edit ? (
    <tr>
      <td>
        <input value={date} />
      </td>
      <td style={{ fontWeight: "600" }}>
        <input value={name} />
      </td>
      <td>
        <a href={contact}>{contact.slice(8, 20)}</a>
      </td>
      <td>
        <input value={mail} />
      </td>
      <td>
        <input value={telephone} />
      </td>
      <td>
        <input value={post_name} />
      </td>
      <td>
        <input value={techniques.join()} />
      </td>
      <td>
        <a href={url} target="_blank">
          <input value={url.slice(8, 20)} />
        </a>
      </td>
      <td>
        <input value={date_relaunch1} />
      </td>
      <td>
        <input value={date_relaunch2} />
      </td>
      <td>
        <input value={result} />
      </td>
      <td>
        <button>Send</button>
        <button onClick={triggerEdit}>Edit</button>
      </td>
    </tr>
  ) : (
    <tr>
      <td> {date} </td>
      <td style={{ fontWeight: "600" }}>{name}</td>
      <td>
        <a href={contact}>{contact.slice(8, 20)}</a>
      </td>
      <td>{mail}</td>
      <td>{telephone}</td>
      <td>{post_name}</td>
      <td>{techniques.join()}</td>
      <td>
        <a href={url} target="_blank">
          {url.slice(8, 20)}
        </a>
      </td>
      <td>{date_relaunch1}</td>
      <td>{date_relaunch2}</td>
      <td>{result}</td>
      <td>
        <button onClick={onClick}>Delete</button>
        <button onClick={triggerEdit}>Edit</button>
      </td>
    </tr>
  );
}

export default TableRaw;
