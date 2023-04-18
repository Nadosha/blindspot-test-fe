import * as S from "./GameStat.styles";
import { SiTarget } from "react-icons/si";
import { CustomIcon } from "@UI/GameStat/CustomIcons";
import { colors } from "@UI/GameStat/GameStat.types";
import {
  Round,
  useGetCurrentGameQuery,
} from "../../../codegen/generated/graphql";
import getRoundState from "@Utils/getRoundState";

const GameStatData = [
  {
    round: 1,
    state: "current",
  },
  {
    round: 2,
    state: "unstarted",
  },
  {
    round: 3,
    state: "unstarted",
  },
  {
    round: 4,
    state: "unstarted",
  },
  {
    round: 5,
    state: "unstarted",
  },
];

type Props = {
  rounds: [Round];
  currentRound: number;
};
const GameStat = ({ rounds, currentRound }: Props) => {
  const GameStat = rounds.map((round, key) => {
    const normalized = {
      id: round._id,
      state: getRoundState({
        round,
        currentRound,
        key,
      }),
    };

    return normalized;
  });
  return (
    <S.Wrapper>
      {GameStat.map((i, key) => (
        <CustomIcon
          key={key}
          icon={SiTarget}
          color={colors[i.state]}
          style={{ fontSize: "35px", alignSelf: "center" }}
        />
      ))}
    </S.Wrapper>
  );
};

export default GameStat;
