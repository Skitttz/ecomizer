import { UserAvatar } from '@components/UserAvatar';
import { HeaderContainer, HeaderContent } from './style';
import { userInfo } from '@constants/generalConstants';

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>Ecomizei</h1>
        <UserAvatar
          username={userInfo.username}
          userAtHandle={userInfo.userAtHandle}
        />
      </HeaderContent>
    </HeaderContainer>
  );
}

export { Header };
