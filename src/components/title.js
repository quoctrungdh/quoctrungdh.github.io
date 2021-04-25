import React from "react";

import MainIcon from '../../static/main-icon.png';

export default function Title() {
    return (
        <h1 className="shadow text-center">
            <img className="w-10 inline" src={MainIcon} />
        </h1>
    )
}