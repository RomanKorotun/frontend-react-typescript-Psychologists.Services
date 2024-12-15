import { FC } from "react";
import { PsychologistListCard } from "../PsychologistListCard/PsychologistListCard";
import { List, ListItem } from "./PsychologistList.styled";
import { IPsychologistListProps } from "../../interfaces/psychologistsInterfaces";

export const PsychologistList: FC<IPsychologistListProps> = ({ items }) => {
  return (
    <List>
      {items.map((item) => (
        <ListItem key={item._id}>
          <PsychologistListCard item={item} />
        </ListItem>
      ))}
    </List>
  );
};
