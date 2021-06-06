import cl from './Modal.css';
import {selectSearchResults} from '../../store/searchResultsSlice';
import {useSelector} from 'react-redux';



function Modal({active, setActive, children}) {

    const searchResults = useSelector(selectSearchResults);

    // let trailerKey = searchResults.additionalInfo.trailerKey;

  return (
    <>
    <div className={active ? 'modal modalActive' : 'modal'} onClick = {() => setActive(false)}>
        <div className = {active ? 'modal__content modal__contentActive' : 'modal__content'} onClick = {(e) => e.stopPropagation()}>
            {children}
            <button className="modal__close" onClick = {() => setActive(false)}></button>
        </div> 
    </div> 

      
    </>
  );
  
}

export default Modal;
