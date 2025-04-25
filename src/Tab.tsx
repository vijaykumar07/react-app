type TabProps = {
  title: string;
  handleClick: (title: string) => void;
  isSelected: boolean;
};

export function Tab({ title, handleClick, isSelected }: TabProps) {
  return (
      <button type="button" onClick={() => handleClick(title)} className={isSelected ? "active" : ""}>
        {title}
      </button>
  );
}