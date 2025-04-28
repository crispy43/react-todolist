interface Props {
  isComplete: boolean;
  value: string;
  onClick: () => void;
}

export default function Todo({
  isComplete,
  value,
  onClick,
}: Props) {
  return (
    <div
      className="to-do"
      onClick={onClick}
      data-is-complete={isComplete}
    >
      <p>{isComplete && <span>&#10004;</span>}</p>
      <p>{value}</p>
    </div>
  )
}