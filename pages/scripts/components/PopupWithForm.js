import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
    constructor(selector, submitFunction){
        super(selector);
        this._submitFunction = submitFunction;
        this._submitText =  this._popup.querySelector('.form__button').innerHTML;
    }

    setEventListeners(){
        super.setEventListeners();
        this._popup.addEventListener('submit', (event)=>{
            event.preventDefault();
            this._submitFunction(this._getInputValues());
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

    toggleButtonText(){
        if (this._popup.querySelector('.form__button').innerText === this._submitText){
            this._popup.querySelector('.form__button').innerText = 'Сохранение...';
        } else {
            this._popup.querySelector('.form__button').innerText = this._submitText;
        }
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