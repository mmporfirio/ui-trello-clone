/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState, useEffect, useRef } from "react";
import {
  ActionsNewCardContainer,
  AddCardButton,
  CardTemplateButton,
  ColumnFooterContainer,
  EditionCardContainer,
  EditionCardText,
  NewCardButton,
} from "./ColumnFooter.styles";
import XIcon from "../../../../../../assets/svg/XIcon";
import PlusIcon from "../../../../../../assets/svg/PlusIcon";
import CardTemplateIcon from "../../../../../../assets/svg/CardTemplateIcon";
import { CardType } from "../Card";

type ColumnFooterProps = {
  handleAddCard: (card: CardType) => void;
};

const ColumnFooter = ({ handleAddCard }: ColumnFooterProps) => {
  const [isCreating, setIsCreating] = useState(false);
  const [cardTitle, setCardTitle] = useState("");
  const columnFooterRef = useRef(null);

  const resetState = () => {
    setIsCreating(false);
    setCardTitle("");
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickOutside = (event: any) => {
      if (
        columnFooterRef.current &&
        // @ts-ignore
        !columnFooterRef.current.contains(event.target)
      )
        resetState();
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [columnFooterRef]);

  const toggleCreating = () => setIsCreating(!isCreating);

  const handleCreateFromTemplate = () => window.alert("Feature in development");

  const handleButtonAddCard = () => {
    // Note: The ID will be created by the backend in the future
    handleAddCard({
      content: cardTitle,
      id: cardTitle,
    });
    resetState();
  };

  return (
    <ColumnFooterContainer ref={columnFooterRef}>
      {isCreating ? (
        <EditionCardContainer>
          <EditionCardText
            maxLength={30}
            value={cardTitle}
            onChange={(e) => setCardTitle(e.target.value)}
            placeholder="Enter a title for this card…"
          />
          <ActionsNewCardContainer>
            <AddCardButton onClick={handleButtonAddCard}>
              Add card
            </AddCardButton>
            <CardTemplateButton onClick={toggleCreating}>
              <XIcon height={20} />
            </CardTemplateButton>
          </ActionsNewCardContainer>
        </EditionCardContainer>
      ) : (
        <>
          <NewCardButton onClick={toggleCreating}>
            <span>
              <PlusIcon height={16} /> Add a card
            </span>
          </NewCardButton>
          <CardTemplateButton onClick={handleCreateFromTemplate}>
            <CardTemplateIcon />
          </CardTemplateButton>
        </>
      )}
    </ColumnFooterContainer>
  );
};
export { ColumnFooter };
