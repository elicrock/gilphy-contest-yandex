import React from 'react';
import { usePopupClose } from "../hooks/usePopupClose";

function ImagePopup({ card, onClose }) {
  const cardUrl = card?.images?.original?.url;

  usePopupClose(cardUrl, onClose);

  return (
    <div className={`popup popup_type_image ${card ? 'popup_open' : ''}`}>
      <div className="popup__image-container">
        <button className="popup__close-button" type="button" onClick={onClose}></button>
        <img src={card ? cardUrl : '#'} alt={card ? card.title : ''} className="popup__image" />
        <h2 className="popup__image-title">{card ? card.title : ''}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
