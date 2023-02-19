import styled from "styled-components";
import ApercuArabicPro from "../assets/fonts/ApercuArabicPro-Regular.woff";


export const FormWrapper = styled.section`
  @font-face {
    font-family: "ApercuArabicPro";
    src: url(${ApercuArabicPro}) format("woff");
  }
  padding: 148px;
  @media (max-width: 1200px) {
    padding: 100px 100px 100px 100px;
    text-align: center;
  }
  @media (max-width: 760px) {
    padding: 80px;
  }
  @media (max-width: 500px) {
    padding: 80px 15px;
  }
  @media (max-width: 400px) {
    padding: 80px 5px;
  }
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  color: #3e3e3e;
  line-height: 52px;
`;

export const Input = styled.input`
  min-width: 557px;
  padding: 30px 46px;
  margin-top: 8px;
  font-size: 24px;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 10px;
  min-height: ${(props) => props.height};
  &::placeholder {
    color: #2d2d2d;
    font-family: ApercuArabicPro;
    font-size: 19px;
    font-weight: 500;
    letter-spacing: 0.4px;
  }
  @media (max-width: 760px) {
    min-width: 450px;
  }
  @media (max-width: 600px) {
    min-width: 370px;
    padding: 18px 20px;
  }
  @media (max-width: 400px) {
    min-width: 318px;
    padding: 10px 12px;
    font-size: 100%;
  }
`;
export const Textarea = styled(Input)``;

export const Button = styled.button`
  margin-top: 23px;
  color: #fff;
  border: none;
  font-family: ApercuArabicPro;
  font-size: 18px;
  font-weight: 400;
  padding: 23.5px 52px;
  background: #fad34f;
  border-radius: 500px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`;

export const SocialIcons = styled.ul`
  display: flex;
`;
export const StyledItem = styled.li`
  &:not(:last-child) {
    margin-right: 5px;
  }
`;
export const SocialLink = styled.button`
  cursor: pointer;
  margin: 13px;
  border: none;
  height: 18px;
  width: 18px;
  background: url(${(props) => props.img}) 100% 100% no-repeat;
`;
export const StyledElipse = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: 87px;
  height: 87px;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #fad34f;
  }
`;