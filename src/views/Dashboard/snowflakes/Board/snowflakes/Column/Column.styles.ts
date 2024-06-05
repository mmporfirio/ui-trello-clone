import styled from "styled-components";

const ColumnContainer = styled.div`
  background-color: #101204;
  border-radius: 12px;
  box-shadow: var(
    --ds-shadow-raised,
    0px 1px 1px #091e4240,
    0px 0px 1px #091e424f
  );
  color: #44546f;
  display: flex;
  justify-content: space-between;
  max-height: 100%;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 272px;
  align-self: start;
  padding-bottom: 8px;
  position: relative;
  scroll-margin: 8px;
  white-space: normal;
  width: 272px;
  box-sizing: border-box;
  vertical-align: top;
`;

const StyledListItem = styled.li`
  padding: 0 6px;
  align-self: flex-start;
  flex-shrink: 0;
  display: block;
  height: 100%;
  white-space: nowrap;
`;

const ColumnHeaderContainer = styled.div`
  display: flex;
  row-gap: 0;
  align-items: center;
  padding: 8px 8px 0;
  position: relative;
  flex-grow: 0;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const ColumnTitleContainer = styled.div`
  position: relative;
  flex-basis: min-content;
  flex-grow: 1;
  flex-shrink: 1;
  min-height: 20px;
  color: #172b4d;
`;

const ColumnTitle = styled.h2`
  display: block;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  padding: 6px 8px 6px 12px;
  background-color: transparent;
  overflow: hidden;
  overflow-wrap: anywhere;
  white-space: normal;
  cursor: pointer;
  color: #b6b2cf;
`;

const ColumnHeaderButton = styled.button`
  flex-grow: 0;
  flex-shrink: 0;
  margin-bottom: 0px;
  padding: 8px;
  border-radius: 8px;
  color: #626f86;
  background-color: transparent;
  border: none;
  box-shadow: none;
  &:hover {
    background-color: #a6c5e229;
    color: #44546f;
  }
`;

const StyledList = styled.ol`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  gap: 8px;
  margin: 0 4px;
  margin-right: 4px;
  padding: 0px 4px;
  padding-top: 0px;
  padding-right: 4px;
  padding-bottom: 0px;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  list-style: none;
  scrollbar-color: #a6c5e229;
  scrollbar-width: thin;
  height: 100%;
`;

export {
  ColumnHeaderContainer,
  ColumnTitleContainer,
  ColumnHeaderButton,
  ColumnContainer,
  StyledListItem,
  ColumnTitle,
  StyledList,
};
