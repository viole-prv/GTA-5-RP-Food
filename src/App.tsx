import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Page from "./pages/Page/Page";

import "./App.scss";

interface IFood {
    [key: string]: string[];
}

export const foodList: IFood = {
    "Фруктовый салат": ["Фрукты", "Нож"],
    "Овощной салат": ["Овощи", "Нож"],
    "Овощной смузи": ["Овощи", "Вода", "Венчик"],
    "Фруктовый смузи": ["Фрукты", "Вода", "Венчик"],
    "Фруктовый лед": ["Фрукты", "Лед", "Сахар", "Венчик"],
    Масло: ["Молоко", "Венчик"],
    "Рыбный фарш": ["Рыба", "Нож"],
    "Сухая рыбная котлета": ["Рыбный фарш", "Огонь"],
    "Рыбная котлета": ["Рыбный фарш", "Масло", "Огонь"],
    "Мясной фарш": ["Мясо", "Нож"],
    "Мясная котлета": ["Мясной фарш", "Масло", "Огонь"],
    "Сухая мясная котлета": ["Мясной фарш", "Огонь"],
    "Картофельное пюре": ["Овощи", "Масло", "Молоко", "Венчик", "Огонь"],
    "Мясная котлета с пюре": ["Картофельное пюре", "Мясная котлета"],
    "Рыбная котлета с пюре": ["Картофельное пюре", "Рыбная котлета"],
    "Вареный рис": ["Рис", "Вода", "Огонь"],
    "Мясная котлета с рисом": ["Мясная котлета", "Вареный рис"],
    "Рыбная котлета с рисом": ["Рыбная котлета", "Вареный рис"],
    "Ролл с лососем": ["Лосось", "Вареный рис", "Нож"],
    "Ролл с тунцом": ["Тунец", "Вареный рис", "Нож"],
    "Овощной ролл": ["Овощи", "Вареный рис", "Нож"],
    "Рыба с рисом": ["Рыба", "Вареный рис", "Огонь"],
    "Рыба с овощами": ["Рыба", "Овощи", "Огонь"],
    "Мясо с овощами": ["Мясо", "Овощи", "Огонь"],
    Яичница: ["Яйцо", "Огонь"],
    "Яичница с беконом": ["Яйцо", "Мясо", "Масло", "Огонь"],
    Омлет: ["Яйцо", "Молоко", "Венчик", "Огонь"],
    "Крем-брюле": ["Молоко", "Сахар", "Яйцо", "Огонь"],
    Суфле: ["Яйцо", "Сахар", "Венчик", "Огонь"],
    "Овощной омлет": ["Яйцо", "Молоко", "Овощи", "Венчик", "Огонь"],
    Компот: ["Сахар", "Вода", "Фрукты", "Огонь"],
    Карамель: ["Сахар", "Огонь"],
    Оладьи: ["Яйцо", "Молоко", "Мука", "Сахар", "Венчик", "Огонь"],
    "Оладьи с карамелью": ["Оладьи", "Карамель"],
    Тесто: ["Мука", "Вода", "Яйцо", "Венчик"],
    Чизкейк: ["Тесто", "Сыр", "Сахар", "Венчик", "Огонь"],
    "Карамельный чизкейк": ["Чизкейк", "Карамель"],
    "Фруктовый чизкейк": ["Чизкейк", "Фрукты"],
    "Яблоко в карамели": ["Карамель", "Фрукты"],
    "Фруктовый салат с карамелью": ["Карамель", "Фруктовый салат"],
    Мороженое: ["Яйцо", "Сахар", "Молоко", "Лёд", "Венчик"],
    "Карамельное мороженое": ["Карамель", "Мороженое"],
    "Молочный коктейль": ["Мороженое", "Молоко", "Венчик"],
    "Карамельный молочный коктейль": ["Карамель", "Молочный коктейль"],
    Бульон: ["Мясо", "Вода", "Огонь"],
    "Овощной суп": ["Бульон", "Овощи", "Огонь"],
    Борщ: ["Бульон", "Овощи", "Мясо", "Огонь"],
    "Жареное мясо на масле с овощами": ["Мясо", "Овощи", "Масло", "Огонь"],
    "Жареная рыба на масле с овощами": ["Рыба", "Овощи", "Масло", "Огонь"],
    "Салат Капрезе": ["Сыр", "Овощи", "Нож"],
    Хлеб: ["Тесто", "Огонь"],
    Сыр: ["Молоко", "Венчик", "Огонь"],
    "Сэндвич с сыром": ["Сыр", "Хлеб", "Нож", "Огонь"],
    Пицца: ["Тесто", "Овощи", "Мясо", "Сыр", "Огонь"],
    Пельмени: ["Мясной фарш", "Тесто", "Вода", "Огонь"],
    Макароны: ["Тесто", "Вода", "Нож", "Огонь"],
    "Макароны с сыром": ["Макароны", "Сыр", "Огонь"],
    "Макароны с мясной котлетой": ["Макароны", "Мясная котлета"],
    "Макароны с рыбной котлетой": ["Макароны", "Рыбная котлета"],
    "Паста Болоньезе": ["Макароны", "Сыр", "Овощи", "Мясной фарш", "Огонь"],
    "Паста Карбонара": ["Макароны", "Сыр", "Мясо", "Яйцо", "Огонь"],
    Рамен: ["Макароны", "Бульон", "Мясо", "Яйцо", "Огонь"],
    Рагу: ["Овощи", "Вода", "Мясо", "Огонь"],
    Стейк: ["Мясо", "Огонь"],
    "Стейк с рисом": ["Вареный рис", "Стейк", "Огонь"],
    "Стейк с салатом": ["Стейк", "Овощной салат"],
    "Стейк с макаронами": ["Макароны", "Стейк"],
    "Стейк с фруктовым соусом": ["Мясо", "Фрукты", "Сахар", "Огонь"],
    "Стейк с фруктовым соусом и рисом": ["Стейк с фруктовым соусом", "Вареный рис"],
    "Стейк с фруктовым соусом и пюре": ["Стейк с фруктовым соусом", "Картофельное пюре"],
    "Рыба с фруктовым соусом": ["Рыба", "Фрукты", "Сахар", "Огонь"],
    "Рыба с фруктовым соусом и рисом": ["Рыба с фруктовым соусом", "Вареный рис"],
    "Рыба с фруктовым соусом и пюре": ["Рыба с фруктовым соусом", "Картофельное пюре"],
    Лазанья: ["Молоко", "Мука", "Сыр", "Овощи", "Мясной фарш", "Огонь"],
    Ризотто: ["Бульон", "Рисовая крупа", "Сыр", "Огонь"],
    Бургер: ["Мясная котлета", "Овощи", "Хлеб"],
    "Тако с мясом": ["Хлеб", "Мясной фарш", "Сыр", "Овощи", "Огонь"],
    "Тако с рыбой": ["Хлеб", "Рыбный фарш", "Сыр", "Овощи", "Огонь"],
    Буррито: ["Хлеб", "Вареный рис", "Мясной фарш", "Овощи", "Сыр", "Огонь"],
    Поке: ["Вареный рис", "Сыр", "Овощи", "Лосось"],
    "Мальма в сливочном соусе": ["Мальма", "Овощи", "Молоко", "Огонь"],
    "Мясо по-французски": ["Мясо", "Овощи", "Сыр", "Огонь"],
    Оливье: ["Мясо", "Овощи", "Яйца", "Вода", "Нож", "Огонь"],
    "Сашими из фугу": ["Фугу", "Нож"],
    "Сашими из лосося": ["Лосось", "Нож"],
    "Сашими из тунца": ["Тунец", "Нож"],
};

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/:name"
                    element={<Page />}
                />
            </Routes>
        </HashRouter>
    );
}

export default App;
