import { FC } from "react";
import { PsychologistListCard } from "../PsychologistListCard/PsychologistListCard";
import { List, ListItem } from "./PsychologistList.styled";
import { IPsychologistListProps } from "../../interfaces/psychologistsInterfaces";
import { useNavigate } from "react-router-dom";

export const PsychologistList: FC<IPsychologistListProps> = ({ items }) => {
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate(`/psychologist/${id}`);
  };

  return (
    <List>
      {items.map((item) => (
        <ListItem key={item._id} onClick={() => handleClick(item._id)}>
          <PsychologistListCard item={item} />
        </ListItem>
      ))}
    </List>
  );
};
