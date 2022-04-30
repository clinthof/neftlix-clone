import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

const Title = styled.h1`
  width: 100%;
  color: white;
  font-size: 48px;
  text-align: center;
  font-weight: 500;
  user-select: none;
`;

const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: row;
`;

const User = styled.div`

`;

const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  cursor: pointer;
`;

const Name = styled.p`
  color: #808080;
  text-align: center;
  text-overflow: ellipsis;
  font-size: 16px;
  user-select: none;
  cursor: pointer;
`;

const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;

  &:hover > ${Picture} {
    border: 3px solid white;
  }

  &:hover > ${Name} {
    font-weight: bold;
    color: white;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export {
  Container,
  Title,
  List,
  Item,
  User,
  Picture,
  Name,
};