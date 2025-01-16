import React from "react";
export default function IconGithubAndGoogle({ src, alt, btnType, text, id, className, onClick }) {


    return (<>
        <div className="DefaultContainerBtn">
            <button
                className={className || "button--default"}
                id={id}
                type={btnType || "button"}
                onClick={onClick}
            >
                <div id="GithubGoogleIconContainer">
                    <img className="GithubGoogleIcon" id={id} src={src} alt={alt} />
                </div>
                {text || "Absenden"}
            </button>
        </div>
    </>)
}