import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAddContact } from 'redux/contacts/contacts-operations';
import instag from "assets/icons/instag.svg";
import tw from "assets/icons/tw.svg";
import fb from "assets/icons/fb.svg";
import pintrst from "assets/icons/pintrst.svg";
import elipse from "assets/img/elipse.png";

import {
  FormWrapper,
  Input,
  Textarea,
  Button,
  SocialIcons,
  SocialLink,
  StyledElipse,
  StyledLink,
} from "../../styles/styledComponents";

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
    <>
      <StyledElipse top="21px" left="714px">
        <img src={elipse} alt="pinkFace" />
      </StyledElipse>
    <FormWrapper>
       <form onSubmit={handleSubmit}>
          <div>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Your name*"
                required
              />
          </div>
          <div>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
                title="someone@example.com"
                required
              />
          </div>
          <div>
              <Textarea
                type="text"
                name="message"
                value={message}
                onChange={handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Type a text"
                required
              />
          </div>
          <Button type="submit">
               Add contact
          </Button>
    </form>
    </FormWrapper>
    <footer>
       <SocialIcons>
          <StyledLink href="https://www.linkedin.com/company/zenbit-tech/">
            <SocialLink img={instag}></SocialLink>
          </StyledLink>
          <StyledLink href="https://twitter.com/zen_bit">
            <SocialLink img={tw}></SocialLink>
          </StyledLink>
          <StyledLink href="https://www.facebook.com/zenBitTech/?locale2=ru_RU&paipv=0&eav=AfZUrGiYNHDantIHOjRvjg2Qf9WNOXq7vuYJdhC-r8KndImTIcRiEu69izZxhpMp6rs&_rdr">
            <SocialLink img={fb}> </SocialLink>
          </StyledLink>
          <StyledLink href="https://ru.pinterest.com/login/">
            <SocialLink img={pintrst}> </SocialLink>
          </StyledLink>
        </SocialIcons>
    </footer>
    </>
  );
};
