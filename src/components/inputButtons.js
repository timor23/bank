import React from "react";

export default function InputButtons({inputHandlerCallback,attribute}) {
    return (
        <div>
            <p>
                <input
                    type="text"
                    placeholder="Account Number"
                    data-whatToAdd= {attribute}
                    onChange={(e) => inputHandlerCallback(e)}
                />
            </p>

        </div>
    );
}