(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "7WDvLgcRJ6PFV4dsO",

    });
})();




document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('inquiryForm').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_638tkkh', 'template_75qb1he', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
});
