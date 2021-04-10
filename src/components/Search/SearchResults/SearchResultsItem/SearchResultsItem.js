import { Link } from 'react-router-dom';
import cl from './SearchResultsItem.module.css';
// import poster from '../../../../images/searchPoster.jpg'


function SearchResultsItem(props) {

  const currentResult = props.currentResult;

  return (
    <>
      <div className={cl.resultItem}>
        <Link className={cl.posterWrapper} to = '/about'>
          <img src={currentResult.Poster} alt="Poster" className={cl.posterImg}/>
        </Link>
        <div className={cl.infoTextContainer}>
          <div className={cl.topContainer}>
            <Link className={cl.movieTitle} to = '/about' title = {currentResult.Title} >{currentResult.Title}</Link>
            <div className='ratingBlock'>IMDb {currentResult.imdbRating}</div>
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
