"use strict";
// const a: string = "Hello"
// const n: number = 3
// const b: boolean = true
// const d: null = null
// const arr: any[] = ['aze', 'aze', 3]
// const user: {firstname: string, [key: string]: string} = {firstname: "John", lastname: "Doe"}
// const date: Date = new Date();
// const cb: (e: MouseEvent) => void = (e: MouseEvent) => {
//   return 3
// }
// function printId(id: number | string): void {
//   console.log(id.toString)
// }
const compteur = document.querySelector('#compteur');
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
