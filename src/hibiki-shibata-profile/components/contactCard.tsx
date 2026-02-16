function ContactCard() {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        // handle form submission here
    };

    return (
        <div className="flex flex-col items-center py-20 bg-gray-900 text-white" id="contact-card">
            <h2 className="text-3xl font-bold mb-6">CONTACT</h2>
            <form
                onSubmit={handleSubmit}>
                <input
                    className="bg-gray-200 text-black rounded-lg w-xs lg:w-3xl p-1"
                    type="text"
                    name="name"
                    placeholder="*Name"
                    data-i18n="formName"
                    required />
                <br />
                <br />

                <input
                    className="bg-gray-200 text-black rounded-lg w-xs lg:w-3xl p-1"
                    type="email"
                    name="email"
                    placeholder="*Your Email Address"
                    data-i18n="formEmail"
                    required
                />
                <br />
                <br />

                <textarea
                    className="bg-gray-200 text-black rounded-lg w-sm lg:w-5xl p-2"
                    name="message"
                    rows={8}
                    placeholder="Write your inquiry here. You'll receive a response via email in 2~3 days."
                    required />
                <br />
                <br />

                <button type="submit" data-i18n="formSend">
                    Send
                </button>
            </form>

            <div className="flex flex-wrap justify-center gap-3 mt-15">
                <div>
                    Address: Tokyo, Japan
                </div>

                <div>
                    Tel:(+81)7089737939
                </div>

                <div>
                    Email: hibiki.shibata@wolt.com
                </div>

                <div>
                    <p>
                        <a
                            href="https://hibiki-shibata.github.io/ride.driver.frontend/home"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white" }} >
                            Amazones (React portfolio)
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
