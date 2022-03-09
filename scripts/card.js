export class Card{
  constructor(data, templateStructure, popupScructure, openPopupFunction) {
    this._name = data.name;
    this._image = data.link;
    this._templateSelector = templateStructure.templateSelector;
    this._templateClassName = templateStructure.templateClassName;
    this._popupView = popupScructure.popupView;
    this._popupCloseButton = popupScructure.popupCloseButton;
    this._popupImage = popupScructure.popupImage;
    this._strViewName = popupScructure.strViewName
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

  _handleOpenPopup(){
    this._popupImage.src = this._image;
    this._strViewName.textContent = this._name;
    this._openPopupFunction(this._popupView);
  }

  _setEventListeners(){
    this._element.querySelector('.element__picture').addEventListener('click', () => {
      this._handleOpenPopup();
    });

    this._element.querySelector('.element__like').addEventListener('click', function (event) {
      event.target.classList.toggle('element__like_state_active');
    });

    this._element.querySelector('.element__bin').addEventListener('click', () => {
      this._element.remove();
    });
  }
}