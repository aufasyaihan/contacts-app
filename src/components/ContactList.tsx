import { useState } from "react";
import peopleType from "../types/people";
import ContactItem from "./ContactItem";

function ContactList({ contacts }: { contacts: peopleType[] }) {
  const [people, setPeople] = useState<peopleType[]>(contacts);
  const onDelete = (id: number) => {
    setPeople((prevState) => prevState.filter((people) => people.id !== id));
  };
  return (
    <div className="contact-list">
      {people.map((people) => (
        <ContactItem key={people.id} onDelete={onDelete} {...people} />
      ))}
    </div>
  );
}

export default ContactList;
