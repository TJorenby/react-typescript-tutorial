import React from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  //Hover over the prop in the parent component to find the type.

  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const defaultValues = {
  name: "",
  age: "",
  note: "",
  img: "",
};

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = React.useState(defaultValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.img) {
      return;
    }

    const combinedValues = {
      name: input.name,
      age: parseInt(input.age),
      url: input.img,
      note: input.note,
    };
    setPeople([...people, combinedValues]);

    setInput(defaultValues);
  };
  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.img}
        onChange={handleChange}
        name="img"
      />
      <textarea
        placeholder="Note"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
        name="note"
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add To List
      </button>
    </div>
  );
};

export { AddToList };
