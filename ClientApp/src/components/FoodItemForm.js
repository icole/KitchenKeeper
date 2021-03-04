import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faCheck } from "@fortawesome/free-solid-svg-icons";

const CREATE_FOOD_ITEM = gql`
  mutation AddFoodItem($input: AddFoodItemInput!) {
    addFoodItem(input: $input) {
      foodItem {
        id
        name
        amount
        unit
        price
      }
    }
  }
`;

function FoodItemForm({ item, onCreateCancel, onUpdate }) {
  const [createFoodItem] = useMutation(CREATE_FOOD_ITEM, {
    onCompleted: (data) => {
      if (data?.addFoodItem?.foodItem) {
        onUpdate(item, data.addFoodItem.foodItem);
      }
    },
  });
  const [input, setInput] = useState({});

  const updateInput = (event) => {
    input[event.target.name] = event.target.value;
    setInput(input);
  };

  const onCreate = () => {
    createFoodItem({
      variables: {
        input: {
          name: input["name"],
          amount: parseFloat(input["amount"]),
          unit: input["unit"],
          price: parseFloat(input["price"]),
        },
      },
    });
  };

  return (
    <tr>
      <td>
        <Input
          style={{ width: "70%" }}
          name="name"
          value={item.name}
          onChange={updateInput}
        />
      </td>
      <td>
        <div style={{ display: "flex" }}>
          <Input
            style={{ width: "30%", marginRight: "1em" }}
            name="amount"
            value={item.amount}
            onChange={updateInput}
          />{" "}
          <Input
            style={{ width: "30%", marginRight: "1em" }}
            name="unit"
            value={item.unit}
            onChange={updateInput}
          />
        </div>
      </td>
      <td>
        <Input
          style={{ width: "70%" }}
          name="price"
          value={item.price}
          onChange={updateInput}
        />
      </td>
      <td>
        <FontAwesomeIcon
          className="action-icon"
          icon={faCheck}
          onClick={onCreate}
        />
        <FontAwesomeIcon
          className="action-icon"
          onClick={() => onCreateCancel(item)}
          icon={faTimesCircle}
        />
      </td>
    </tr>
  );
}

export default FoodItemForm;
