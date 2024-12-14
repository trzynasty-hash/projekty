const plotno = document.querySelector('#c');
const p = plotno.getContext('2d');
let painting = false;
let erasing = false;

function brush(){
    if(painting == true){
        painting = false;
        
        document.getElementById("b").style.backgroundColor = "lavender";
        document.getElementById("b").style.color = "rgb(111, 111, 255)";
        document.getElementById("b").style.border = "10px groove rgb(142, 142, 255;)";
        
    }
    else if(painting == false){
        painting = true;
        if(erasing == true){
            eraser();
        }
        document.getElementById("b").style.backgroundColor = "rgb(170, 170, 255)";
        document.getElementById("b").style.color = "rgb(219, 219, 255)";
        document.getElementById("b").style.border = "10px groove rgb(142, 142, 255);";
        
    }
}
function eraser(){
    if(erasing == true){
        erasing = false;
        
        document.getElementById("e").style.backgroundColor = "lavender";
        document.getElementById("e").style.color = "rgb(111, 111, 255)";
        document.getElementById("e").style.border = "10px groove rgb(142, 142, 255;)";
        
    }
    else if(erasing == false){
        erasing = true;
        if(painting == true){
            brush();
        }
        document.getElementById("e").style.backgroundColor = "rgb(170, 170, 255)";
        document.getElementById("e").style.color = "rgb(219, 219, 255)";
        document.getElementById("e").style.border = "10px groove rgb(142, 142, 255);";
        
    }
}

plotno.addEventListener("mousedown", () => {
    plotno.addEventListener("mousemove", paint);
});
plotno.addEventListener("mouseup", () => {
    plotno.removeEventListener("mousemove", paint);
});
plotno.addEventListener("mousedown", () => {
    plotno.addEventListener("mousemove", erase);
});
plotno.addEventListener("mouseup", () => {
    plotno.removeEventListener("mousemove", erase);
});



    

function paint(event){
    if(!painting) return;
    const Color = document.querySelector("#Color");
    p.fillStyle = Color.value;
    const rect = plotno.getBoundingClientRect();
    const x = event.clientX - rect.left - (Size.value/2); 
    const y = event.clientY - rect.top - (Size.value/2);
    p.fillRect(x, y ,Size.value, Size.value);
}
function erase(event){
    if(!erasing) return;
    const rect = plotno.getBoundingClientRect();
    const x = event.clientX - rect.left - (Size.value/2); 
    const y = event.clientY - rect.top - (Size.value/2);
    p.clearRect(x, y ,Size.value, Size.value);
}

const Size = document.querySelector("#Size");
const sizevalue = document.querySelector("#sizevalue");
Size.addEventListener('input', () => {
    sizevalue.textContent = Size.value;
});












