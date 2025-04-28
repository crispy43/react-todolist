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
  // TODO: useEffect를 통해 완료한 경우 3초 후(setTimeout)에 사라지도록 구현
  // TODO: 클린업으로 정리하도록 구현

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