import cl from './AboutFilm.module.css';
import loupeImg from '../../images/loupe.png'
import similarPoster from '../../images/similar.jpg'


function AboutFilm(props) {
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
                <div className={cl.mainOverlay}>
                    <div className="container">
                        <h1 className={cl.filmTitle}>The Queen's Gambit</h1>
                        <div className={cl.infoBox}>
                            <div className={`ratingBlock ${cl.ratingBlockMain}`}>IMDb 8.8</div>
                            <span className={cl.genre}>Drama</span>
                            <span className={cl.type}>TVSeries</span>                      
                            <span className={cl.year}>2020</span>
                        </div>
                        <button className={cl.btnTrailer}>Watch</button>
                        <p className={cl.awards}>Top Rated TV #148 | Won 2 Golden Globes. Another 12 wins & 19 nominations.</p>
                    </div>
                </div>
            </div>

            <div className={cl.plotBg}>
                <div className="container">
                    <p className={cl.plotHeading}>Watch The Queen's Gambit on Richbee Shows</p>
                    <p className={cl.plotText}>Nine year-old orphan Beth Harmon is quiet, sullen, and by all appearances unremarkable. That is, until she plays her first game of chess. Her senses grow sharper, her thinking clearer, and for the first time in her life she feels herself fully in control. By the age of sixteen, she's competing for the U.S. Open championship. But as Beth hones her skills on the professional circuit, the stakes get higher, her isolation grows more frightening, and the thought of escape becomes all the more tempting. Based on the book by Walter Tevis.</p>
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
