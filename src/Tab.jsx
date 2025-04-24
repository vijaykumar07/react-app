export function Tab({ title, handleClick, isSelected }) {
return (
      <button type="button" onClick={() => handleClick(title)} className={isSelected ? "active" : ""}>
        {title}
      </button>
  );
}