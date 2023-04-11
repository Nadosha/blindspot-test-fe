import Card from "@UI/Card";
import * as S from "./Game.styles";
import React, { useState } from "react";
import { Button } from "antd";
const Fake_Data = [
  {
    id: "0",
    artist: "Jackson",
    album: "Happy",
    cover: "https://via.placeholder.com/400x400",
  },
  {
    id: "1",
    artist: "Mark",
    album: "Dancing",
    cover: "https://via.placeholder.com/400x400",
  },
  {
    id: "2",
    artist: "Nick",
    album: "Night",
    cover: "https://via.placeholder.com/400x400",
  },
  {
    id: "3",
    artist: "Nirvana",
    album: "Today",
    cover: "https://via.placeholder.com/400x400",
  },
  {
    id: "4",
    artist: "Metallica",
    album: "Is not Over",
    cover: "https://via.placeholder.com/400x400",
  },
  {
    id: "5",
    artist: "Rolling",
    album: "Anybody",
    cover: "https://via.placeholder.com/400x400",
  },
  {
    id: "6",
    artist: "Coircle",
    album: "Save my",
    cover: "https://via.placeholder.com/400x400",
  },
  {
    id: "7",
    artist: "Jenny",
    album: "Baby",
    cover: "https://via.placeholder.com/400x400",
  },
];

const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any | undefined>(undefined);

  const selectAlbum = (evt: React.MouseEvent<HTMLElement>, item: any) => {
    if (!selectedItem) setSelectedItem(item.id);
    else alert("It looks like you've run out of choices. Sorry Bro!");
  };

  if (!gameStarted) {
    return (
      <S.ButtonWrapper>
        <Button type={"primary"} onClick={() => setGameStarted(!gameStarted)}>
          Start New Game
        </Button>
      </S.ButtonWrapper>
    );
  }

  return (
    <S.Wrapper>
      <S.Heading>
        <h3>
          <small>Guess Artist of album:</small> {Fake_Data[0].album}
        </h3>
        {!!selectedItem && (
          <S.Controllers>
            <Button>Next Level</Button>
          </S.Controllers>
        )}
      </S.Heading>

      <S.GameBoard>
        {Fake_Data.map((i, key) => (
          <Card
            item={i}
            isSelected={selectedItem === i.id}
            isCorrect={!!selectedItem && Fake_Data[1].id === i.id}
            handler={(evt) => selectAlbum(evt, i)}
            key={key}
          />
        ))}
      </S.GameBoard>
    </S.Wrapper>
  );
};

export default Game;
