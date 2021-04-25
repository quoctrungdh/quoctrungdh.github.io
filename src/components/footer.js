import React from "react";

export default function Footer() {
    return (
        <footer
            className="mt-6 text-center">
            Crafted with &hearts; and powered by Gatsby &copy; {new Date().getFullYear()}
        </footer>
    )
}