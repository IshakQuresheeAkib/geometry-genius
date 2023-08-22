// document.getElementById('triangle-calc').addEventListener('click',function(e){
//     const triangleArea = document.getElementById('triangle-area');
//     const base = document.getElementById('base');
//     const height = document.getElementById('height');
//     triangleArea.innerText = base.value * height.value * 0.5;
//     // const base = parseFloat(e.target.parentNode.parentNode.childNodes[5].value);
//     // const height = parseFloat(e.target.parentNode.parentNode.childNodes[9].value);
//     // const area = base * height * 0.5;
//     return area;
// })

const listContainer = document.getElementById('areaList');

// easiest,simplified and functional way 
function getPrimaryValue (firstId,secondId){
    const firstInput = document.getElementById(firstId);
    const firstInputValue = parseFloat (firstInput.value);
    const secondInput = document.getElementById(secondId);
    const secondInputValue = parseFloat (secondInput.value)
    const result = (firstInputValue * secondInputValue);
    firstInput.value = '';
    secondInput.value = '';
    if (firstInputValue <= 0 || secondInputValue <= 0) {
        alert('Please Provide Valid Numbers!');
        return;
    } 
    return result;
}

// adding items to the cart
function addToCart(shapeType,area) {
    const div = document.createElement('div');
    const count = listContainer.childElementCount;
    div.classList.add('flex', 'justify-between', 'items-center', 'px-3');
    div.innerHTML = 
    `<p>${count+1}. ${shapeType}</p>
    <p>${area}cm<sup>2</sup></p>
    <button class ="btn btn-sm btn-info text-white normal-case text-sm">Convert to m2</button>
    `;
    listContainer.appendChild(div);
}

document.getElementById('triangle-calc').addEventListener('click',function (){
    const area = document.getElementById('triangle-area');
    const result = getPrimaryValue ("triangle-base","triangle-height");
    if (isNaN(result)){
        area.innerText = '';
        return;
    }
     const finalArea = (result * 0.5).toFixed(2);
     area.innerText = finalArea;
     addToCart('Triangle',finalArea);
       
})

document.getElementById('rectangle-calc').addEventListener('click',function (){
    const area = document.getElementById('rectangle-area');
    const result = getPrimaryValue ("rectangle-base","rectangle-height");
    if (isNaN(result)) {
        area.innerText = '';
        return;
    }
    const finalArea = result.toFixed(2);
    area.innerText = finalArea;   
    addToCart('Rectangle',finalArea);
})

document.getElementById('parallelogram-calc').addEventListener('click',function (){
    const area = document.getElementById('parallelogram-area');
    const result = getPrimaryValue ("parallelogram-base","parallelogram-height");
    if (isNaN(result)) {
        area.innerText = '';
        return;
    }
    const finalArea = result.toFixed(2);
    area.innerText = finalArea;   
    addToCart('Parallelogram',finalArea);   
})

document.getElementById('rhombus-calc').addEventListener('click',function (){
    const area = document.getElementById('rhombus-area');
    const result = getPrimaryValue ("rhombus-base","rhombus-height");
    if (isNaN(result)) {
        area.innerText = '';
        return;
    }
    const finalArea = (result * 0.5).toFixed(2);
    area.innerText = finalArea;
    addToCart('Rhombus',finalArea);  
})

document.getElementById('pentagon-calc').addEventListener('click',function (){
    const area = document.getElementById('pentagon-area');
    const result = getPrimaryValue ("pentagon-base","pentagon-height");
    if (isNaN(result)) {
        area.innerText = '';
        return;
    }
    const finalArea = (result * 0.5).toFixed(2);
    area.innerText = finalArea;
    addToCart('Pentagon',finalArea);  
})

document.getElementById('ellipse-calc').addEventListener('click',function (){
    const area = document.getElementById('ellipse-area');
    const result = getPrimaryValue ("ellipse-base","ellipse-height");
    if (isNaN(result)) {
        area.innerText = '';
        return;
    }
    const finalArea = (result * Math.PI).toFixed(2);
    area.innerText = finalArea;
    addToCart('Ellipse',finalArea);    
})



