import cl from './SimilarItem.module.css';
import { Link } from 'react-router-dom';
import similarPoster from '../../../../images/similar.jpg'
import { useDispatch } from 'react-redux';
import {fetchSearchResults, fetchSimilarFilms, fetchTrailerKey} from '../../../../store/searchResultsSlice';


function SimilarItem(props) {
    const dispatch = useDispatch();

    const getYear = (dateStr) => {
        let year = dateStr.slice(0, 4);
        return year;
    }

    const cutTitle = (title) => {
        let currentTitle = title;
        let maxLength = 20;

        if (currentTitle.length > maxLength) {
            currentTitle = currentTitle.slice(0, maxLength) + "...";
        }

        return currentTitle;
    }

    let fimlObj = props.film;
    let poster = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${fimlObj.poster_path}`;
    let title = fimlObj.title;
    let shortTitle = cutTitle(fimlObj.title);
    let genreIds = fimlObj.genre_ids;
    let year = getYear(fimlObj.release_date);
    let plot = fimlObj.overview;
    let rating = Number(fimlObj.vote_average).toFixed(1);


    
    const clickHandler = () => {
        let filmTitle = fimlObj.title;
        let idTMDB = fimlObj.id;
        dispatch(fetchSearchResults(filmTitle));
        dispatch(fetchSimilarFilms(idTMDB));  
        dispatch(fetchTrailerKey(idTMDB));  
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 1000)
        
    }
    

    return (
        <>
            <Link to = '/about' className={cl.similarItem} onClick = {clickHandler} >
                <img src={poster} alt="Poster" className={cl.similarItem__img}  />
                <div className={cl.similarItem__layout}>
                    <h5 className={cl.similarItem__title} title = {title}>{shortTitle}</h5>
                    <span className={cl.similarItem__genre}>Crime, Drama</span>
                    <span className={cl.similarItem__type}>Movie </span><span className={cl.similarItem__year}>{year}</span>  
                    <p className={cl.similarItem__plot}>{plot}</p>
                    <div className='ratingBlock' >IMDb {rating}</div>                                  
                </div>
            </Link>
        </>
    );
  
}

export default SimilarItem;
