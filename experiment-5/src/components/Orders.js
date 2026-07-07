import React, { useState } from "react";

function Orders() {
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);

  const price1 = count * 90000;
  const price2 = count1 * 80000;
  const price3 = count2 * 65000;

  const orderDate = new Date();
  const deliveryDate = new Date();
  deliveryDate.setDate(orderDate.getDate() + 3);

  return (
    <div style={{
      backgroundColor: "skyblue",
      minHeight: "50vh",
      width: "90%",
      padding: "20px"
    }}>
      <h2>Order Details</h2>
      <div style={{ display: "flex", gap: "100px" }}>
        <fieldset>
          <h4><b>MAC Book</b></h4>
          <p>
            Apple MGN63HNA MAB BOOK AIR<br />
            Price: INR Rs.90000<br />
            <label>Quantity: {count}</label><br />
            <button onClick={() => setCount(count + 1)}>+</button><br />
            price1 = {price1}
          </p>
        </fieldset>

        <fieldset>
          <h3>Dell core i7</h3>
          <p>
            Description:<br />
            11th Generation Intel® Core™ i7-11390H Processor<br />
            Windows 11 Home<br />
            Price: 80000 INR<br />
            <label>Quantity: {count1}</label><br />
            <button onClick={() => setCount1(count1 + 1)}>+</button><br />
            price2 = {price2}
          </p>
        </fieldset>

        <fieldset>
          <h3>HP</h3>
          <p>
            Description:<br />
            11th Generation Intel® Core™ i7<br />
            Price: NR Rs.65000<br />
            <label>Quantity: {count2}</label><br />
            <button onClick={() => setCount2(count2 + 1)}>+</button><br />
            price3 = {price3}
          </p>
        </fieldset>
      </div>
      <p>Total: {price1 + price2 + price3}</p>
      <p>Order Date: {orderDate.toDateString()}</p>
      <p>Expected Delivery Date: {deliveryDate.toDateString()}</p>
    </div>
  );
}

export default Orders;
