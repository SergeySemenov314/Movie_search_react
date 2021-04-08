import cl from './SearchResults.module.css';
import SearchResultsItem from './SearchResultsItem/SearchResultsItem';


function SearchResults(props) {
  return (
    <>
    <div className = {cl.searchResults}>
      <SearchResultsItem currentResult = {props.currentResult}/>
    </div>
      
    </>
  );
  
}

export default SearchResults;
