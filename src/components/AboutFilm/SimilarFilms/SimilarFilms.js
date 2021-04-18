import cl from './SimilarFilms.module.css';
import SimilarItem from './SimilarItem/SimilarItem';
import {useSelector} from 'react-redux';
import {selectSimilarFilms} from '../../../store/searchResultsSlice';



function SilimarFilms(props) {
    
    const similarFilmsArr = useSelector(selectSimilarFilms);

  return (
    <>
       <div className={cl.similarBg}>
            <div className="container">
                <div className={cl.similar}>
                    <p className={cl.similarHeading}>You may also like</p>
                    <div className={cl.similarItems}>
                        {similarFilmsArr.map(film => <SimilarItem film = {film} key = {film.id} />)}
                       
                    </div>
                </div>
                
            </div>
        </div>
    </>
  );
  
}

export default SilimarFilms;
