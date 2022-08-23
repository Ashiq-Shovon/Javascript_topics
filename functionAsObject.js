function people(){
    const c2 = {
        x:20,
        y:30,
        arr : [3, 8,78 ]
    }
    console.log('hello');
    console.log(this.x +" val " +this.y + " array "+ this.arr[0]);
    return () =>{
        console.log('return');
    };
}
const c1 = {
    x:20,
    y:30,
    arr : [3, 8,78 ]
}

let peopleBind = people.bind(c1);
console.dir(people);
console.log(c1.arr[1]);
console.log(peopleBind());
people.author = "ashiq";
console.log(people.author);

console.log(people.name);
console.log(people.length);