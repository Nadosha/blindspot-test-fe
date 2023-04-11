import {UserProps} from "./UserInfo.types";
import * as S from './UserInfo.styles';

const UserInfo = (user: UserProps) => {
    return (
        <S.Wrapper>
            <S.CircleImg
                src={user.avatar}
            />
            <S.Info>
                <S.UserName>{user.userName}</S.UserName>
                <S.UserScore>Score: {user.userScore}</S.UserScore>
            </S.Info>
        </S.Wrapper>
    )
}

export default UserInfo;