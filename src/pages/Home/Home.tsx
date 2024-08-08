import React, { useEffect, useMemo, useState } from "react";

import { foodList } from "../../App";
import Food from "../../components/Food/Food";

import "./Home.scss";

const Home = () => {
    const [query, setQuery] = useState("");
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            const _ = e.key.toUpperCase();

            if (((e.ctrlKey || e.metaKey) && _ === "F") || _ === "F3") {
                e.preventDefault();

                return;
            }

            if (_.length === 1) {
                setQuery((query) => query + _);
            } else if (_ === "BACKSPACE") {
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
