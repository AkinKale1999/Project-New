import React from "react"

export default function InputFields({ type, id, name, placeholder, value, onChange, className, required, autoComplete, arialabel }) {

    return (
        <>
            <input
                type={type}
                className={className}
                id={id}
                name={name}
                required={required}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                autoComplete={autoComplete}
                aria-label={arialabel}
            />
        </>
    )
}