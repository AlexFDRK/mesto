export default class Card{
  constructor(name, link, templateStructure, openPopupFunction) {
    this._name = name;
    this._image = link;
    this._templateSelector = templateStructure.templateSelector;
    this._templateClassName = templateStructure.templateClassName;
    this._openPopupFunction = openPopupFunction;
  }

//public:
  generateCard() {
    this._element = this._getTemplate().cloneNode(true);
    this._setEventListeners();

    this._element.querySelector('.element__name').textContent = this._name;
    const cardImage = this._element.querySelector('.element__picture'); 
    cardImage.src = this._image;
    cardImage.alt = this._name;

    return this._element;
  }

//private
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

    this._element.querySelector('.element__like').addEventListener('click', function (event) {
      event.target.classList.toggle('element__like_state_active');
    });

    this._element.querySelector('.element__bin').addEventListener('click', () => {
      this._element.remove();
    });
  }
}