import React from "react";
import { Helmet } from "react-helmet";

export default function SEO(props) {
    const { siteMetadata } = props;
    return (
        <Helmet>
            <title>{siteMetadata.title}</title>
        </Helmet>
    )
}