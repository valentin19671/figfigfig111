
let form = document.getElementById('dd')



document.getElementById('form-prochit').addEventListener('submit', (e)=> {
e.preventDefault()
})
// let day;
// let month;
// let year;

let id1 = document.getElementById('id1') 
let id2 = document.getElementById('id2')
let id3 = document.getElementById('id3')
let id4 = document.getElementById('id4')
let id5 = document.getElementById('id5')
let id6 = document.getElementById('id6')
let id7 = document.getElementById('id7')


let InputOne = document.getElementById('day')
let InputTwo = document.getElementById('month')
let InputThee = document.getElementById('year')








form.addEventListener('click',(e)=> {

    let day1 = document.getElementById('day').value
let mouth1 = document.getElementById('month').value
let year1 = document.getElementById('year').value

    if (!isNaN(day1) &  !isNaN(mouth1) & !isNaN(year1)){
        
        let day = Number(document.getElementById('day').value)
    let mouth = Number(document.getElementById('month').value)
    let year = Number(document.getElementById('year').value)


        let Arr1=Array.from(String(day), Number);
        let Arr2=Array.from(String(mouth), Number);
        let Arr3=Array.from(String(year), Number);
    
        id1.textContent=Math.abs(day%22)
        let sumDay=(Array.from(String(day), Number)).reduce((Sum, a) => Sum + a, 0)
        let sumMouth=(Array.from(String(mouth), Number)).reduce((Sum, a) => Sum + a, 0)
        let sumYear=(Array.from(String(year), Number)).reduce((Sum, a) => Sum + a, 0)
    
        id2.textContent=Math.abs((sumDay+sumMouth+sumYear)%22)
    
        punkt1id3=mouth+Math.abs(sumYear%22)
        punkt2id3=Math.abs(day%22)+mouth
        punkt3id3=punkt1id3+punkt2id3
        id3.textContent=Math.abs((punkt1id3+punkt3id3)%22)
    
        punkt1id4=mouth+Math.abs(sumYear%22)
        punkt2id4=Math.abs(day%22)
        punkt3id4=mouth+Math.abs(day%22)
        punkt4id4=punkt1id4+punkt3id4
        punkt5id4=mouth+punkt4id4
        id4.textContent=Math.abs(punkt5id4%22)
    
        punkt1id5=mouth+Math.abs(sumYear%22)+mouth
        id5.textContent=Math.abs(punkt1id5%22)
    
        punkt3id6=mouth+Math.abs(sumYear%22)
        punkt5id6=Math.abs(day%22)+mouth
        id6.textContent=Math.abs((punkt3id6+punkt5id6)%22)
    
        id7.textContent=Math.abs((mouth+Math.abs(sumYear%22)+Math.abs(day%22))%22)

    } else {
        alert('Ошибочка, введите число)')
    }


    



})




let blockFigura=document.querySelector('.block')
let button=document.querySelector('.button')
button.addEventListener('click',()=>{
    blockFigura.classList.remove('opacity0')
    blockFigura.classList.add('opacity1')
})


































