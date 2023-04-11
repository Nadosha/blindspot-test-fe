import {LogoutBtn, Wrapper} from "@Components/Layout/TopBar/TopBar.styles";
import UserInfo from "@UI/UserInfo";
import GameStat from "@UI/GameStat";
import {useAuth} from "@API/auth";
import {getUserAvatar} from "@Utils/getUserAvatar";

import {unregisterAuthToken} from "@Utils/Cookies";
import {CiLogout} from "react-icons/ci";

const TopBar = () => {
    const { isSignedIn, data } = useAuth()

    const currentUser = {
        gender: data?.user.gender,
        userName: data?.user.userName,
        userScore: data?.user.score,
    };

    const logout = () => {
        unregisterAuthToken();
    };

    return isSignedIn ? (
        <Wrapper>
            <UserInfo avatar={getUserAvatar(currentUser.gender)} userName={currentUser.userName} userScore={currentUser.userScore}/>
            <LogoutBtn type="text" onClick={logout}>
                <CiLogout style={{fontSize: '24px', alignSelf: 'center'}}/> Logout
            </LogoutBtn>
            <GameStat/>
        </Wrapper>
    ) : <></>
};

export default TopBar;