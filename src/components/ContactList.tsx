import { useState } from "react";
import peopleType from "../types/people";
import ContactItem from "./ContactItem";
import ContactInput from "./ContactInput";

function ContactList({ contacts }: { contacts: peopleType[] }) {
  const [people, setPeople] = useState<peopleType[]>(contacts);
  const submitHandler = (name: string, tag: string) => {
    console.log(name, tag);
  };
  const deleteHandler = (id: number) => {
    setPeople((prevState) => prevState.filter((people) => people.id !== id));
  };
  return (
    <>
      <div>
        <h1>Add</h1>
        <ContactInput onAdd={submitHandler} />
      </div>
      <div className="contact-list">
        {people.map((people) => (
          <ContactItem key={people.id} onDelete={deleteHandler} {...people} />
        ))}
      </div>
    </>
  );
}

export default ContactList;
