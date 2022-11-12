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

const span = compteur?.querySelector('span')

const increment = (e: Event) => {
  e.preventDefault();
  i ++
  if (span) {
    localStorage.setItem('span', i.toString());
    span.innerText = JSON.parse(localStorage.getItem('span') || '{}')
  }
  console.log(i)
}

compteur?.addEventListener('click', increment);

