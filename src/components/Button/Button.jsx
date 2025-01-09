export default function Button({ btnType, text, id, className, onClick }) {
    return (
        <div>
            <button
                className={className || "DefaultBtn"}
                id={id || ""}
                type={btnType || "button"} // Fallback für `undefined`
                onClick={onClick}
            >
                {text || "Absenden"}
            </button>
        </div>
    );
}
