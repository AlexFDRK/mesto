import { popupOpened } from '../utils/constants.js';

export default class Popup{
    constructor(selector){
        this._popup = document.querySelector(selector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
//public:
    open(){
        this._popup.classList.add(popupOpened);
        document.addEventListener('keydown', this._handleEscClose);
    }

    close(){
        this._popup.classList.remove(popupOpened);
        document.removeEventListener('keydown', this._handleEscClose);
    }

    setEventListeners(){
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains(popupOpened) || 
                    evt.target.classList.contains('popup__close')) {
                this.close();
            }
        });
    }
//private:
    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            this.close();
        }
    }
}