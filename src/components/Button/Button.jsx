export default function Button({ btnType, text, id, className, onClick }) {
    return (
        <div className="DefaultContainerBtn">
            <button
                className={className || "button--default"}
                id={id}
                type={btnType || "button"} // Fallback für `undefined`
                onClick={onClick}
            >
                {text || "Absenden"}
            </button>
        </div>
    );
}
