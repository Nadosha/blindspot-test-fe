import Card from "@UI/Card";
import * as S from "./Game.styles";
import React, { ChangeEvent, useState } from "react";
import { Button, Modal } from "antd";
import { useAuth } from "@API/auth";
import {
  Album,
  GetCurrentGameDocument,
  useCreateGameMutation,
  useGetCurrentGameQuery,
  useUpdateGameMutation,
} from "../../codegen/generated/graphql";

const Game = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<any | undefined>(undefined);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);

  const { data: UserData } = useAuth();
  const {
    data: GameData,
    loading,
    error,
  } = useGetCurrentGameQuery({
    variables: {
      user: UserData.user._id,
    },
  });
  const [createGameMutation] = useCreateGameMutation({
    refetchQueries: [
      { query: GetCurrentGameDocument, variables: { user: UserData.user._id } },
    ],
    variables: {
      game: {
        user: UserData.user._id,
      },
    },
  });

  const [updateGameMutation] = useUpdateGameMutation({
    refetchQueries: [
      { query: GetCurrentGameDocument, variables: { user: UserData.user._id } },
    ],
  });

  const handleChange = async (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    await createGameMutation();
  };

  const selectAlbum = (evt: React.MouseEvent<HTMLElement>, item: Album) => {
    if (!selectedItem) {
      setSelectedItem(item.albumID);

      if (
        !currentRound ||
        item.albumID === currentRound.requestedAlbum.albumID
      ) {
        setIsCorrectAnswer(!isCorrectAnswer);
      }
    } else alert("It looks like you've run out of choices. Sorry Bro!");
  };

  const currentRound =
    GameData?.currentGame?.rounds[GameData?.currentGame?.currentRound - 1];

  const nextHendler = async (evt: React.MouseEvent<HTMLElement>) => {
    const updateDataInput = {
      _id: GameData?.currentGame?._id,
      isCompleted: false,
      round: {
        _id: currentRound?._id,
        isCompleted: true,
        isCorrect: isCorrectAnswer,
      },
    };
    try {
      await updateGameMutation({
        variables: {
          updateGameInput: { ...updateDataInput },
        },
      });
      if (GameData?.currentGame?.currentRound >= 5) {
        setIsModalOpen(true);
      }

      setSelectedItem(false);
      setIsCorrectAnswer(false);
    } catch (e) {
      alert(e);
    }
  };

  if (!GameData?.currentGame) {
    return (
      <S.ButtonWrapper>
        <Button type={"primary"} onClick={handleChange}>
          Start New Game
        </Button>
      </S.ButtonWrapper>
    );
  }

  return (
    <S.Wrapper>
      <S.Heading>
        <h3>
          <small>Guess Artist of album: </small>
          {currentRound.requestedAlbum.title}
        </h3>
        {!!selectedItem && (
          <S.Controllers>
            <Button onClick={nextHendler}>Next Level</Button>
          </S.Controllers>
        )}
      </S.Heading>

      <S.GameBoard>
        {currentRound.albums.map((i, key) => (
          <Card
            item={i}
            isSelected={selectedItem === i.albumID}
            isCorrect={
              !!selectedItem &&
              currentRound.requestedAlbum.albumID === i.albumID
            }
            handler={(evt) => selectAlbum(evt, i)}
            key={key}
          />
        ))}
      </S.GameBoard>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <h3>Game Over</h3>
      </Modal>
    </S.Wrapper>
  );
};

export default Game;
