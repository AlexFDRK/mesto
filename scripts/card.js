export class Card{
  constructor(data, cardSelector, popupCloseButton) {
    this._name = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
    this._popupCloseButton = popupCloseButton;
  }

//public:
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__name').textContent = this._name;
    const cardImage = this._element.querySelector('.element__picture'); 
    cardImage.src = this._image;
    cardImage.alt = this._name;

    return this._element;
  }
  
//private:
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _handleOpenPopup(){
    popupImage.src = this._image;
    strViewName.textContent = this._name;
    popupView.classList.add('popup_status_opened');
  }

  _handleClosePopup(){
    popupImage.src = '';
    popupView.classList.remove('popup_status_opened');
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
    
    this._popupCloseButton.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup__close')) {
        this._handleClosePopup();
      }
    });
  }
}