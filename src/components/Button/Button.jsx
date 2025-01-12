import React, { forwardRef } from "react";

const Button = forwardRef(({ btnType, text, id, className, onClick }, ref) => {
    return (
        <div className="DefaultContainerBtn">
            <button
                className={className || "button--default"}
                id={id}
                type={btnType || "button"}
                onClick={onClick}
                ref={ref}
            >
                {text || "Absenden"}
            </button>
        </div>
    );
});

export default Button;
