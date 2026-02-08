import { useState } from "react";
import { toast } from "react-toastify";
import { useSearchContext } from "../Context/SearchContext";

function SearchForm() {
  const [text, setText] = useState("");
  const { setSearchInput } = useSearchContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      toast.error("query is empty");
      return;
    }
    setSearchInput(text.trim());
    setText("");
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button className="btn" type="submit">
          search
        </button>
      </form>
    </section>
  );
}
export default SearchForm;
