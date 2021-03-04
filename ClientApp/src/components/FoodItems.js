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
  const { loading, error } = useQuery(FOOD_ITEMS, {
    onCompleted: (data) => {
      if (data?.foodItems) setFoodItems(data.foodItems);
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const addNewItem = () => {
    setFoodItems([...foodItems, { id: nanoid(), editMode: true }]);
  };

  const updateItem = (oldItem, newItem) => {
    setFoodItems(
      foodItems.map((i) => {
        if (i.id === oldItem.id) {
          return newItem;
        }
        return i;
      })
    );
  };

  const cancelCreateItem = (item) => {
    setFoodItems(foodItems.filter((i) => i.id !== item.id));
  };

  return (
    <Card body>
      <h1 id="tabelLabel">Food Items</h1>
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
              <FoodItemForm
                key={item.id}
                item={item}
                onCreateCancel={cancelCreateItem}
                onUpdate={updateItem}
              />
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
      <Button
        color="primary"
        onClick={addNewItem}
        style={{ marginLeft: "1em" }}
      >
        + Add Item
      </Button>
    </Card>
  );
}

export default FoodItems;
