import cl from './Search.module.css';
import SearchResults from './SearchResults/SearchResults';


function Search() {
  return (
    <>
    <div className={cl.bg}>
        {/* <iframe className = {cl.videoBg} src="https://www.youtube.com/embed/gA0nQyDZR4A?controls=0&showinfo=0&rel=0&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>    */}
        <div className='container'>
            <div className={cl.search}>
                <h1 className={cl.heading}>Unlimited movies, TV shows, and more.</h1>
                <p className={cl.subHeading}>Watch anywhere. Cancel anytime.</p> 
                <form action="" className={cl.form}>
                    <input type="text" className={cl.input} placeholder = 'Type here smth...' />
                    <button className={cl.formButton}>Search</button>
                </form>              
            </div>
            <SearchResults />
           
        </div> 
    </div>
       
    </>
  );
  
}

export default Search;
