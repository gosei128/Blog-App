import { useEffect, useState } from "react";
import useFetch from "../hook/useFetch";
import SearchSuggestion from "./searchSuggestion";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const { data, error, loading } = useFetch(
    "https://blog-app-inlb.onrender.com/api/blogs"
  );
  const [titles, setTitles] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const [filteredTitle, setFilter] = useState([]);
  const [showDropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParams(query);
    if (query.length >= 1) {
      const filtered =
        titles && titles.length
          ? titles.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilter(filtered);
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  const handleClick = (event) => {
    const selectedTitle = event.target.innerText;
    setSearchParams(selectedTitle);
    setDropdown(false);
    // Navigate to search results with the title as query parameter
    navigate(`/search?title=${encodeURIComponent(selectedTitle)}`);
  };

  useEffect(() => {
    if (data && data.length) {
      setTitles(data.map((blogsTitle) => blogsTitle.title));
    }
  }, [data]);
  console.log(titles, filteredTitle);

  return (
    <div>
      <div className="flex gap-2 items-center">
        <input
          className="relative p-2 border-b-2 focus:outline-none w-30 placeholder:text-xs"
          type="text"
          value={searchParams}
          onChange={handleChange}
          placeholder="Search blog"
        />
        <IoSearchSharp size={25} />
      </div>
      {showDropdown ? (
        <SearchSuggestion handleClick={handleClick} blog={filteredTitle} />
      ) : null}
    </div>
  );
};

export default SearchInput;
