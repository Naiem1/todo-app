interface InputProps {
  type: string;
  placeholder?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  id?: string;
  name?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  className,
  onChange,
  value,
  id,
  name,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      value={value}
      id={id}
      name={name}
    />
  );
};

export default Input;
