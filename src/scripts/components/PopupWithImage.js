import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
    constructor(selector){
        super(selector);
        this._imgViewPicture = this._popup.querySelector('.view__picture');
        this._strViewName = this._popup.querySelector('.view__description');
    }

    open(image, name){
        this._imgViewPicture.src = image;
        this._imgViewPicture.alt = name;
        this._strViewName.textContent = name;
        
        super.open();
    }
}