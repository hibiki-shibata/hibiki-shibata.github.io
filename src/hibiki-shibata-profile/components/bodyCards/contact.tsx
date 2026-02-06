function ContactCard() {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        // handle form submission here
    };

    return (
        <div className="contact-card" id="contact-card">
            <h2 className="contact-card__title">CONTACT</h2>

            <form
                className="contact-card__inquiry-form"
                id="contact-card__inquiry-form"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="*Name"
                    data-i18n="formName"
                    required
                />
                <br />
                <br />

                <input
                    type="email"
                    name="email"
                    placeholder="*Your Email Address"
                    data-i18n="formEmail"
                    required
                />
                <br />
                <br />

                <textarea
                    name="message"
                    // rows="8"                    
                    placeholder="Write your inquiry here. You'll receive a response via email in 2~3 days."
                    data-i18n="formTextArea"
                    required
                />
                <br />
                <br />

                <button type="submit" data-i18n="formSend">
                    Send
                </button>
            </form>

            <div className="contact-card__contact-info">
                <div>
                    <p className="contact-card__contact-info__address" data-i18n="contactAddress">
                        Address:
                    </p>
                    <p>Tokyo, Japan</p>
                </div>

                <div>
                    <p className="contact-card__contact-info__phone-number" data-i18n="contactPhonenumber">
                        Tel:
                    </p>
                    <p>(+81)7089737939</p>
                </div>

                <div>
                    <p className="contact-card__contact-info__email">Email:</p>
                    <p>hibiki.shibata@wolt.com</p>
                </div>

                <div>
                    <p className="contact-card__contact-info__email">
                        <a
                            href="https://hibiki-shibata.github.io/ride.driver.frontend/home"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white" }}
                        >
                            Amazones (React portfolio)
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
