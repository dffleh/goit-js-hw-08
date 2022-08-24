import throttle from 'lodash.throttle';


const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
    form: document.querySelector('.feedback-form')
}


refs.form.addEventListener('input', throttle(onFormInput, 500));

refs.form.addEventListener('submit', onFormSubmit);

onPopulateTextarea();


function onFormInput(evt) {
    formData.email = refs.form.email.value;
    formData.message = refs.form.message.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(evt) {
    evt.preventDefault();

    const formDataToSend = new FormData(evt.currentTarget);
    formDataToSend.forEach((value, name) => {
        formData[name] = value;
    });

    evt.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);

    console.log(formData);
};



function onPopulateTextarea() {
    const saveMessage = localStorage.getItem(STORAGE_KEY);

    if (saveMessage) {
        const { email, message } = JSON.parse(saveMessage);

        refs.form.email.value = email;
        refs.form.message.value = message;
        formData.email = email;
        formData.message = message;
    }
}