import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

import { foodList } from "../../App";

import "./Food.scss";

type Props = {
    name: string;
    children?: ReactNode;
};

const Food: FC<Props> = ({ name, children }) => {
    return (
        <li className="food">
            <div className="food__info">
                {name in foodList && (
                    <Link
                        className="info__image"
                        to={name}
                    >
                        <img
                            alt={name}
                            src={`${process.env.PUBLIC_URL}/img/${name}.png`}
                        />
                    </Link>
                )}
                <span className="info__name">{name}</span>
            </div>
            {children && <ul className="food__recipe">{children}</ul>}
        </li>
    );
};

export default Food;
