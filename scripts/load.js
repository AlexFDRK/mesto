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

initialCards.forEach(function (element) {
    const cardElement = elementTemplate.cloneNode(true);
  
    cardElement.querySelector('.element__picture').src = element.link;
    cardElement.querySelector('.element__picture').alt = element.name;
    cardElement.querySelector('.element__name').textContent = element.name;
    cardElement.querySelector('.element__like').addEventListener('click', function (event) {
      event.target.classList.toggle('element__like_state_active');
   });

    sectionElements.append(cardElement);
  })