import { Outlet } from "react-router-dom";
import {
  HeaderContainer,
  LogoContainer,
  MainContainer,
  PageContainer,
  StyledLink,
  StyledNav,
} from "./Layout.styles";

function Layout() {
  return (
    <PageContainer>
      <HeaderContainer>
        <StyledNav>
          <StyledLink>
            <LogoContainer data-loading="false" />
          </StyledLink>
        </StyledNav>
      </HeaderContainer>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </PageContainer>
  );
}

export default Layout;
