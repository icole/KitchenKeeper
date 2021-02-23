import React from "react";
import { useQuery, gql } from "@apollo/client";

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
  const { loading, error, data } = useQuery(FOOD_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1 id="tabelLabel">Food Items</h1>
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.foodItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                {item.amount} {item.unit}
              </td>
              <td>${item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FoodItems;
