const ul = document.querySelector('ul li:first-child');
const cutclass = document.querySelector('ul li:nth-child(3)');


const para = document.getElementById('hello');
const reelpara = document.querySelector('.divi p:first-child');



console.log(
    para.nodeName,
    para.innerText,
)


para.innerText = "this have been erasse";

//textContent vas tout garder et tout montrer dans la consolememe ce qui a été effacé 
//cobntrairement a innerText qui ne vas pas montré ce qui est "hidden"


para.setAttribute('hidden', 'hidden')
para.removeAttribute('hidden')

console.log(ul.getAttribute('id'))

console.log(
    ul.classList.remove('green')
    )


setInterval(() => {
        ul.classList.toggle('red')
    }, 0500);


    setInterval(() => {
        reelpara.classList.add('flasher')
    }, 3000);


    setInterval(() => {
        cutclass.classList.remove('green')
    }, 5000);

    

/*
console.log(
    reelpara.style.color = 'yellow', 
    reelpara.style.border = "2px solid black",
    reelpara.style.backgroundColor = "red",
    console.log(getComputedStyle(reelpara).fontWeight)
)
*/


nouveauUl.innerHTML = "proot"
/*
const nouveauP = document.createElement('p');
nouveauP.innerHTML = "cecie est un nouveau para qui a été add avec le JS"
document.querySelector('ul').append(nouveauP)
*/






/*--------------------    LODASH EXEMPLE 

const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = _.filter(numbers, num => num % 2 === 0);

console.log(filteredNumbers);


    const arr = [1, 2, 3, 4, 5];
    const chunks = _.chunk(arr, 2);
    console.log(chunks);

       -----------------------------*/


        sucre syntactique

       const [firstNotes, ...toutesAutres] = [12, 22, 32, 77,]
       console.log(toutesAutres)


       ---------------------
/*
       canDrive({age: 20, pays: "Canada", hauteur: 20})

       function canDrive ({age, pays, hauteur}) {
        console.log(pays);
        return true
       }

*/


const table = [1 ,3 , 4];
console.log([...table, 2, 7])


 les timers
/*
proot = "kjrbg"

setTimeout(()=> {
  console.log("yo cest long")
}, 3000)

console.log(`yo helo patatos ${proot}`);
*/

/*
let i = 0;

const inter = setInterval(() => {
i++
console.log(`le décompte est de ${i}`)
if (i > 7){
    clearInterval(inter)
}
}, 1500
);
*/

/*
 function finalCompt(topCount){
    console.log(topCount)
    if (topCount === 0){
        return;
    }
    setTimeout(() => {
        finalCompt(topCount - 1)
    }, 1500
    )
}

finalCompt(5)
*/


const power = new Promise((resolve, rejette) => {
    resolve(7)
})


power 

.then((num) =>{
    console.log('echec')

})
.then((num) => console.log("number iss....");)













