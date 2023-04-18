import { LogoutBtn, Wrapper } from "@Components/Layout/TopBar/TopBar.styles";
import UserInfo from "@UI/UserInfo";
import GameStat from "@UI/GameStat";
import { useAuth } from "@API/auth";
import { getUserAvatar } from "@Utils/getUserAvatar";

import { unregisterAuthToken } from "@Utils/Cookies";
import { CiLogout } from "react-icons/ci";
import {
  useCreateGameMutation,
  useGetCurrentGameQuery,
} from "../../../codegen/generated/graphql";

const TopBar = () => {
  const { isSignedIn, data: UserData } = useAuth();
  const {
    data: CurrentGame,
    loading,
    error,
  } = useGetCurrentGameQuery({
    variables: {
      user: UserData?.user._id,
    },
  });

  const currentUser = {
    gender: UserData?.user.gender,
    userName: UserData?.user.userName,
    userScore: UserData?.user.score,
  };

  const logout = () => {
    unregisterAuthToken();
  };

  return isSignedIn ? (
    <Wrapper>
      <UserInfo
        avatar={getUserAvatar(currentUser.gender)}
        userName={currentUser.userName}
        userScore={currentUser.userScore}
      />
      <LogoutBtn type="text" onClick={logout}>
        <CiLogout style={{ fontSize: "24px", alignSelf: "center" }} /> Logout
      </LogoutBtn>
      <GameStat
        rounds={CurrentGame?.currentGame?.rounds || []}
        currentRound={CurrentGame?.currentGame?.currentRound}
      />
    </Wrapper>
  ) : (
    <></>
  );
};

export default TopBar;
