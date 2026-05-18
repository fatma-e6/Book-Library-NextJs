"use client"
import React from 'react';

const Btn = () => {
    return (
        <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4"
            onClick={() => { console.log("hi") }}>
            Click Me
        </button>
    );
}

export default Btn;