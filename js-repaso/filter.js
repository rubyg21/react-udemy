//FILTER
const arr = [5,1,2,3,4]

// const r = arr.filter(el => el < 2)
// console.log(r);

const r = arr.filter((el,i) =>{
    console.log(i);
    return el > 2
})

console.log(r)


//MAP


