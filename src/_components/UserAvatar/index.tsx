import { IUserHeader } from '@interfaces/header-data';
import {
  HeaderImageUser,
  HeaderUserContainer,
  HeaderUserContent,
} from './style';
import avatarImg from '@assets/avatar-default.png';

function UserAvatar({ username, userAtHandle, srcAvatar }: IUserHeader) {
  return (
    <HeaderUserContainer>
      <HeaderImageUser src={srcAvatar ?? avatarImg} alt="Image User" />
      <HeaderUserContent>
        <h3>{username}</h3>
        <p>{userAtHandle}</p>
      </HeaderUserContent>
    </HeaderUserContainer>
  );
}

export { UserAvatar };
