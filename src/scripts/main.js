import { initialCards } from './initialdata.js';
import { validationData, templateStructure, aimAvatarFrame,
        sectionElements, btnEdit, btnAdd, aimName, aimDescription, aimAvatar, profileApi,
        frmProfile, frmAddCard, userApi, cardApi, avatarApi, popupAvatarEdit, frmAddAvatar} from './utils/constants.js';
import Section from './components/Section.js';
import Card from './components/Card.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithAlert from './components/PopupWithAlert.js';
import Validator from './components/Validate.js';
import UserInfo from './components/UserInfo.js';

let cardsList;

const formProfileValidator = new Validator(validationData, frmProfile);
formProfileValidator.enableValidation();

const formAddCardValidator = new Validator(validationData, frmAddCard);
formAddCardValidator.enableValidation();

const formAddAvatarValidator = new Validator(validationData, frmAddAvatar);
formAddAvatarValidator.enableValidation();

{
  const popupAvatar = new PopupWithForm('.popup__type_avatar-edit', handleFormAvatarSubmit);
  popupAvatar.setEventListeners();

  aimAvatarFrame.addEventListener('click', function(){
    popupAvatar.setInputValues(userInfo.getUserInfo());
    formAddAvatarValidator.renewValidator();
    popupAvatar.open();
  });

  const popupProfile  = new PopupWithForm('.popup_type_profile', handleFormProfileSubmit);
  popupProfile.setEventListeners();

  const userInfo = new UserInfo(aimName, aimDescription, aimAvatar);

  btnEdit.addEventListener('click', function(){
    popupProfile.setInputValues(userInfo.getUserInfo());
    formProfileValidator.renewValidator();
    popupProfile.open();
  });

  userApi.get().then((data)=>{
    userInfo.setUserInfo(data);
  }).then(() => {
    cardApi.get().then((data)=>{
      data.forEach((dt)=>{
        initialCards.push(dt);
      });
      return initialCards;
    }).then((initialCards)=>{
      cardsList = new Section({
          data: initialCards,
          renderer: (cardItem)=>{
            const cardElement = createCard(cardItem);
            cardsList.setItem(cardElement);
          }
        },
      sectionElements); 
      cardsList.rendererItems();
    }).catch((err)=>{
      alert(err);
    });
  }).catch((err)=>{
    alert(err);
  });

  const popupAddCard  = new PopupWithForm('.popup_type_card-add', handleFormAddCardSubmit);
  popupAddCard.setEventListeners();

  btnAdd.addEventListener('click', function(){
    formAddCardValidator.renewValidator();
    popupAddCard.open();
  });

  const popupPictureCard = new PopupWithImage('.popup_type_picture');
  popupPictureCard.setEventListeners();

  const openPopupFunction = (image, name) => {
    popupPictureCard.open(image, name);
  }

  function handleFormProfileSubmit(data){
    profileApi.patch({
      name: data.strName,
      about: data.strDescription
    }).then((data)=>{
      popupProfile.toggleButtonText();
      userInfo.setUserInfo(data);
    }).then(()=>{
      popupProfile.toggleButtonText();
      popupProfile.close();
    }).catch((err)=>{
      alert(err);
    });
  }

  function createCard(data){
    const card = new Card(data, 
      templateStructure, openPopupFunction, openAlertFunction, userInfo.getUserId());

    return card.generateCard();
  }

  function handleFormAddCardSubmit(data){
    cardApi.post({
      name: data.strName,
      link: data.strDescription
    }).then((data)=>{
      popupAddCard.toggleButtonText();
      const cardElement = createCard(data);
      cardsList.prepend(cardElement);
      formAddCardValidator.disableSubmitButton();
    }).then(()=>{
      popupAddCard.toggleButtonText();
      popupAddCard.close();
    }).catch((err)=>{
      alert(err);
    });
  }

  const popupAlert = new PopupWithAlert('.popup_type_alert', handleDeleteCardSubmit);
  popupAlert.setEventListeners();

  const openAlertFunction = (obj) => {
    popupAlert.open(obj);
  }

  function handleDeleteCardSubmit(obj){
    cardApi.delete(obj.getCardId()).then(()=>{
      obj.deleteElement();
    }).catch((err)=>{
      alert(err);
    });
  }

  function handleFormAvatarSubmit(data){
    avatarApi.patch({
      avatar:  data.strAvatar
    }).then((data)=>{
      popupAvatar.toggleButtonText();
      userInfo.setAvatar(data.avatar);
    }).then(()=>{
      popupAvatar.toggleButtonText();
      popupAvatar.close();
    }).catch((err)=>{
      alert(err);
    });
  }  
}