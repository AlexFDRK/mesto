import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
    constructor(selector, submitFunction){
        super(selector);
        this._submitFunction = submitFunction;
    }

    setEventListeners(){
        super.setEventListeners();
        this._popup.addEventListener('submit', (event)=>{
            event.preventDefault();
            this._submitFunction(this._getInputValues());
            this.close();
        });
    }

    setInputValues(userInfo){
        this._inputList = this._popup.querySelectorAll('.form__field');
        this._inputList.forEach(input => {
            input.value = userInfo[input.name];
        });
    }

    close(){
        this._popup.querySelector('.form').reset();
        super.close();
    }

    _getInputValues(){
        this._inputList = this._popup.querySelectorAll('.form__field');
        this._formValues = {};

        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });

        return this._formValues;
    }
}