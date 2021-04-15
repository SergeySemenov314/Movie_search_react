import cl from './AboutFilm.module.css';
import loupeImg from '../../images/loupe.png'
// import poster from '../../images/imagePoster.jpg';
import similarPoster from '../../images/similar.jpg'
import {useSelector} from 'react-redux';
import {selectSearchResults} from '../../store/searchResultsSlice';



function AboutFilm(props) {
     
    const searchResults = useSelector(selectSearchResults).searchResults;


  return (
    <>
        <div className={cl.headerBg}>
            <div className="container">
                <header className={cl.header}>
                    <div className={cl.brandContainer}><a href="/" className={cl.brandText}>Richbee Shows</a></div>
                    <form action="" className={cl.searchForm}>
                        <img src={loupeImg} alt="" className={cl.searchImg}/>
                        <input type="text" className={cl.searchInput} placeholder = 'Type here smth...'/>
                    </form>
                </header>
            </div>
        </div>
        <main>
            <div className={cl.mainBg}>
                <img src={searchResults.Poster} alt="" className={cl.mainBgImg}/>
                <div className={cl.mainOverlay}>
                    <div className="container">
                        <div className={cl.topContainer}>
                            <h1 className={cl.filmTitle}>{searchResults.Title}</h1>
                            <div className={cl.infoBox}>
                                <div className={`ratingBlock ${cl.ratingBlockMain}`}>IMDb {searchResults.imdbRating}</div>
                                <span className={cl.genre}>{searchResults.Genre}</span>
                                <span className={cl.type}>{searchResults.Type}</span>                      
                                <span className={cl.year}>{searchResults.Year}</span>
                            </div>
                        </div>
                       
                        <button className={cl.btnTrailer}>Watch</button>
                        <p className={cl.awards}>{searchResults.Awards}</p>
                    </div>
                </div>
            </div>

            <div className={cl.plotBg}>
                <div className="container">
                    <div className={cl.plot}>
                        <p className={cl.plotHeading}>Watch {searchResults.Title} on Richbee Shows</p>
                        <p className={cl.plotText}>{searchResults.Plot}</p>
                    </div>
                </div>
            </div>

            <div className={cl.similarBg}>
                <div className="container">
                    <div className={cl.similar}>
                        <p className={cl.similarHeading}>You may also like</p>
                        <div className={cl.similarItems}>
                            <a href="/" className={cl.similarItem}><img src={similarPoster} alt="" className={cl.similarItem__img}/>
                                <div className={cl.similarItem__layout}>
                                    <h5 className={cl.similarItem__title}>Peaky Blinders</h5>
                                    <span className={cl.similarItem__genre}>Crime, Drama</span>
                                    <span className={cl.similarItem__type}>TVSeries </span><span className={cl.similarItem__year}>2013</span>  
                                    <p className={cl.similarItem__plot}>A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.</p>
                                    <div className='ratingBlock' >IMDb 8.8</div>                                  
                                </div>
                            </a>
                            <a href="/" className={cl.similarItem}><img src={similarPoster} alt="" className={cl.similarItem__img}/>
                                <div className={cl.similarItem__layout}>
                                    <h5 className={cl.similarItem__title}>Peaky Blinders</h5>
                                    <span className={cl.similarItem__genre}>Crime, Drama</span>
                                    <span className={cl.similarItem__type}>TVSeries </span><span className={cl.similarItem__year}>2013</span>  
                                    <p className={cl.similarItem__plot}>A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.</p>
                                    <div className='ratingBlock' >IMDb 8.8</div>                                  
                                </div>
                            </a>
                            <a href="/" className={cl.similarItem}><img src={similarPoster} alt="" className={cl.similarItem__img}/>
                                <div className={cl.similarItem__layout}>
                                    <h5 className={cl.similarItem__title}>Peaky Blinders</h5>
                                    <span className={cl.similarItem__genre}>Crime, Drama</span>
                                    <span className={cl.similarItem__type}>TVSeries </span><span className={cl.similarItem__year}>2013</span>  
                                    <p className={cl.similarItem__plot}>A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.</p>
                                    <div className='ratingBlock' >IMDb 8.8</div>                                  
                                </div>
                            </a>
                            <a href="/" className={cl.similarItem}><img src={similarPoster} alt="" className={cl.similarItem__img}/>
                                <div className={cl.similarItem__layout}>
                                    <h5 className={cl.similarItem__title}>Peaky Blinders</h5>
                                    <span className={cl.similarItem__genre}>Crime, Drama</span>
                                    <span className={cl.similarItem__type}>TVSeries </span><span className={cl.similarItem__year}>2013</span>  
                                    <p className={cl.similarItem__plot}>A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.</p>
                                    <div className='ratingBlock' >IMDb 8.8</div>                                  
                                </div>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>

        <div className={cl.footerBg}>
            <div className="container">
                <footer className={cl.footer}>
                    <p className={cl.brandTextFooter}>Richbee Shows</p>
                </footer>
            </div>
        </div>
   
    </>
  );
  
}

export default AboutFilm;
