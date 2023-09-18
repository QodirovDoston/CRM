import { CustomInputProps } from "../../types"
const CustomInput = ({ inputStyle, placeholder, error, disabled, name, label, value, inputType, handleChange }: CustomInputProps) => {
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input
                type={inputType}
                id={label}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                disabled={disabled}
                className={inputStyle}
            />
            {
                error && 
                <p className="">
                    Input filed can't be empty!
                </p>
            }
        </div>
    )
}

export default CustomInput;