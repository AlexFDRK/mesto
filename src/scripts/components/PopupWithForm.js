import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
    constructor(selector, submitFunction){
        super(selector);
        this._submitFunction = submitFunction;
        this._form = this._popup.querySelector('.form');
        this._inputList = this._popup.querySelectorAll('.form__field')
        this._submitButton =  this._popup.querySelector('.form__button');
        this._submitText =  this._submitButton.innerHTML;
    }

    setEventListeners(){
        super.setEventListeners();
        this._popup.addEventListener('submit', (event)=>{
            event.preventDefault();
            this._submitFunction(this._getInputValues());
        });
    }

    setInputValues(userInfo){
        this._inputList.forEach(input => {
            input.value = userInfo[input.name];
        });
    }

    close(){
        this._form.reset();
        super.close();
    }

    toggleButtonText(){
        if (this._submitButton.innerText === this._submitText){
            this._submitButton.innerText = 'Сохранение...';
        } else {
            this._submitButton.innerText = this._submitText;
        }
    }

    _getInputValues(){
        this._formValues = {};

        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });

        return this._formValues;
    }
}