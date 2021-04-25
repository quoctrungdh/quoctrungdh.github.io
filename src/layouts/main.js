import React from "react";

import SEO from "../components/seo";
import Title from "../components/title";
import Footer from "../components/footer";

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