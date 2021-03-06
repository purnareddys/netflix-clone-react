import styled from "styled-components";

export const Inner = styled.div`
  display: flex;
  font-family: "Roboto", sans-serif;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const Item = styled.div``;

export const Container = styled.section``;
export const Title = styled.h1``;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
