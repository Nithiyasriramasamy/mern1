import React from 'react'
export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <div>
        <div> <p>Copyright {year} MERN Stack Developer. All rights reserved.</p></div>
        </div>
    )
}