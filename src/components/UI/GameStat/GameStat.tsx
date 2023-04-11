import * as S from './GameStat.styles';
import {SiTarget} from "react-icons/si";
import {CustomIcon} from "@UI/GameStat/CustomIcons";
import {colors} from "@UI/GameStat/GameStat.types";

const GameStatData = [
    {
        round: 1,
        state: 'current'
    },
    {
        round: 2,
        state: 'unstarted'
    },
    {
        round: 3,
        state: 'unstarted'
    },
    {
        round: 4,
        state: 'unstarted'
    },
    {
        round: 5,
        state: 'unstarted'
    }

]
const GameStat = () => {
    return(
        <S.Wrapper>
            {GameStatData.map((i, key) => (
                <CustomIcon key={key} icon={SiTarget} color={colors[i.state]} style={{fontSize: '35px', alignSelf: 'center'}}/>
            ))}
        </S.Wrapper>
    );
}

export default  GameStat;