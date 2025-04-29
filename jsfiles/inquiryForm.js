(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "7WDvLgcRJ6PFV4dsO",

    });
})();


const inquiryForm = document.getElementById('inquiryForm')
const submitButton = inquiryForm.querySelector('button[type="submit"]');

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('inquiryForm').addEventListener('submit', function (event) {
        event.preventDefault();

        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        emailjs.sendForm('service_638tkkh', 'template_75qb1he', this)
            .then(() => {
                inquiryForm.querySelectorAll('input, textarea').forEach(el => {
                    el.value = ''
                })

                submitButton.disabled = false;
                submitButton.textContent = 'Submit';

                alert('Thank you for your inquiry:)\nYour message has been sent !');

            }, (error) => {
                alert('Something went wrong:/\nYour inquiry couldn\'t be sent..');
                console.log('FAILED...', error);

                submitButton.disabled = false;
                submitButton.textContent = 'Submit';
            });
    });
});
