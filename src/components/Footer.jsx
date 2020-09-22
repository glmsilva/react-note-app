import React from 'react';

function Footer() {
    let dt = new Date();

    return (
        <footer><p>Copyright {dt.getFullYear()} </p></footer>
    )
}

export default Footer;