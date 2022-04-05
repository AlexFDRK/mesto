import Popup from './Popup.js';

export default class PopupWithAlert extends Popup{
    constructor(selector, submitFunction){
        super(selector);
        this._submitFunction = submitFunction;
    }

    open(obj){
        this._obj = obj;
        super.open();
    }

    close(){
        this._popup.querySelector('.form').reset();
        super.close();
    }

    setEventListeners(){
        super.setEventListeners();
        this._popup.addEventListener('submit', (event)=>{
            event.preventDefault();
            this._submitFunction(this._getInputValues());
            this.close();
        });
    }

    _getInputValues(){
        return this._obj;
    }
}