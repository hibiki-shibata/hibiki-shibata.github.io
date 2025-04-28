(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "7WDvLgcRJ6PFV4dsO",

    });
})();


const inquiryForm = document.getElementById('inquiryForm')

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('inquiryForm').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_638tkkh', 'template_75qb1he', this)
            .then(() => {
                inquiryForm.querySelectorAll('input', 'textarea').forEach(el => {
                    el.value = ''
                })

                alert('Thank you for contact:)\nYour inquiry has been sent !');

            }, (error) => {
                alert('Something went wrong:/\nYour inquiry couldn\'t be sent..');
                console.log('FAILED...', error);
            });
    });
});
