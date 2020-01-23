import React from "react";

import Title from "../templates/title";
import Footer from "../templates/footer";

export default function MainLayout(props) {
    return (
        <div style={{
            margin: "3rem auto",
            padding: "0 1rem",
            maxWidth: "992px"
        }}>
            <Title />
            {props.children}
            <Footer />
        </div>
    )
}