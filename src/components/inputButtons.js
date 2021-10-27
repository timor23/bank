import React from "react";

export default function InputButtons({inputHandlerCallback,attribute, value}) {
    return (
        <div>
            <p>
                <input
                    type="text"
                    placeholder={value}
                    data-whatToAdd= {attribute}
                    onChange={(e) => inputHandlerCallback(e)}
                />
            </p>

        </div>
    );
}