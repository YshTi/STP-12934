# STP-12934

Навчальний командний проєкт на базі Vite. Репозиторій використовується для верстки сторінки за макетом Figma, розділення задач між учасниками команди та деплою результату на GitHub Pages.

## Швидкий старт

```bash
npm install
npm run dev
```

Збірка для продакшену:

```bash
npm run build
```

Перегляд продакшен-збірки локально:

```bash
npm run preview
```

## Основні правила роботи

### HTML

- Кожна секція сторінки має бути окремим HTML-файлом у папці `src/partials/`.
- У `src/index.html` підключаються всі HTML-частини через `<load src="..." />`.
- Не пишемо всю розмітку в одному файлі `index.html`.
- Назви partial-файлів мають відповідати назві секції: `header.html`, `hero.html`, `faq.html`, `footer.html` тощо.

### CSS

- Для кожної секції створюємо окремий CSS-файл у папці `src/css/`.
- Усі CSS-файли підключаються через головний файл `src/css/styles.css` за допомогою `@import`.
- Не підключаємо CSS-файли напряму в HTML, крім головного `styles.css`.
- Загальні стилі зберігаються окремо: `reset.css`, `base.css`, `container.css`, `animations.css`.
- Секційні стилі зберігаються окремо: `header.css`, `hero.css`, `faq.css`, `footer.css` тощо.

Приклад підключення секційного CSS у `styles.css`:

```css
@import url('./header.css');
@import url('./hero.css');
@import url('./faq.css');
@import url('./footer.css');
```

### JavaScript

- Працюємо тільки з `data-*` атрибутами.
- Не шукаємо елементи через класи в JavaScript.
- Класи використовуються тільки для стилізації CSS.
- Увесь JavaScript для окремих компонентів зберігається в папці `src/js/`.
- У `src/main.js` підключаються всі JS-модулі через `import`.

Правильно:

```js
const button = document.querySelector('[data-action="open"]');
```

Неправильно:

```js
const button = document.querySelector('.open-button');
```

Приклад підключення модуля в `main.js`:

```js
import './js/burgerMenu';
import './js/faq';
import './js/swiper';
```

### SVG

- SVG використовуємо тільки через sprite.
- Окремі SVG-файли не вставляємо напряму в HTML.
- Іконки мають бути в `src/img/sprite.svg`.
- Якщо SVG кольоровий, потрібно перевірити приклад підключення в `index.html` і використовувати той самий підхід.

Приклад:

```html
<load src="./partials/header.html" icon-path="img/sprite.svg#logo" icon-path2="img/sprite.svg#logo"/>
```

### PNG та зображення

- Основний формат усіх картинок — `PNG`.
- Це стосується також background-зображень.
- Картинки зберігаємо в папці `src/img/`.
- Оптимізація картинок уже підключена в `vite.config.js`, тому вручну додатково стискати всі зображення не потрібно.

Приклад background-зображення:

```css
.section {
  background-image: url('../img/background.png');
}
```
Шлях до зображень відносний і пишеться відносно основного файлу!

### Swiper

- Swiper підключаємо тільки через npm.
- Для ініціалізації Swiper використовуємо selector `id`.
- Класи `swiper`, `swiper-wrapper`, `swiper-slide` дозволені, тому що вони потрібні самій бібліотеці Swiper.
- У власному JavaScript не шукаємо елементи через класи.
- Уся картка має бути елементом `.swiper-slide`.
- Не ініціалізуємо Swiper через випадкові класи секції.

Встановлення:

```bash
npm install swiper
```

Приклад HTML-структури:

```html
<div id="reviews-swiper" class="swiper">
  <div class="swiper-wrapper">
    <article class="swiper-slide">
      <!-- вся картка всередині swiper-slide -->
    </article>
  </div>
</div>
```

Приклад JS:

```js
import Swiper from 'swiper';
import 'swiper/css';

const reviewsSwiper = new Swiper('#reviews-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
});
```

## Структура проєкту

```text
STP-12934/
├── src/
│   ├── index.html
│   ├── main.js
│   ├── css/
│   │   ├── styles.css
│   │   ├── reset.css
│   │   ├── base.css
│   │   ├── container.css
│   │   ├── animations.css
│   │   ├── header.css
│   │   ├── hero.css
│   │   ├── faq.css
│   │   └── footer.css
│   ├── js/
│   │   ├── burgerMenu.js
│   │   ├── faq.js
│   │   └── swiper.js
│   ├── partials/
│   │   ├── header.html
│   │   ├── hero.html
│   │   ├── faq.html
│   │   └── footer.html
│   └── img/
│       ├── sprite.svg
│       └── *.png
├── package.json
├── vite.config.js
└── README.md
```

## Як усе підключається

### HTML

`src/index.html` — головний HTML-файл. У ньому підключаються всі partial-файли:

```html
<load src="./partials/header.html" />
<load src="./partials/hero.html" />
<load src="./partials/faq.html" />
<load src="./partials/footer.html" />
```

### CSS

`src/index.html` підключає тільки один головний CSS-файл:

```html
<link rel="stylesheet" href="./css/styles.css" />
```

У `src/css/styles.css` імпортуються всі інші CSS-файли:

```css
@import url('./reset.css');
@import url('./base.css');
@import url('./container.css');
@import url('./header.css');
@import url('./faq.css');
@import url('./footer.css');
```

### JavaScript

`src/index.html` підключає тільки один головний JS-файл:

```html
<script type="module" src="./main.js"></script>
```

У `src/main.js` імпортуються окремі JS-файли з папки `src/js/`:

```js
import './js/burgerMenu';
import './js/faq';
import './js/swiper';
```

## Робота з задачами

1. Оберіть задачу на GitHub Project board.
2. Перемістіть її в колонку `In progress` або напишіть коментар, що берете задачу в роботу.
3. Створіть окрему гілку для своєї задачі.
4. Виконуйте тільки свою секцію або компонент.
5. Відкрийте Pull Request після завершення.
6. Не мержіть Pull Request самостійно, якщо це не дозволено власником репозиторію.

## Формат роботи з секцією

Для кожної секції бажано створювати три окремі файли:

```text
src/partials/section-name.html
src/css/section-name.css
src/js/section-name.js
```

Після цього підключити їх у головних файлах:

```html
<!-- src/index.html -->
<load src="./partials/section-name.html" />
```

```css
/* src/css/styles.css */
@import url('./section-name.css');
```

```js
// src/main.js
import './js/section-name';
```

## Командні домовленості

- Не змінюйте чужі секції без узгодження.
- Не видаляйте файли інших учасників.
- Перед початком роботи оновіть свою локальну гілку.
- Перед Pull Request перевірте, що проєкт запускається без помилок.
- Код має відповідати правилам цього README.
