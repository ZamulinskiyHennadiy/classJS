
//Завдання 1: Клас, що описує коло
class Circle {
  constructor(radius) {
    this._radius = radius;  // приватне поле для збереження радіусу
  }

  // Getter для отримання радіуса
  get radius() {
    return this._radius;
  }

  // Setter для зміни радіуса
  set radius(newRadius) {
    if (newRadius > 0) {
      this._radius = newRadius;
    } else {
      console.log("Радіус має бути більшим за 0");
    }
  }

  // Властивість для отримання діаметра
  get diameter() {
    return this._radius * 2;
  }

  // Метод для обчислення площі кола
  calculateArea() {
    return Math.PI * Math.pow(this._radius, 2);
  }

  // Метод для обчислення довжини кола
  calculateCircumference() {
    return 2 * Math.PI * this._radius;
  }
}

// Приклад використання класу
const myCircle = new Circle(5);
console.log("Радіус:", myCircle.radius); // 5
console.log("Діаметр:", myCircle.diameter); // 10
console.log("Площа:", myCircle.calculateArea().toFixed(2)); // 78.54
console.log("Довжина кола:", myCircle.calculateCircumference().toFixed(2)); // 31.42

// Змінимо радіус
myCircle.radius = 10;
console.log("Новий радіус:", myCircle.radius); // 10
console.log("Нова площа:", myCircle.calculateArea().toFixed(2)); // 314.16


//Завдання 2: Клас маркера

class Marker {
  constructor(color, ink) {
    this.color = color; // колір маркера
    this.ink = ink; // кількість чорнил у відсотках
  }

  // Метод для виведення тексту
  print(text) {
    let inkNeeded = text.replace(/\s+/g, '').length * 0.5; // 0.5% на кожен символ без пробілів

    if (this.ink >= inkNeeded) {
      console.log(`%c${text}`, `color: ${this.color}`);
      this.ink -= inkNeeded; // зменшуємо кількість чорнил
    } else {
      let printableCharacters = Math.floor(this.ink / 0.5); // скільки символів можна вивести
      let printableText = text.slice(0, printableCharacters);
      console.log(`%c${printableText}`, `color: ${this.color}`);
      this.ink = 0; // чорнила закінчилися
    }

    console.log(`Залишок чорнил: ${this.ink.toFixed(2)}%`);
  }
}

// Клас, що додає метод для заправки
class RefillableMarker extends Marker {
  refill() {
    this.ink = 100; // Заправляємо маркер до 100%
    console.log("Маркер заправлений");
  }
}

// Приклад використання класу
const myMarker = new RefillableMarker('blue', 10);
myMarker.print("Hello World!"); // Виведе частину тексту або весь, в залежності від чорнил
myMarker.refill();
myMarker.print("Hello again!"); // Виведе весь текст, тому що маркер заправлений


//Завдання 3: Клас для таблиці працівників
class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }

  // Метод для генерації HTML-коду таблиці
  getHtml() {
    let html = `<table border="1">
                  <tr>
                    <th>Ім'я</th>
                    <th>Посада</th>
                    <th>Зарплата</th>
                  </tr>`;

    this.employees.forEach(employee => {
      html += `<tr>
            <td>${employee.name}</td>
            <td>${employee.position}</td>
            <td>${employee.salary}</td>
            </tr>`;
    });

    html += `</table>`;
    return html;
  }
}

// Приклад використання класу
const employees = [
  new Employee('John Doe', 'Manager', 3000),
  new Employee('Jane Smith', 'Developer', 2500),
  new Employee('Sam Johnson', 'Designer', 2000)
];

const empTable = new EmpTable(employees);
document.body.innerHTML = empTable.getHtml(); // Виведе таблицю на екран


//Додав практики (Для кращого вивчання данної теми)
//Практика 1 
class book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  // Метод класу
  getBookInfo() {
    return `${this.title} ${this.author} ${this.year}`;
  }
}

//Створення об'єкту класу 
const myBook = new book('Bahmoot', 'Miroslav', '2024');
console.log(myBook.getBookInfo());

//Практика 2

class Zoo {
  constructor(name, local, year) {
    this.name = name;
    this.local = local;
    this.year = year;
  }

  getZooInfo() {
    return `${this.name} ${this.local} ${this.year}`;
  }
}

const myZoo = new Zoo('Monkey', `Africa`, `5`);
console.log(myZoo.getZooInfo());