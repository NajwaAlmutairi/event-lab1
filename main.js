

let textElement = document.getElementById('text');
let imageElement = document.getElementById('image');

function changeText() {
    textElement.textContent = "new text";
}

function fontSizebigger() {
    textElement.style.fontSize = '3rem';
}

function fontSizeSmaller() {
    textElement.style.fontSize = '1.5rem';
}

function changeTextColor() {
    textElement.style.color = 'green';
}

function changeBackgroundColor() {
    textElement.style.backgroundColor = 'yellow'
}

function changeImage() {
    // console.log(imageElement.src);
    
    if( imageElement.src == 'http://127.0.0.1:5501/logo.jpg'){
        imageElement.src = 'sky.jpeg';
    }else{
        imageElement.src='logo.jpg'
    }

}
