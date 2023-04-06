// Создать div
const div = document.createElement("div");
// Добавить к нему класс wrapper
div.classList.add("wrapper");
// Поместить его внутрь тэга body
document.body.appendChild(div);
// Создать заголовок H1 
const h1 = document.createElement("h1");
h1.innerText = "DOM (Document Object Model)";
// Добавить H1 перед DIV с классом wrapper
div.insertAdjacentElement("beforebegin", h1);
// Создать список 
// Добавить в него 3 элемента с текстом ", , "
const itemList = `
                <ul>
                    <li>один</li>
                    <li>два</li>
                    <li>три</li>
                </ul>
`

// Поместить список внутрь элемента с классом wrapper
div.innerHTML = itemList;
// =================================================
// Создать изображение
const img = document.createElement("img");
// Добавить следующие свойства к изображению
// 1. Добавить атрибут source
img.src = "https://picsum.photos/240";
// 2. Добавить атрибут width со значением 240
img.width = 240;
// 3. Добавить класс super
img.classList.add("super");
// 4. Добавить свойство alt со значением "Super Man"
img.alt = "super Man";
// Поместить изображение внутрь элемента с классом wrapper
div.appendChild(img);
// Используя HTML строку, создать DIV с классом 'pDiv' + c 2-мя параграфами
const paragraph = `
                <div class="pdiv">
                    <p>Paragraph 1</p>
                    <p>Paragraph 2</p>
                </div>
`;
// Поместить этот DIV до элемента <ul></ul>
const ul = document.querySelector("ul");
ul.insertAdjacentHTML("beforebegin", paragraph);
// Добавить для 2-го параграфа класс text
const pdiv = document.querySelector(".pdiv");
pdiv.children[1].classList.add("text");
// Удалить 1-й параграф
pdiv.firstElementChild.remove();
// Создать функцию , 
// которая принимает 3 аргумента: 
const generateAutoCard = ((brand, color, year) => {
    return `
        <div class="autoCard">
            <h2>BRAND YEAR</h2>
            <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
            <button>Delete</button>
        </div> 
    `
})
// Функция должна возвращать разметку HTML:
// <div class="autoCard">
//   <h2>BRAND YEAR</h2>
//   <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
// </div>

// Создать новый DIV с классом autos
const autos = document.createElement("div");
autos.classList.add("autos");
// Создать 3 карточки авто, используя функцию generateAutoCard
const carsList = [
    {brand: 'Tesla', year: 2015, color: 'Красный'},
    {brand: 'Lexus', year: 2016, color: 'Серебристый'},
    {brand: 'Nissan', year: 2012, color: 'Черный'},
]

const carCards = carsList.map(car => {
    return generateAutoCard(car.brand, car.color, car.year);
}).join("");
// Поместить эти 3 карточки внутрь DIV с классом autos
autos.innerHTML = carCards;
// Поместить DIV c классом autos на страницу DOM - до DIV с классом wrapper
div.insertAdjacentElement("beforebegin", autos);
// Добавить кнопку Удалить на каждую карточку авто

// При клике на кнопку - удалять карточку из структуры DOM
// 1. Выбрать все кнопки
const buttons = document.querySelectorAll("button");
// 2. Создать функцию удаления
function handleClick(e){
    const delBtn = e.currentTarget;
    delBtn.closest(".autoCard").remove();
}
// 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку
buttons.forEach(button => {
    return button.addEventListener("click", handleClick);
})