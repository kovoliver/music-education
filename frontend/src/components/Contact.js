import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        // egyszerű email validáció regex-szel
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setStatus({ success: false, message: "All fields are required." });
            return;
        }
        if (!emailRegex.test(formData.email)) {
            setStatus({ success: false, message: "Please enter a valid email address." });
            return;
        }

        try {
            const response = await fetch("https://oliverkovacsmentor.eu/email.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result) {
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            }

            setStatus(result);
        } catch (error) {
            setStatus({ success: false, message: "Network error." });
        }
    };

    return (
        <div className="text-center mt-lg row">
            {/* bal oldal - social */}
            <div className="box-primary-lighter color-secondary p-sm col-md-6 rounded-top-left rounded-bottom-left not-rouded-mobile">
                <h2 className="color-secondary">Social Media</h2>
                <p>
                    <a className="color-secondary" target="_blank" rel="noreferrer" href="https://youtube.com/@ComposersCompassYT">
                        <FontAwesomeIcon icon="fa-brands fa-square-youtube" />
                        <span> Composer's Compass</span>
                    </a>
                </p>
                <p>
                    <a className="color-secondary" target="_blank" rel="noreferrer" href="https://oliverkovacs.eu">
                        <FontAwesomeIcon icon="fa-solid fa-globe" />
                        <span> Personal site</span>
                    </a>
                </p>
                <p>
                    <a className="color-secondary" href="mailto:composers.compass.yt@gmail.com">
                        <FontAwesomeIcon icon="fa-solid fa-envelope" />
                        <span> composers.compass.yt@gmail.com</span>
                    </a>
                </p>
            </div>

            {/* jobb oldal - form */}
            <div className="box-secondary color-white p-sm col-md-6 rounded-top-right rounded-bottom-right not-rouded-mobile">
                <h2 className="color-primary-lighter">Contact</h2>
                {status && (
                    <p className="color-error" style={{ fontWeight: "bold" }}>
                        {status.message}
                    </p>
                )}

                <h3 className="color-primary-lighter">Full Name</h3>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-sm wp-80 input-secondary"
                />

                <h3 className="color-primary-lighter">Email</h3>
                <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-sm wp-80 input-secondary"
                />

                <h3 className="color-primary-lighter">Subject</h3>
                <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="input-sm wp-80 input-secondary"
                />

                <h3 className="color-primary-lighter">Message</h3>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{ minHeight: "150px" }}
                    className="input-sm wp-80 input-secondary"
                />

                <button className="input-md btn-primary center-input" onClick={handleSubmit}>
                    Send
                </button>
            </div>
        </div>
    );
}

export default Contact;
