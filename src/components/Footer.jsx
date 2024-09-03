import React from 'react';

//date functioning js
const date = new Date();

function Footer() {
  return (
    <footer>
        <p>© Copyright {date.getFullYear()}</p>
    </footer>
  )
}

export default Footer