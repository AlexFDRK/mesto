import popupOpened from './initialdata.js';

export default class Popup{
    constructor(selector){
        this._popup = document.querySelector(selector);
    }
//public:
    open(){
        this._popup.classList.add(popupOpened);
        document.addEventListener('keydown', {handleEvent: this._handleEscClose, obj: this});
    }

    close(){
        this._popup.classList.remove(popupOpened);
        document.removeEventListener('keydown', this._handleEscClose.bind(this));
    }

    getSelector(){
        return this._popup;
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
            this.obj.close();
        }
    }
}