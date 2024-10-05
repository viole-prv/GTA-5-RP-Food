import React, { useEffect, useMemo, useState } from "react";

import { foodList } from "../../App";
import Food from "../../components/Food/Food";

import "./Home.scss";

interface ITransform {
    [key: string]: string;
}

const transformList: ITransform = {
    Q: "Й",
    W: "Ц",
    E: "У",
    R: "К",
    T: "Е",
    Y: "Н",
    U: "Г",
    I: "Ш",
    O: "Щ",
    P: "З",
    A: "Ф",
    S: "Ы",
    D: "В",
    F: "А",
    G: "П",
    H: "Р",
    J: "О",
    K: "Л",
    L: "Д",
    Z: "Я",
    X: "Ч",
    C: "С",
    V: "М",
    B: "И",
    N: "Т",
    M: "Ь",
};

const Home = () => {
    const [query, setQuery] = useState("");
    const [opacity, setOpacity] = useState(0);

    const toTransform = (key: string): string =>
        key
            .split("")
            .map((char) => transformList[char] || char)
            .join("");

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            const key = e.key.toUpperCase();

            if (((e.ctrlKey || e.metaKey) && key === "F") || key === "F3") {
                e.preventDefault();

                return;
            }

            if (key.length === 1) {
                setQuery((query) => query + toTransform(key));
            } else if (key === "BACKSPACE") {
                setQuery((query) => query.slice(0, -1));
            }
        };

        document.addEventListener("keydown", onKeyDown);

        return () => document.removeEventListener("keydown", onKeyDown);
    }, []);

    useEffect(() => {
        setOpacity(1);

        const T = setTimeout(() => {
            setOpacity(0);
        }, 1000);

        return () => clearTimeout(T);
    }, [query]);

    const memoFood = useMemo(() => {
        return Object.keys(foodList)
            .filter((name) => name.toLowerCase().includes(query.toLowerCase()))
            .map((name) => (
                <Food
                    key={name}
                    name={name}
                />
            ));
    }, [query]);

    return (
        <main
            className="home"
            onContextMenu={(e) => e.preventDefault()}
        >
            {query && (
                <span
                    className="home__query"
                    style={{ opacity: opacity }}
                >
                    {query}
                </span>
            )}
            <ul
                className="home__food-container"
                style={{ opacity: query && opacity ? 0.5 : 1 }}
            >
                {memoFood}
            </ul>
        </main>
    );
};

export default Home;
