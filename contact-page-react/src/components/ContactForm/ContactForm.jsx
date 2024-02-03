import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState("malika");
    const [email, setEmail] = useState("mtmalika@gmail.com");
    const [text, setText] = useState("qwertyuiosdfghjk");

    const onSubmit = (event) => {
        event.preventDefault();
        
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    };

  return (
    <div>
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button text="via support chat" icon={<MdMessage fontSize="18px" />} />
                    <Button text="via call" icon={<FaPhoneAlt fontSize="18px" />} />
                </div>
                <Button isOutline={true} text="via mail form" icon={<HiMail fontSize="18px" />} />
                <form onSubmit={onSubmit}>
                    <div className={styles.form_control}>
                        <label htmlFor="name">name</label>
                        <input type="text" name="name" />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email">email</label>
                        <input type="email" name="email" />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="text">text</label>
                        <textarea name="text" rows="8" />
                    </div>
                    <div style={{
                        display: "flex",
                    }}>
                    <Button text="submit" />
                </div>
                <div>
                    {name + " " + email + " " + text}
                </div>
                </form>
            </div>
            <div className={styles.contact_image}>
                <img src="./images/contact.png" alt="contact-image" />
            </div>
        </section>
    </div>
  )
}

export default ContactForm;
