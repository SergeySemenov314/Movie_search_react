import { Link } from 'react-router-dom';
import cl from './SearchResultsItem.module.css';
import poster from '../../../../images/imagePoster.jpg'
import {fetchSimilarFilms, fetchTrailerKey} from '../../../../store/searchResultsSlice';
import { useDispatch } from 'react-redux';


function SearchResultsItem(props) {
  const dispatch = useDispatch();

  const currentResult = props.currentResult;

  let posterImgName = currentResult.searchResults.poster_path;
  let posterURL = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${posterImgName}`;
  let title = currentResult.searchResults.title;
  let imdbRating = currentResult.additionalInfo.imdbRating;
  let type = currentResult.additionalInfo.type;
  let genre = currentResult.searchResults.genres[0].name;
  let year = currentResult.additionalInfo.year;
  let awards = currentResult.additionalInfo.awards;

  const clickHandler = () => {
  
    let idTMDB = currentResult.idTMDB;
    dispatch(fetchSimilarFilms(idTMDB));  
    dispatch(fetchTrailerKey(idTMDB));  
  }


  return (
    <>
      <div className={cl.resultItem}>
        <Link className={cl.posterWrapper} to = '/about' onClick = {clickHandler}>
          <img src={posterURL} alt="Poster" className={cl.posterImg}/>
        </Link>
        <div className={cl.infoTextContainer}>
          <div className={cl.topContainer}>
            <Link className={cl.movieTitle} to = '/about' title = {title} >{title}</Link>
            <div className={cl.ratingBlockSearch + ' ratingBlock'}>IMDb {imdbRating}</div>
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

    {/* <div className={cl.resultItem}>
        <Link className={cl.posterWrapper} to = '/about' >
          <img src={poster} alt="Poster" className={cl.posterImg}/>
        </Link>
        <div className={cl.infoTextContainer}>
          <div className={cl.topContainer}>
            <Link className={cl.movieTitle} to = '/about' title = 'The Queens Gambit' >The Queen's Gambit</Link>
            <div className='ratingBlock'>IMDb 8.8</div>
          </div>
          <div className={cl.mediumContainer}>
            <span className={cl.type}>TVSeries</span>
            <span className={cl.genre}>Drama</span>
            <span className={cl.year}>2020</span>
          </div>
          <div className={cl.awards}>
          Top Rated TV #148 | Won 2 Golden Globes. Another 12 wins & 19 nominations.
            </div>
        </div>
      </div> */}
    </>
  );
  
}

export default SearchResultsItem;
