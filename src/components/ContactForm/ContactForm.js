import { useState } from 'react';
import styles from '../ContactForm/ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { fetchAddContact } from 'redux/contacts/contacts-operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { value, name } = event.target;
  

    switch (name) {
      case 'name':
        setName(value);
        
        break;

      case 'email':
        setEmail(value);
        break;
        
        case 'message':
          setMessage(value);
          break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    console.log(name, email, message);
    event.preventDefault();
  
      dispatch(fetchAddContact({ name, email, message}));
    
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.form}>
        <label className="form__label">
          <p className={styles.form__text}>Name</p>
          <input
            type="text"
            name="name"
            value={name}
            className={styles.form__input}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className="form__label">
          <p className={styles.form__text}>Email</p>
          <input
            type="email"
            name="email"
            value={email}
            className={styles.form__input}
            onChange={handleChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <label className="form__label">
          <p className={styles.form__text}>Textarea</p>
          <input
            type="text"
            name="message"
            value={message}
            className={styles.form__input}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Type a text"
            required
          />
        </label>
      </div>
      <button type="submit" className={styles.form__btn}>
        Add contact
      </button>
    </form>
  );
};
