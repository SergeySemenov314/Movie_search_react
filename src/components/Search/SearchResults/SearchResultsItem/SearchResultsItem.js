import cl from './SearchResultsItem.module.css';
// import poster from '../../../../images/searchPoster.jpg'


function SearchResultsItem(props) {

  const currentResult = props.currentResult;

  return (
    <>
      <div className={cl.resultItem}>
        <a className={cl.posterWrapper} href = '/'>
          <img src={currentResult.Poster} alt="Poster" className={cl.posterImg}/>
        </a>
        <div className={cl.infoTextContainer}>
          <div className={cl.topContainer}>
            <a className={cl.movieTitle} href = '/' title = {currentResult.Title} >{currentResult.Title}</a>
            <div className={cl.rating}>IMDb {currentResult.imdbRating}</div>
          </div>
          <div className={cl.mediumContainer}>
            <span className={cl.type}>{currentResult.Type}</span>
            <span className={cl.genre}>{currentResult.Genre}</span>
            <span className={cl.year}>{currentResult.Year}</span>
          </div>
          <div className={cl.awards}>
            {currentResult.Awards !== 'N/A' &&
            currentResult.Awards}
            </div>
        </div>
      </div>
    </>
  );
  
}

export default SearchResultsItem;
