import { useState } from "react";

export const AddDataModal = ({ postApi, setShowModal }) => {
  const [addCar, setAddCar] = useState({
    name: "",
    price: ""
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setAddCar({
      ...addCar,
      [name]: value,
      status: true
    });
  };

  const addData = (e) => {
    e.preventDefault();
    postApi(addCar);
    setShowModal((prev) => !prev);
  };
  return (
    <form onSubmit={addData}>
      <input
        type="text"
        name="name"
        placeholder="Car Name"
        onChange={onHandleChange}
        autoComplete="off"
        required
      />
      <input
        placeholder="Price"
        name="price"
        type="text"
        onChange={onHandleChange}
        autoComplete="off"
        required
      />
      <input
        type="submit"
        style={{ border: "2px solid teal", padding: "1%", margin: "0 5px" }}
      />
    </form>
  );
};
