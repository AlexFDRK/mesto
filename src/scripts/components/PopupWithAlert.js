import Popup from './Popup.js';

export default class PopupWithAlert extends Popup{
    constructor(selector, submitFunction){
        super(selector);
        this._submitFunction = submitFunction;
        this._submitButton = this._popup.querySelector('.form__button');
        this._submitText =  this._submitButton.innerHTML;
    }

    open(obj){
        this._obj = obj;
        super.open();
    }

    setEventListeners(){
        super.setEventListeners();
        this._popup.addEventListener('submit', (event)=>{
            event.preventDefault();
            this._submitFunction(this._getInputValues());
        });
    }

    _getInputValues(){
        return this._obj;
    }

    toggleButtonText(){
        if (this._submitButton.innerText === this._submitText){
            this._submitButton.innerText = 'Сохранение...';
        } else {
            this._submitButton.innerText = this._submitText;
        }
    }
}