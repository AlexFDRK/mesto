export default class Card{
  constructor(data, templateStructure, openPopupFunction, openAlertFunction, userId, handleLike) {
    this._data = data;
    this._name = data.name;
    this._image = data.link;
    this._templateSelector = templateStructure.templateSelector;
    this._templateClassName = templateStructure.templateClassName;
    this._openPopupFunction = openPopupFunction;
    this._openAlertFunction = openAlertFunction;
    this._userId = userId;
    this._handleLike = handleLike;
  }

//public:
  generateCard() {
    this._element = this._getTemplate().cloneNode(true);
    this._cardImage = this._element.querySelector('.element__picture'); 
    this._elementLike = this._element.querySelector('.element__like');
    this._elementBin = this._element.querySelector('.element__bin');
    this._elementQuantity = this._element.querySelector('.element__quantity')
    this._setEventListeners();
    this._element.querySelector('.element__name').textContent = this._name;
    this._cardImage.src = this._image;
    this._cardImage.alt = this._name;
    this._setLikesQuantity(this._data.likes.length);
    this._activateBin();
    if (this._checkIsItMyLike()){
      this._elementLike.classList.add('element__like_state_active');
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
    this._elementQuantity.textContent = num;
  }

  _getTemplate(){
    const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector(this._templateClassName);

      return cardElement;
  }

  _setEventListeners(){
    this._cardImage.addEventListener('click', () => {
      this._openPopupFunction(this._image, this._name);
    });

    this._elementLike.addEventListener('click', ()=>{
      this._handleLike(this);
    });

    this._elementBin.addEventListener('click', () => {
      this._openAlertFunction(this);
    });
  }

  isLiked(){
    return this._elementLike.classList.contains('element__like_state_active');
  }

  toggleLike(quantity){
    this._setLikesQuantity(quantity);
    this._elementLike.classList.toggle('element__like_state_active');
  }


  _activateBin(){
    if (this._data.owner._id === this._userId) {
      this._elementBin.classList.add('element__bin_state_visible');
    }
  }
}