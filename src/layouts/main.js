import React from "react";

import SEO from "../components/seo";
import Title from "../components/title";
import Footer from "../components/footer";
import Nav from '../components/nav';

export default function MainLayout(props) {
    return (
        <div className="">
            <SEO siteMetadata={props.siteMetadata} />
            <Title />
            <main className="container mx-auto px-4 pb-16">
                <Nav />
                <section>
                    {props.children}
                </section>
                <Footer />
            </main>
        </div>
    )
}