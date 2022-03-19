import Popup from './popup.js';

export default class PopupWithForm extends Popup{
    constructor(selector, submitFunction){
        super(selector);
        this._submitFunction = submitFunction;
    }

    setEventListeners(){
        super.setEventListeners();
        super.getSelector().addEventListener('submit', (event)=>{
            event.preventDefault();
            this._submitFunction(this._getInputValues());
            this.close();
        });
    }

    open(userInfo){
        if (typeof userInfo != "undefined"){
            this._inputList = super.getSelector().querySelectorAll('.form__field');
            this._inputList.forEach(input => {
                input.value = userInfo[input.name];
            });
        }
        super.open();
    }

    close(){
        super.getSelector().querySelector('.form').reset();
        super.close();
    }

    _getInputValues(){
        this._inputList = super.getSelector().querySelectorAll('.form__field');
        this._formValues = {};

        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });

        return this._formValues;
    }
}