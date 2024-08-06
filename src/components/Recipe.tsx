import React, { FC, useEffect, useState } from "react";

import { foodList } from "../App";

import Food from "./Food/Food";

type Props = {
    name: string;
};

const Recipe: FC<Props> = ({ name }) => {
    const [entry, setEntry] = useState<string[]>([]);

    useEffect(() => {
        if (name in foodList) {
            setEntry(foodList[name]);
        }
    }, [name]);

    return (
        <Food name={name}>
            {entry.length > 0 &&
                entry.map((name) => (
                    <Recipe
                        key={name}
                        name={name}
                    />
                ))}
        </Food>
    );
};
export default Recipe;
