import { API } from '../components/Api.js';

export const popupOpened = 'popup_status_opened';

export const templateStructure = {
    templateSelector: '#element', 
    templateClassName: '.element'
  };
  
export const validationData = {
    inputSelector: '.form__field',
    buttonElement: '.form__button',
    inactiveButtonClass: 'form__button_status_inactive',
    inputErrorClass: 'form__field_type_error',
    errorClass: 'form__input-error_active'
};

export const sectionElements = document.querySelector('.elements');

export const btnEdit = document.querySelector('.profile__edit-button');
export const btnAdd = document.querySelector('.profile__add-button');

export const aimAvatarFrame = document.querySelector('.profile__frame');
export const aimName = document.querySelector('.profile__name');
export const aimDescription = document.querySelector('.profile__description');
export const aimAvatar = document.querySelector('.profile__avatar');

export const popupProfile = document.querySelector('.popup_type_profile');
export const frmProfile = popupProfile.querySelector('.form');

export const popupAddCard = document.querySelector('.popup_type_card-add');
export const frmAddCard = popupAddCard.querySelector('.form');

export const popupAvatarEdit = document.querySelector('.popup__type_avatar-edit');
export const frmAddAvatar = popupAvatarEdit.querySelector('.form');

const contentAndAuthorization = {
  'Accept': 'Application/json',
  'Content-Type': 'Application/json',
  'authorization': '1478eacc-254a-456a-9432-9f80e3ac7fe8'
};

export const userApi = new API(
  'https://nomoreparties.co/v1/cohort-38/users/me', 
  contentAndAuthorization
);

export const profileApi = new API(
  'https://mesto.nomoreparties.co/v1/cohort-38/users/me', 
  contentAndAuthorization
);

export const cardApi = new API(
  'https://mesto.nomoreparties.co/v1/cohort-38/cards', 
  contentAndAuthorization
);

export const avatarApi = new API(
  'https://mesto.nomoreparties.co/v1/cohort-38/users/me/avatar', 
  contentAndAuthorization
);