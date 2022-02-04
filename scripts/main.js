const validationData = {
  formSelector: '.form',
  inputSelector: '.form__field',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_status_inactive',
  inputErrorClass: 'form__field_type_error',
  errorClass: 'form__input-error_active'
};

const elementTemplate = document.querySelector('#element').content;
const sectionElements = document.querySelector('.elements');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function addElement(name, link){
  const cardElement = elementTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.element__picture');

  cardImage.src = link;
  cardImage.alt = name;
  cardElement.querySelector('.element__name').textContent = name;
  cardElement.querySelector('.element__like').addEventListener('click', function (event) {
    event.target.classList.toggle('element__like_state_active');
  });
  cardElement.querySelector('.element__bin').addEventListener('click', function (event) {
    const elementItem = event.target.closest('.element');
    elementItem.remove();
  });
  cardImage.addEventListener('click', function (event) {
    activatePopupView(event);
  });
  return cardElement;
}

/*============================================================*/
const btnEdit = document.querySelector('.profile__edit-button');
const btnAdd = document.querySelector('.profile__add-button');

const aimName = document.querySelector('.profile__name');
const aimDescription = document.querySelector('.profile__description');

const active = 'element__like_state_active';
const disabled = 'element__like_state_disabled';
const content = document.querySelector('.content');

/*============================================================*/
const popupOpened = 'popup_status_opened';

const popups = document.querySelectorAll('.popup')

const popupProfile = document.querySelector('.profile-popup');
const profileName = popupProfile.querySelector('.form__field_text_name');
const profileDescription = popupProfile.querySelector('.form__field_text_description');
const btnProfileSave = popupProfile.querySelector('.form__button');

const popupAddCard = document.querySelector('.add-popup');
const strAddCardName = popupAddCard.querySelector('.form__field_text_name');
const strAddCardDescription = popupAddCard.querySelector('.form__field_text_description');
const btnCardCreate = popupAddCard.querySelector('.form__button');

const popupView = document.querySelector('.view-popup');
const imgViewPicture = popupView.querySelector('.view__picture');
const strViewName = popupView.querySelector('.view__description');

function closeByEscape(evt){
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_status_opened');
    closePopup(openedPopup);
  }
}

function closePopup(popup) {
  popup.classList.remove(popupOpened);
  document.removeEventListener('keydown', closeByEscape);
}

function openPopup(popup) {
  popup.classList.add(popupOpened);
  document.addEventListener('keydown', closeByEscape);
}

function handleFormProfileSubmit (event){
  event.preventDefault();
  if (profileName.value !== ''){
      aimName.textContent = profileName.value;
  } 
  if (profileDescription.value !==''){
      aimDescription.textContent = profileDescription.value;
  }
  closePopup(popupProfile);
}

function handleFormAddCardSubmit (event){
  event.preventDefault();
  sectionElements.prepend(addElement(strAddCardName.value, strAddCardDescription.value));
  strAddCardName.value = '';
  strAddCardDescription.value = '';
  btnCardCreate.classList.add(validationData.inactiveButtonClass);
  btnCardCreate.setAttribute('disabled', true);
  closePopup(popupAddCard);
}

function activatePopupView(event){
  openPopup(popupView);
  imgViewPicture.src = event.target.src;
  imgViewPicture.alt = event.target.alt;
  strViewName.textContent = event.target.alt;
}

//======================================================
{
  initialCards.forEach(function (element) {
    sectionElements.append(addElement(element.name, element.link));
  });

  btnEdit.addEventListener('click', function(){
    openPopup(popupProfile);
    profileName.value = aimName.textContent;
    profileDescription.value = aimDescription.textContent;
  });

  btnAdd.addEventListener('click', () => openPopup(popupAddCard));

  popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains(popupOpened)) {
          closePopup(popup);
        }
        if (evt.target.classList.contains('popup__close')) {
          closePopup(popup);
        }
    });

    if (popup.classList.contains('profile-popup')){
      popup.addEventListener('submit', handleFormProfileSubmit);
    } else if (popup.classList.contains('add-popup')){
      popup.addEventListener('submit', handleFormAddCardSubmit);
    }
  });

  enableValidation(validationData);
}