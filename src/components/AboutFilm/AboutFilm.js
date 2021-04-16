import cl from './AboutFilm.module.css';
import loupeImg from '../../images/loupe.png'
// import poster from '../../images/imagePoster.jpg';
import similarPoster from '../../images/similar.jpg'
import {useSelector} from 'react-redux';
import {selectSearchResults} from '../../store/searchResultsSlice';
import { Link } from 'react-router-dom';




function AboutFilm(props) {
     
    const searchResults = useSelector(selectSearchResults);

    let bgImgName = searchResults.searchResults.backdrop_path;
    let bgImgURL = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${bgImgName}`;
    let title = searchResults.searchResults.title;
    let imdbRating = searchResults.additionalInfo.imdbRating;
    let type = searchResults.additionalInfo.type;
    let genre = searchResults.searchResults.genres[0].name;
    let year = searchResults.additionalInfo.year;
    let awards = searchResults.additionalInfo.awards;
    let overview = searchResults.searchResults.overview;


  return (
    <>
        <div className={cl.headerBg}>
            <div className="container">
                <header className={cl.header}>
                    <div className={cl.brandContainer}><Link to="/" className={cl.brandText}>Richbee Shows</Link></div>
                    <form action="" className={cl.searchForm}>
                        <img src={loupeImg} alt="" className={cl.searchImg}/>
                        <input type="text" className={cl.searchInput} placeholder = 'Type here smth...'/>
                    </form>
                </header>
            </div>
        </div>
        <main>
            <div className={cl.mainBg}>
                <img src={bgImgURL} alt="" className={cl.mainBgImg}/>
                <div className={cl.mainOverlay}>
                    <div className="container">
                        <div className={cl.topContainer}>
                            <h1 className={cl.filmTitle}>{title}</h1>
                            <div className={cl.infoBox}>
                                <div className={`ratingBlock ${cl.ratingBlockMain}`}>IMDb {imdbRating}</div>
                                <span className={cl.genre}>{genre}</span>
                                <span className={cl.type}>{type}</span>                      
                                <span className={cl.year}>{year}</span>
                            </div>
                        </div>
                       
                        <button className={cl.btnTrailer}>Watch</button>
                        <p className={cl.awards}>{awards}</p>
                    </div>
                </div>
            </div>

            <div className={cl.plotBg}>
                <div className="container">
                    <div className={cl.plot}>
                        <p className={cl.plotHeading}>Watch {title} on Richbee Shows</p>
                        <p className={cl.plotText}>{overview}</p>
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
