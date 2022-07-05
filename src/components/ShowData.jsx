export const ShowData = ({
  name,
  status,
  id,
  price,
  deleteApi,
  index,
  putApi
}) => {
  const patchData = (id, change) => {
    putApi(id, change);
  };
  return (
    <div className="eachRow">
      <h3>{index + 1}</h3>
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <h3>{price.split(".")}</h3>
      </div>
      <div>
        <h4>{status ? "Like" : "Not Like"}</h4>
      </div>
      <button onClick={() => patchData(id, { name: "Car1" })}>Put Name</button>
      <button onClick={() => patchData(id, { status: !status })}>
        Change Like
      </button>
      <button onClick={() => deleteApi(id)}>Delete</button>
    </div>
  );
};
