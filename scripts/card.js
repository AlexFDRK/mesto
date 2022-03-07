export class Card{
  constructor(data, cardTemplate, popupScructure, openPopupFunction) {
    this._name = data.name;
    this._image = data.link;
    this._cardTemplate = cardTemplate;
    this._popupView = popupScructure.popupView;
    this._popupCloseButton = popupScructure.popupCloseButton;
    this._popupImage = popupScructure.popupImage;
    this._strViewName = popupScructure.strViewName
    this._openPopupFunction = openPopupFunction;
  }

//public:
  generateCard() {
    this._element = this._cardTemplate.cloneNode(true);
    this._setEventListeners();

    this._element.querySelector('.element__name').textContent = this._name;
    const cardImage = this._element.querySelector('.element__picture'); 
    cardImage.src = this._image;
    cardImage.alt = this._name;

    return this._element;
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

    this._element.querySelector('.element__bin').addEventListener('click', function (event) {
      const elementItem = event.target.closest('.element');
      elementItem.remove();
    });
  }
}