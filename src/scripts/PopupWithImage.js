import Popup from './popup.js';

export default class PopupWithImage extends Popup{
    constructor(selector){
        super(selector);
    }

    open(image, name){
        super.open();
        this._imgViewPicture = this._popup.querySelector('.view__picture');
        this._strViewName = this._popup.querySelector('.view__description');

        this._imgViewPicture.src = image;
        this._imgViewPicture.alt = name;
        this._strViewName.textContent = name;
    }
}