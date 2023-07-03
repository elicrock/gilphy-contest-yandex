import React, { useEffect } from 'react';

function ImagePopup({ card, onClose }) {
  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [card]);

  const handlePopupClick = (evt) => {
    if (evt.target.classList.contains('popup')) {
      onClose();
    }
  };
  return (
    <div className={`popup popup_type_image ${card ? 'popup_open' : ''}`} onClick={handlePopupClick}>
      <figure className='popup__image-container'>
        <img className='popup__image' src={card ? card.images?.original?.url : '#'} alt={card ? card.name : ''} />
      </figure>
    </div>
  );
}

export default ImagePopup;
