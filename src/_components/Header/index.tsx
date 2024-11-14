import { UserAvatar } from '@components/UserAvatar';
import {
  HeaderContainer,
  HeaderContent,
  LogoContent,
  TypographLogo,
} from './style';
import { userInfo } from '@constants/generalConstants';
import logoImg from '/favicon.ico';

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContent>
          <img src={logoImg} alt="Logo Ecomizer" />
          <TypographLogo>Ecomizer</TypographLogo>
        </LogoContent>
        <UserAvatar
          username={userInfo.username}
          userAtHandle={userInfo.userAtHandle}
        />
      </HeaderContent>
    </HeaderContainer>
  );
}

export { Header };
