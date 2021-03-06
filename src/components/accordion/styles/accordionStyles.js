import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;

const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;

const Item = styled.div`
  color: white;
  max-width: 800px;
  margin: auto;
  margin-bottom: 10px;

  &:first-of-type {
    margin-top: 3em;
  }
`;

const Frame = styled.div`
  margin-bottom: 40px;
`;


const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin: 0 0 8px 0;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  background-color: #303030;
  padding: 0.8em 1.2em;
  align-items: center;
  user-select: none;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const Body = styled.div`
  max-height: 1200px;
  transition: max-height 1s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background-color: #303030;
  padding: 0.8em 2.2em 0.8em 1.2em;
  white-space: pre-wrap;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export {
  Container,
  Item,
  Inner,
  Header,
  Title,
  Frame,
  Body,
};