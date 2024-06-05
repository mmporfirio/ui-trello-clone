import { Draggable } from "react-beautiful-dnd";
import {
  CardContainer,
  CardInnerContainer,
  CardTitle,
  StyledListItem,
} from "./Card.styles";
import { ReactNode } from "react";

export type CardType = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: ReactNode | JSX.Element | any;
};

type TaskProps = {
  task: CardType;
  index: number;
};

const Card = ({ task, index }: TaskProps) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <StyledListItem
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <CardContainer>
            <CardInnerContainer>
              <CardTitle>
                {task.content?.title ? task.content?.title : task.content}
              </CardTitle>
            </CardInnerContainer>
          </CardContainer>
        </StyledListItem>
      )}
    </Draggable>
  );
};

export default Card;
