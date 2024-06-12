import styled from "styled-components";

const ColumnButton = styled.button`
  display: flex;
  justify-content: flex-start;
  width: 272px;
  padding: 12px;
  border-radius: 12px;
  background-color: #ffffff3d;
  height: 44px;
  gap: 8px;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
`;

const CreatingContainer = styled.div`
  width: 272px;
  border-radius: 12px;
  height: fit-content;
  background-color: #101204;
  padding: 12px;
`;

const StyledTextArea = styled.textarea`
  height: 32px;
  width: 90%;
  min-height: 20px;
  max-height: 256px;
  margin: 0;
  padding: 6px 12px;
  overflow: hidden;
  border-radius: 4px;
  color: var(--ds-text, #172b4d);
  font-weight: 600;
  resize: none;
  overflow-wrap: break-word;
`;

const CreateColumnButton = styled.button`
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

const CancelButton = styled.button`
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
  padding: 8px;

  &:hover {
    background-color: var(
      --accent-background-hovered,
      var(--ds-background-neutral-hovered, #091e4224)
    );
    color: var(--accent-text-bolder, var(--ds-text, #172b4d));
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

export {
  CancelButton,
  ActionsContainer,
  ColumnButton,
  StyledTextArea,
  CreatingContainer,
  CreateColumnButton,
};
