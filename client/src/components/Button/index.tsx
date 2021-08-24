interface Props {
  label: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<Props> = ({ label, handleClick }) => {
  return <button onClick={handleClick}>{label}</button>;
};
export default Button;
