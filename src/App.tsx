import { useState } from "react";
import ContactInput from "./components/ContactInput";
import ContactList from "./components/ContactList";
import people from "./data/people";
import peopleType from "./types/people";
function App() {
  const [contacts, setContacts] = useState<peopleType[]>(people);
  const submitHandler = (name: string, tag: string) => {
    setContacts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        name: name,
        tag: tag,
        imageUrl: `https://ui-avatars.com/api/?name=${name}&size=128`,
      },
    ]);
  };
  const deleteHandler = (id: number) => {
    setContacts((prevState) =>
      prevState.filter((contacts) => contacts.id !== id)
    );
  };
  return (
    <div className="contact-app">
      <h1>Aplikasi Kontak</h1>
      <div>
        <h2>Tambah Kontak</h2>
        <ContactInput onAdd={submitHandler} />
      </div>
      <h2>Daftar Kontak</h2>
      <ContactList contacts={contacts} onDelete={deleteHandler} />
    </div>
  );
}

export default App;
