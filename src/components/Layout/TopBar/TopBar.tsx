import {Wrapper} from "@Components/Layout/TopBar/TopBar.styles";
import UserInfo from "@UI/UserInfo";
import GameStat from "@UI/GameStat";

const TopBar = () => {
    const user = {
        avatar: 'https://i.pinimg.com/564x/65/56/08/6556085337184f56dab477ebfcbf67a7.jpg',
        userName: 'Andrii Nadosha',
        userScore: 23
    }
    return (
        <Wrapper>
            <UserInfo avatar={user.avatar} userName={user.userName} userScore={user.userScore}/>
            <GameStat/>
        </Wrapper>
    )
};

export default TopBar;