import { Round } from "../codegen/generated/graphql";

type Props = {
  round: Round;
  currentRound: number;
  key: number;
};
const getRoundState = ({ round, currentRound, key }: Props) => {
  if (currentRound - 1 === key) {
    return "current";
  } else if (round.isCompleted && round.isCorrect) {
    return "passed";
  } else if (round.isCompleted && !round.isCorrect) {
    return "failed";
  }
  return "unstarted";
};

export default getRoundState;
