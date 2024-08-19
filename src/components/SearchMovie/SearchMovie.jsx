import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SearchMovie = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim === "") {
      toast("Enter text to search for movies", {
        icon: "❌",
        style: {
          borderRadius: "5px",
          background: "white",
          color: "#000",
        },
      });
    }
    onSubmit(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="search"
        type="
        text"
        value={value}
        onChange={handleChange}
        placeholder="enter movie"
      />
      <button type="submit">Submit</button>
      <Toaster position="top-right" reverseOrder={false} />
    </form>
  );
};

export default SearchMovie;
