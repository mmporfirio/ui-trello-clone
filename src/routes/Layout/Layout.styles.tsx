import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const HeaderContainer = styled.div`
  min-height: 48px;
  max-height: 48px;
  overflow: hidden;
`;

const StyledNav = styled.nav`
  transition: background-color 300ms;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: hsla(211, 18%, 68%, 0.16);
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  max-height: 48px;
  padding: 8px;
`;

const LogoContainer = styled.div`
  width: 80px;
  height: 16px;
  margin: 7px 0;
  position: relative;
  opacity: 0.5;

  &::before,
  &::after {
    content: "";
    background-image: url(https://trello.com/assets/d947df93bc055849898e.gif);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &::after {
    background-image: url(https://trello.com/assets/87e1af770a49ce8e84e3.gif);
    opacity: 0;
  }

  &[data-loading="true"]::before {
    opacity: 0;
  }

  &[data-loading="true"]::after {
    opacity: 1;
  }
`;

const StyledLink = styled.a`
  padding: 0 8px;
  height: 32px;
  border-radius: 3px;
  display: block;
  position: relative;
  flex-shrink: 0;
  height: 30px;
  margin-top: 0;

  &:focus,
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  &:hover {
    div::after {
      opacity: 1;
    }
  }
`;

const MainContainer = styled.main`
  position: relative;
  overflow-y: auto;
  outline: none;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export {
  MainContainer,
  PageContainer,
  HeaderContainer,
  StyledNav,
  LogoContainer,
  StyledLink,
};
