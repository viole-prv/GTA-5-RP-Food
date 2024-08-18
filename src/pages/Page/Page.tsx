import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Recipe from "../../components/Recipe";

import "./Page.scss";

const Page = () => {
    const { name } = useParams<{ name: string }>();

    if (name === undefined) return null;

    const navigate = useNavigate();

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            const _ = e.key.toUpperCase();

            if (_ === "BACKSPACE") {
                navigate(-1);
            }
        };

        document.addEventListener("keydown", onKeyDown);

        return () => document.removeEventListener("keydown", onKeyDown);
    }, []);

    return (
        <main
            className="page"
            onContextMenu={(e) => e.preventDefault()}
        >
            <ul className="food__recipe">
                <Recipe name={name} />
            </ul>
        </main>
    );
};

export default Page;
