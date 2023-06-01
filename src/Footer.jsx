import React from "react";

const Footer = () => {
    const today = new Date();
    return (
        <footer>
            <p>  &copy; {today.getFullYear()} Ayodele Tech </p>
        </footer>
    );
};

export default Footer;
