import "./input.css"

function Input({ value, onChange, type = "text",placeholder="cosa devi fare?"}) {
    return (
        <input
            className="input"
            value={value} 
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            autoFocus
        />
    );
}

export default Input