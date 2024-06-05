import styled from "styled-components";

interface ContainerProps {
  isDraggingOver?: boolean;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  margin-top: 12px;
  position: relative;
  background-color: inherit;
  ${({ isDraggingOver }) => isDraggingOver && "background-color: #639ee2;"}
`;

const StyledList = styled.ol`
  bottom: 0;
  left: 0;
  margin-bottom: 8px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 8px;
  padding-top: 2px;
  position: absolute;
  right: 0;
  scrollbar-color: #fff6 #00000026;
  scrollbar-width: auto;
  top: -2px;
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0 6px;
`;

const BoardContainer = styled.div`
  height: 92%;
  display: flex;
  overflow-x: auto;
`;

export { BoardContainer, Container, StyledList };
