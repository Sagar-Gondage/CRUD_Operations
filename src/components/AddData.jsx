import { useState } from "react";
import { AddDataModal } from "./AddDataModal";

export const AddData = ({ postApi }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div>
        <button onClick={() => setShowModal(!showModal)}>Add Data</button>
      </div>

      {showModal && (
        <AddDataModal postApi={postApi} setShowModal={setShowModal} />
      )}
    </div>
  );
};
