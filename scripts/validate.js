const isValid = (formElement, inputElement, validationData) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationData);
  } else {
    hideInputError(formElement, inputElement, validationData);
  }
}; 

const showInputError = (formElement, inputElement, errorMessage, validationData) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(validationData.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationData.errorClass);
};

const hideInputError = (formElement, inputElement, validationData) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(validationData.inputErrorClass);
  errorElement.classList.remove(validationData.errorClass);
  errorElement.textContent = '';
}; 

const setEventListeners = (formElement, validationData) => {
  const inputList = Array.from(formElement.querySelectorAll(validationData.inputSelector));
  const buttonElement = formElement.querySelector(validationData.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, validationData);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, validationData);
      toggleButtonState(inputList, buttonElement, validationData);
    });
  });
}; 

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}; 

const toggleButtonState = (inputList, buttonElement, validationData) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(validationData.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(validationData.inactiveButtonClass);
  }
}; 

const enableValidation = (validationData) => {
  const formList = Array.from(document.querySelectorAll(validationData.formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, validationData);
  });
};