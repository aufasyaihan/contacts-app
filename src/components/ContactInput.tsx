import { useState } from "react";

function ContactInput({
  onAdd,
}: {
  onAdd: (name: string, tag: string) => void;
}) {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(name, tag);
    setName("");
    setTag("");
  };
  return (
    <form className="contact-input" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tag"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />
      <button type="submit">Tambah</button>
    </form>
  );
}

export default ContactInput;
