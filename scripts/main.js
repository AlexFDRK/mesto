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

initialCards.forEach(function (element) {
  sectionElements.append(addElement(element.name, element.link));
});

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

const popupProfile = document.querySelector('.profile-popup');
const btnProfileClose = popupProfile.querySelector('.popup__close');
const profileOverlay = popupProfile.querySelector('.popup__overlay');
const profileName = popupProfile.querySelector('.form__field_text_name');
const profileDescription = popupProfile.querySelector('.form__field_text_description');
const btnProfileSave = popupProfile.querySelector('.form__button');

const popupAddCard = document.querySelector('.add-popup');
const btnAddCardClose = popupAddCard.querySelector('.popup__close');
const addCardOverlay = popupAddCard.querySelector('.popup__overlay');
const strAddCardName = popupAddCard.querySelector('.form__field_text_name');
const strAddCardDescription = popupAddCard.querySelector('.form__field_text_description');
const btnCardCreate = popupAddCard.querySelector('.form__button');

const popupView = document.querySelector('.view-popup');
const btnViewClose = popupView.querySelector('.popup__close');
const imgViewPicture = popupView.querySelector('.view__picture');
const strViewName = popupView.querySelector('.view__description');

function openPopup(popup) {
  popup.classList.add(popupOpened);
}

function closePopup(popup) {
  popup.classList.remove(popupOpened);
}

btnEdit.addEventListener('click', function(){
  openPopup(popupProfile);
  profileName.value = aimName.textContent;
  profileDescription.value = aimDescription.textContent;
});

btnProfileClose.addEventListener('click', function(){
  closePopup(popupProfile);
});

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

profileOverlay.addEventListener('submit', handleFormProfileSubmit);

btnAdd.addEventListener('click', function(){
  openPopup(popupAddCard);
});

btnAddCardClose.addEventListener('click', function(){
  closePopup(popupAddCard);
});

function handleFormAddCardSubmit (event){
  event.preventDefault();
  const theFirstChild = sectionElements.firstChild;
  sectionElements.prepend(addElement(strAddCardName.value, strAddCardDescription.value));
  strAddCardName.value = '';
  strAddCardDescription.value = '';
  closePopup(popupAddCard);
}

addCardOverlay.addEventListener('submit', handleFormAddCardSubmit);

function activatePopupView(event){
  openPopup(popupView);
  imgViewPicture.src = event.target.src;
  imgViewPicture.alt = event.target.alt;
  strViewName.textContent = event.target.alt;
}

btnViewClose.addEventListener('click', function(){
  closePopup(popupView);
});
