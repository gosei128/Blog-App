const SearchSuggestion = ({ handleClick, blog }) => {
  return (
    <div className="h-20 w-fit rounded-lg  absolute bg-white border border-gray-400 shadow-xl">
      <ul>
        {blog && blog.length
          ? blog.map((title, i) => (
              <li
                className=" cursor-pointer rounded-lg text-sm hover:bg-gray-100 p-2"
                key={i}
                onClick={handleClick}
              >
                {title}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default SearchSuggestion;
