// import React, { useState } from 'react';

const State3 = () => {
    const [total, setTotal] = useState(0);
    const [favoriteColor, setFavoriteColor] = useState("red");
    return (
        <div>
            <p>Total: {total}</p>
            <button
                onClick={() => {
                    setTotal(total + 1);
                }}
            >
                Increment
            </button>
            <button
                onClick={() => {
                    setTotal(total - 1);
                }}
            >
                Decrement
            </button>
            <div>
                <p>Choose your favorite color:</p>
                <button
                    onClick={() => setFavoriteColor("red")}
                    style={{ backgroundColor: "red", color: "white", margin: "5px" }}
                >
                    Red
                </button>
                <button
                    onClick={() => setFavoriteColor("blue")}
                    style={{ backgroundColor: "blue", color: "white", margin: "5px" }}
                >
                    Blue
                </button>
                <button
                    onClick={() => setFavoriteColor("black")}
                    style={{ backgroundColor: "black", color: "white", margin: "5px" }}
                >
                    Black
                </button>
                <button
                    onClick={() => setFavoriteColor("green")}
                    style={{ backgroundColor: "green", color: "white", margin: "5px" }}
                >
                    Green
                </button>
            </div>
            <h1>
                My favorite color is{' '}
                <span style={{ color: favoriteColor }}>{favoriteColor}</span>.
            </h1>
        </div>
    );
};

export default State3;
