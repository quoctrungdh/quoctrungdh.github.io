import React from "react";

import SEO from "../templates/seo";
import Title from "../templates/title";
import Footer from "../templates/footer";

export default function MainLayout(props) {
    return (
        <div>
            <SEO siteMetadata={props.siteMetadata} />
            <Title />
            {props.children}
            <Footer />
        </div>
    )
}