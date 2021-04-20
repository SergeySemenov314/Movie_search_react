import cl from './Modal.css';



function Modal({active, setActive, children}) {
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
