interface Props {
  label: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  primary?: boolean
}
const Button: React.FC<Props> = ({ label, handleClick, primary }) => {
  const bgColor = primary ? "hover:border-2 hover:border-blue-400 bg-blue-400 text-white hover:text-gray-500 hover:bg-white" : "text-gray-500 border-blue-500 hover:bg-blue-400 hover:text-white"
  return <button className={`border text-lg rounded-lg px-3 py-2 ${bgColor}`} onClick={handleClick}>{label}</button>;

};
export default Button;
