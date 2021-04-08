import cl from './SearchResultsItem.module.css';
import poster from '../../../../images/searchPoster.jpg'


function SearchResultsItem() {
  return (
    <>
      <div className={cl.resultItem}>
        <div className={cl.posterWrapper}>
          <img src={poster} alt="Poster" className={cl.posterImg}/>
        </div>
        <div className={cl.infoTextContainer}>
          <div className={cl.topContainer}>
            <h5 className={cl.movieTitle} title = 'The Queens Gambit'>The Queen's Gambit</h5>
            <div className={cl.rating}>IMDb 8.8</div>
          </div>
          <div className={cl.mediumContainer}>
            <span className={cl.type}>TVSeries</span>
            <span className={cl.genre}>Drama</span>
            <span className={cl.year}>2020</span>
          </div>
          <div className={cl.awards}>Top Rated TV #148 | Won 2 Golden Globes. Another 12 wins & 19 nominations.</div>
        </div>
      </div>
    </>
  );
  
}

export default SearchResultsItem;
