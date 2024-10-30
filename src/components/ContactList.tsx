import peopleType from "../types/people";
import ContactItem from "./ContactItem";

function ContactList({ contacts }: { contacts: peopleType[] }) {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </div>
  );
}

export default ContactList;
