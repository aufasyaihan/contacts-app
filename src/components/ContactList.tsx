import peopleType from "../types/people";
import ContactItem from "./ContactItem";

function ContactList({
  contacts,
  onDelete,
}: {
  contacts: peopleType[];
  onDelete: (id: number) => void;
}) {
  return (
    <>
      <div className="contact-list">
        {contacts.map((contact) => (
          <ContactItem key={contact.id} onDelete={onDelete} {...contact} />
        ))}
      </div>
    </>
  );
}

export default ContactList;
