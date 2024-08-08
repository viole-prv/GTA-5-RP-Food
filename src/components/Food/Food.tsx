import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

import { foodList } from "../../App";

import "./Food.scss";

type Props = {
    name: string;
    children?: ReactNode;
};

const Food: FC<Props> = ({ name, children }) => {
    const isActive = name in foodList;

    return (
        <li className="food">
            <Link
                className={`food__info ${isActive ? "" : "inactive"}`}
                to={`/${name}`}
            >
                {isActive && (
                    <div className="info__image">
                        <img
                            alt={name}
                            src={`${process.env.PUBLIC_URL}/img/${name}.png`}
                        />
                    </div>
                )}
                <span className="info__name">{name}</span>
            </Link>
            {children && <ul className="food__recipe">{children}</ul>}
        </li>
    );
};

export default Food;
