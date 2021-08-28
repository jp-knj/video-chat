interface Props {
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const Input: React.FC<Props> = ({ value, handleChange, placeholder }) => {
    return (
        <input className={"border-2 border-gray-300 rounded px-3 py-2"} value={value} onChange={handleChange} placeholder={placeholder} />
    );
};

export default Input
