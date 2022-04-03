import { cardApi } from '../utils/constants.js';

export default class Card{
  constructor(data, templateStructure, openPopupFunction, openAlertFunction, userId) {
    this._data = data;
    this._name = data.name;
    this._image = data.link;
    this._templateSelector = templateStructure.templateSelector;
    this._templateClassName = templateStructure.templateClassName;
    this._openPopupFunction = openPopupFunction;
    this._openAlertFunction = openAlertFunction;
    this._userId = userId;
  }

//public:
  generateCard() {
    this._element = this._getTemplate().cloneNode(true);
    this._setEventListeners();

    this._element.querySelector('.element__name').textContent = this._name;
    const cardImage = this._element.querySelector('.element__picture'); 
    cardImage.src = this._image;
    cardImage.alt = this._name;
    this._setLikesQuantity(this._data.likes.length);
    this._activateBin();
    if (this._checkIsItMyLike()){
      this._element.querySelector('.element__like').classList.add('element__like_state_active');
    }
    return this._element;
  }

  getCardId(){
    return this._data._id;
  }

  deleteElement(){
    this._element.remove();
  }

//private
  _checkIsItMyLike(){
    let answer = false;
    this._data.likes.forEach(element => {
      if(element._id === this._userId){
        answer =  true;
      }
    });
    return answer;
  }

  _setLikesQuantity(num){
    this._element.querySelector('.element__quantity').textContent = num;
  }

  _getTemplate(){
    const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector(this._templateClassName);

      return cardElement;
  }

  _setEventListeners(){
    this._element.querySelector('.element__picture').addEventListener('click', () => {
      this._openPopupFunction(this._image, this._name);
    });

    var lambda = function(obj){
      return function (event){
        if(event.target.classList.contains('element__like_state_active')){
          cardApi.dislike(obj.getCardId()).then((data)=>{
            obj._setLikesQuantity(data.likes.length)
          }).catch((err)=>{
            alert(err);
          });
        } else {
          cardApi.like(obj.getCardId()).then((data)=>{
            obj._setLikesQuantity(data.likes.length)
          }).catch((err)=>{
            alert(err);
          });
        }
        event.target.classList.toggle('element__like_state_active');
      }
    }

    this._element.querySelector('.element__like').addEventListener('click', lambda(this));

    this._element.querySelector('.element__bin').addEventListener('click', () => {
      this._openAlertFunction(this);
    });
  }

  _toggleLike(){
    this._element.querySelector('.element__like').classList.add('element__like_state_active');
  }

  _activateBin(){
    if (this._data.owner._id === this._userId) {
      this._element.querySelector('.element__bin').classList.add('element__bin_state_visible');
    }
  }
}