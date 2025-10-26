document.addEventListener("DOMContentLoaded", function () {

    const nameInput = document.querySelector('.nameFemale');
    const phoneInput = document.querySelector('.numberPhone');
    const problemInput = document.querySelector('.problemed');
    const submitButton = document.querySelector('.inputs button');

    const inputs = [nameInput, phoneInput, problemInput];

    submitButton.addEventListener('click', function () {

        let isValid = true;

        inputs.forEach(function (input) {
            input.style.borderColor = '#DCDCDC';
        });


        if (nameInput.value.trim() === '') {
            nameInput.style.borderColor = 'red';
            isValid = false;
        }

        if (phoneInput.value.trim() === '') {
            phoneInput.style.borderColor = 'red';
            isValid = false;
        }

        if (problemInput.value.trim() === '') {
            problemInput.style.borderColor = 'red';
            isValid = false;
        }


        if (isValid) {
            alert('Дякую за реєстрацію!');

            inputs.forEach(function (input) {
                input.value = '';
            });
        }
    });
});
