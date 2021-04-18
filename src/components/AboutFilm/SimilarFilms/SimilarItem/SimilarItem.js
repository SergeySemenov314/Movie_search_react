import cl from './SimilarItem.module.css';
import { Link } from 'react-router-dom';
import similarPoster from '../../../../images/similar.jpg'


function SimilarItem(props) {

    const getYear = (dateStr) => {
        let year = dateStr.slice(0, 4);
        return year;
    }

    let fimlObj = props.film;
    let poster = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${fimlObj.poster_path}`;
    let title = fimlObj.title;
    let genreIds = fimlObj.genre_ids;
    let year = getYear(fimlObj.release_date);
    let plot = fimlObj.overview;
    let rating = fimlObj.vote_average;
    

    return (
        <>
            <Link to="/" className={cl.similarItem}><img src={poster} alt="Poster" className={cl.similarItem__img}/>
                <div className={cl.similarItem__layout}>
                    <h5 className={cl.similarItem__title}>{title}</h5>
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
