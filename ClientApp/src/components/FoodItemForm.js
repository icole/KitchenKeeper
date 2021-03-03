import React from "react";
import { Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function FoodItemForm(item) {
  const cancelEdit = (item) => {
    item.editMode = false;
  };
  return (
    <tr key={item.id}>
      <td>
        <Input style={{ width: "70%" }} />
      </td>
      <td>
        <div style={{ display: "flex" }}>
          <Input style={{ width: "30%", marginRight: "1em" }} />{" "}
          <Input style={{ width: "30%", marginRight: "1em" }} />
        </div>
      </td>
      <td>
        <Input style={{ width: "70%" }} />
      </td>
      <td>
        <FontAwesomeIcon
          onClick={() => cancelEdit(item)}
          icon={faTimesCircle}
        />
      </td>
    </tr>
  );
}

export default FoodItemForm;
