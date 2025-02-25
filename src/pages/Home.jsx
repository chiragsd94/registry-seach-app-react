import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    navigate(`/details/${encodeURIComponent(title)}`);
  };

  return (
    <div>
      <div className="font-gugi m-2 text-center p-2">
        <h1>NPM Package Registry</h1>
        <p>JavaScript packages Searcher</p>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter package name"
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 hover:text-white hover:shadow-lg hover:shadow-blue-600 hover:rounded-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
