interface DeleteButtonProps {
  id: number;
  onDelete: (id: number) => void;
}

function DeleteButton({ id, onDelete }: DeleteButtonProps) {
  return (
    <button className="contact-item__delete" onClick={() => onDelete(id)}>
      X
    </button>
  );
}

export default DeleteButton;
