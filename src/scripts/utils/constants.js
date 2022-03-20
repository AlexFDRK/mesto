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

export const aimName = document.querySelector('.profile__name');
export const aimDescription = document.querySelector('.profile__description');

export const popupProfile = document.querySelector('.popup_type_profile');
export const frmProfile = popupProfile.querySelector('.form');

export const popupAddCard = document.querySelector('.popup_type_card-add');
export const frmAddCard = popupAddCard.querySelector('.form');