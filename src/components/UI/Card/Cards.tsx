import * as S from "./Cards.styles";
import { Label } from "./Cards.styles";
import React from "react";

type AlbumItem = {
  id: string;
  artist: string;
  album: string;
  cover: string;
  rightVariant: boolean;
};

type Props = {
  item: AlbumItem;
  handler: React.MouseEvent<HTMLElement>;
  isSelected: boolean;
  isCorrect: boolean;
};
const Card = ({ item, handler, isSelected, isCorrect }: Props) => {
  return (
    <S.Wrapper onClick={handler} selected={isSelected} correct={isCorrect}>
      <S.AlbumCover src={item.cover} />
      <h3>{item.artist}</h3>
    </S.Wrapper>
  );
};

export default Card;
