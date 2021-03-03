import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Button, Card, Table } from "reactstrap";
import { nanoid } from "nanoid";

import FoodItemForm from "./FoodItemForm";

const FOOD_ITEMS = gql`
  query FoodItems {
    foodItems {
      id
      name
      amount
      unit
      price
    }
  }
`;

function FoodItems() {
  const [foodItems, setFoodItems] = useState([]);
  const { loading, error, data } = useQuery(FOOD_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const addNewItem = () => {
    setFoodItems([...foodItems, { id: nanoid(), editMode: true }]);
  };

  return (
    <Card body>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <h1 id="tabelLabel">Food Items</h1>
        </div>
        <div>
          <Button
            color="primary"
            onClick={addNewItem}
            style={{ marginLeft: "1em" }}
          >
            + Add Item
          </Button>
        </div>
      </div>
      <Table className="table" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {foodItems.map((item) =>
            item.editMode ? (
              <FoodItemForm key={item.id} item={item} />
            ) : (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  {item.amount} {item.unit}
                </td>
                <td>${item.price?.toFixed(2)}</td>
                <td></td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </Card>
  );
}

export default FoodItems;
