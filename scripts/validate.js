let validationValues = {};

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}; 

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(validationValues.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationValues.errorClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(validationValues.inputErrorClass);
  errorElement.classList.remove(validationValues.errorClass);
  errorElement.textContent = 'Accepted';
}; 

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(validationValues.inputSelector));
  const buttonElement = formElement.querySelector(validationValues.submitButtonSelector);

  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}; 

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}; 

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationValues.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(validationValues.inactiveButtonClass);
  }
}; 

const enableValidation = (validationData) => {
  validationValues = validationData;
  const formList = Array.from(document.querySelectorAll(validationValues.formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};