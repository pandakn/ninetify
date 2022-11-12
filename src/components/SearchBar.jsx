// styles
import "../styles/searchBar.scss";

function SearchBar({ searchTracks, handleChange }) {
  return (
    <form onSubmit={searchTracks} className="search-filed">
      <input
        type="text"
        onChange={handleChange}
        placeholder="type artist..."
      />
    </form>
  );
}

export default SearchBar;
