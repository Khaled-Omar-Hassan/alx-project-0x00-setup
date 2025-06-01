import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
    return (
        <button className={`bg-[#A5B7F5] ${styles}`}>
            {title}
        </button>
    );
};

export default Button;