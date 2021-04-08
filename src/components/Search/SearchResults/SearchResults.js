import cl from './SearchResults.module.css';
import SearchResultsItem from './SearchResultsItem/SearchResultsItem';


function SearchResults() {
  return (
    <>
    <div className = {cl.searchResults}>
      <SearchResultsItem />
    </div>
      
    </>
  );
  
}

export default SearchResults;
