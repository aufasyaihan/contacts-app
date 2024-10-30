import ContactList from "./components/ContactList";
import people from "./data/people";
function App() {
  return (
    <div className="contact-app">
      <h1>Daftar Kontak</h1>
      <ContactList contacts={people} />
    </div>
  );
}

export default App;
