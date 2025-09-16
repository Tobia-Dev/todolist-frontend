import "./input.css"

function Input({ children, onChange, type = "text",placeholder="cosa devi fare?"}) {
    return (
        <input
            className="input"
            type={type}
            onChange={onChange}
            placeholder={placeholder}
        >
            {children}
        </input>
    );
}

export default Input