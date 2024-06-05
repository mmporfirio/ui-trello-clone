import styled from "styled-components";

const ColumnFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 4px;

  span {
    display: flex;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    white-space: normal;
    color: var(--ds-text, #172b4d);
    font-weight: 500;
    align-items: center;
    gap: 6px;
  }

  button {
    &:hover {
      background-color: var(
        --accent-background-hovered,
        var(--ds-background-neutral-hovered, #091e4224)
      );
      color: var(--accent-text-bolder, var(--ds-text, #172b4d));
    }
  }
`;

const NewCardButton = styled.button`
  background-color: transparent;
  border-radius: 8px;
  color: var(--accent-text, var(--ds-text-subtle, #44546f));
  padding: 6px 12px 6px 8px;
  text-decoration: none;
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
  margin: 0;
  height: 32px;
`;

const CardTemplateButton = styled.button`
  background-color: transparent;
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-text, var(--ds-icon-subtle, #626f86));
  margin: 0;
  flex-grow: 0;
  flex-shrink: 0;
  border-radius: 8px;
  padding: 8px;
`;

const EditionCardText = styled.textarea`
  height: 56px;
  background: transparent;
  background-color: var(--ds-surface-raised, #ffffff);

  border-radius: 8px;
  border: none;
  height: max-content;
  margin: 0;
  width: 90%;
  min-height: 36px;
  overflow: hidden;
  overflow-y: hidden;
  overflow-wrap: break-word;
  overflow-y: auto;
  padding: 8px 12px;
  resize: none;
  &:focus {
    background-color: var(--ds-surface-raised, #ffffff);
    box-shadow: var(
      --ds-shadow-raised,
      0px 1px 1px #091e4240,
      0px 0px 1px #091e424f
    );
    max-height: 160px;
    min-height: 36px;
  }
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
  width: 100%;
`;

const CardInnerContainer = styled.div`
  display: flow-root;
  position: relative;
  padding: 8px 12px 4px;
  min-height: 24px;
  z-index: 10;
  cursor: pointer;
`;

const EditionCardContainer = styled.div`
  width: 100%;
  border-radius: 8px;
`;

const AddCardButton = styled.button`
  margin: 0;
  background-color: var(--ds-background-brand-bold, #0c66e4);
  box-shadow: none;
  border: none;
  color: var(--ds-text-inverse, #ffffff);
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  font-display: swap;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;
  padding: 6px 12px;
  text-decoration: none;
  white-space: normal;
  box-shadow: none;
  border: none;
  font-weight: 500;
  transition-property: background-color, border-color, box-shadow;
  transition-duration: 85ms;
  transition-timing-function: ease;

  &:hover {
    background-color: #659eee !important;
    color: black !important;
  }
`;

const CloseCardEditionButton = styled.button`
  display: flex;
  height: 20px;
  width: 20px;
`;

const ActionsNewCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  margin-top: 8px;
`;

export {
  ActionsNewCardContainer,
  CloseCardEditionButton,
  ColumnFooterContainer,
  EditionCardContainer,
  CardTemplateButton,
  CardInnerContainer,
  EditionCardText,
  NewCardButton,
  AddCardButton,
  CardContainer,
};
