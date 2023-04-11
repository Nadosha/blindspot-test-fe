import styled from "styled-components";
import boolean from "async-validator/dist-types/validator/boolean";
import { getShadowColor } from "@Utils/getShadowColor";

export const Wrapper = styled.div<{ selected: boolean; correct: boolean }>`
  flex: 0 1 calc(20% - 8px);
  width: calc(20% - 8px);
  flex-grow: 5;
  aspect-ratio: 1 / 1;
  min-width: 60px;
  background: #ffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: center;
  padding: 10px;
  border-radius: 20px;
  box-shadow: ${({ selected, correct }) =>
    `0 2px 2px ${getShadowColor(selected, correct)}, 0 0 1px ${getShadowColor(
      selected,
      correct
    )}`};
  color: #6d6565;
  cursor: pointer;
  box-sizing: border-box;

  > h3 {
    font-weight: 600;
    font-size: 16px;
    margin: 2px auto;
  }

  > p {
    font-size: 16px;
    height: 14px;
    margin: 0 auto;
  }

  &:hover {
    transform: scale(1.1);
    transition: all 0.1s;
  }
`;

export const AlbumCover = styled.div<{ src: string }>`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  width: 100%;
  aspect-ratio: 1 / 1;
`;

export const Label = styled.label`
  color: #6d6565;
  font-weight: 600;
  font-size: 10px;
`;
