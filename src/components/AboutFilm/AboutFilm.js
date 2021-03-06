import cl from "./AboutFilm.module.css";
import loupeImg from "../../images/loupe.png";
// import poster from '../../images/imagePoster.jpg';

import { useSelector } from "react-redux";
import { selectSearchResults } from "../../store/searchResultsSlice";
import { Link } from "react-router-dom";
import SilimarFilms from "./SimilarFilms/SimilarFilms";
import { useState } from "react";
import Modal from "../Modal/Modal";

function AboutFilm(props) {
    const [modalActive, setModalActive] = useState(false);

    const searchResults = useSelector(selectSearchResults);

    let bgImgName = searchResults.searchResults?.backdrop_path;
    let bgImgURL = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${bgImgName}`;
    let title = searchResults.searchResults?.title;
    let imdbRating = searchResults.additionalInfo?.imdbRating;
    let type = searchResults.additionalInfo?.type;
    let genres = searchResults.searchResults?.genres;
    let genre = '';
    if (genres?.length) {
        genre = genres[0].name
        
    }
    let year = searchResults.additionalInfo?.year;
    let awards = searchResults.additionalInfo?.awards;
    let overview = searchResults.searchResults?.overview;
    let trailerKey = searchResults?.trailerKey;

    return (
        <>
            {Object.keys(searchResults.searchResults).length
                ? (
                <>
                    <div className={cl.headerBg}>
                        <div className="container">
                            <header className={cl.header}>
                                <div className={cl.brandContainer}>
                                    <Link to="/" className={cl.brandText}>
                                        Richbee Shows
                                    </Link>
                                </div>
                                <form action="" className={cl.searchForm}>
                                    <img src={loupeImg} alt="" className={cl.searchImg} />
                                    <input
                                        type="text"
                                        className={cl.searchInput}
                                        placeholder="Type here smth..."
                                    />
                                </form>
                            </header>
                        </div>
                    </div>
                    <main>
                        <div className={cl.mainBg}>
                            <img src={bgImgURL} alt="" className={cl.mainBgImg} />
                            <div className={cl.mainOverlay}>
                                <div className="container">
                                    <div className={cl.topContainer}>
                                        <h1 className={cl.filmTitle}>{title}</h1>
                                        <div className={cl.infoBox}>
                                            <div className={`ratingBlock ${cl.ratingBlockMain}`}>
                                                IMDb {imdbRating}
                                            </div>
                                            <span className={cl.genre}>{genre}</span>
                                            <span className={cl.type}>{type}</span>
                                            <span className={cl.year}>{year}</span>
                                        </div>
                                    </div>
                                    {trailerKey && (
                                        <button
                                            className={cl.btnTrailer}
                                            onClick={() => setModalActive(true)}
                                        >
                                            Watch
                                        </button>
                                    )}
                                    {awards !== "N/A" && (
                                        <p
                                            className={`${cl.awards} ${
                                                !trailerKey ? cl.awardsMt : ""
                                            }`}
                                        >
                                            {awards}
                                        </p>
                                    )}
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

                        <SilimarFilms />
                    </main>

                    <div className={cl.footerBg}>
                        <div className="container">
                            <footer className={cl.footer}>
                                <p className={cl.brandTextFooter}>Richbee Shows</p>
                            </footer>
                        </div>
                    </div>

                    <Modal active={modalActive} setActive={setModalActive}>
                        <div className={cl.modalWrapper}>
                            <iframe title='Trailer'
                                className={cl.trailerIframe}
                                src={
                                    modalActive ? `https://www.youtube.com/embed/${trailerKey}` : ""
                                }
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </Modal>
                </>
            ) : (
                <div className="preload-container">
                    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            )}
        </>
    );
}

export default AboutFilm;
