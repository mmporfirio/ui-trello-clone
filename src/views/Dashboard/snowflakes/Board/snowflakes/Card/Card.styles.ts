import styled from "styled-components";

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  scroll-margin: 80px;
`;

const CardContainer = styled.div`
  background-color: var(--ds-surface-raised, #ffffff);
  border-radius: 8px;
  box-shadow: var(0px 1px 1px #091e4240, 0px 0px 1px #091e424f);
  color: var(--ds-text, #172b4d);
  cursor: pointer;
  min-height: 36px;
  position: relative;
  scroll-margin: 8px;
`;

const CardInnerContainer = styled.div`
  display: flow-root;
  position: relative;
  padding: 8px 12px 4px;
  min-height: 24px;
  z-index: 10;
  cursor: pointer;
`;

const CardTitle = styled.a`
  display: block;
  margin-bottom: 4px;
  overflow: hidden;
  overflow-wrap: break-word;
  white-space: normal;
  text-decoration: none;
`;

export { StyledListItem, CardContainer, CardInnerContainer, CardTitle };
