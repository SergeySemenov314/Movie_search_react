import { Link } from 'react-router-dom';
import cl from './SearchResultsItem.module.css';
// import poster from '../../../../images/searchPoster.jpg'


function SearchResultsItem(props) {

  const currentResult = props.currentResult;

  let posterImgName = currentResult.searchResults.poster_path;
  let posterURL = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${posterImgName}`;
  let title = currentResult.searchResults.title;
  let imdbRating = currentResult.additionalInfo.imdbRating;
  let type = currentResult.additionalInfo.type;
  let genre = currentResult.searchResults.genres[0].name;
  let year = currentResult.additionalInfo.year;
  let awards = currentResult.additionalInfo.awards;


  return (
    <>
      <div className={cl.resultItem}>
        <Link className={cl.posterWrapper} to = '/about'>
          <img src={posterURL} alt="Poster" className={cl.posterImg}/>
        </Link>
        <div className={cl.infoTextContainer}>
          <div className={cl.topContainer}>
            <Link className={cl.movieTitle} to = '/about' title = {title} >{title}</Link>
            <div className='ratingBlock'>IMDb {imdbRating}</div>
          </div>
          <div className={cl.mediumContainer}>
            <span className={cl.type}>{type}</span>
            <span className={cl.genre}>{genre}</span>
            <span className={cl.year}>{year}</span>
          </div>
          <div className={cl.awards}>
            {awards !== 'N/A' &&
            awards}
            </div>
        </div>
      </div>
    </>
  );
  
}

export default SearchResultsItem;
