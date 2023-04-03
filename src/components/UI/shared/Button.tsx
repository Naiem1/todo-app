interface ButtonProps {
  type: 'button' | 'reset' | 'submit';
  btnText: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  btnText,
  className,
  onClick,
  disabled,
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};

export default Button;
