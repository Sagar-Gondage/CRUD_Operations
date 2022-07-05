import { useEffect, useState } from "react";
import axios from "axios";
import { ShowData } from "./ShowData";
import { AddData } from "./AddData";

export const MockApi = () => {
  const [colors, setColor] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCars = async () => {
    setLoading(true);
    const data = await axios.get(
      "https://62a41ce647e6e400638c866a.mockapi.io/cars"
    );
    setColor(data.data);
    setLoading(false);
  };

  useEffect(() => {
    getCars();
  }, []);

  const postApi = async (postData) => {
    setLoading(true);
    let data = await axios.post(
      `https://62a41ce647e6e400638c866a.mockapi.io/cars`,
      {
        ...postData
      }
    );
    setColor([...colors, data.data]);
    setLoading(false);
  };

  const deleteApi = async (id) => {
    await axios.delete(
      `https://62a41ce647e6e400638c866a.mockapi.io/cars/${id}`
    );
    getCars();
  };

  const putApi = async (id, patchData) => {
    await axios.put(`https://62a41ce647e6e400638c866a.mockapi.io/cars/${id}`, {
      ...patchData
    });
    getCars();
  };

  const DisplayData = colors.map((color, index) => {
    return (
      <ShowData
        key={color.id}
        {...color}
        deleteApi={deleteApi}
        index={index}
        putApi={putApi}
      />
    );
  });

  return (
    <div className="container">
      <h1>CRUD (Create, Read, Update, Delete) OPERATIONS</h1>
      <AddData postApi={postApi} />
      {loading ? <h1>Loading</h1> : DisplayData}
    </div>
  );
};
