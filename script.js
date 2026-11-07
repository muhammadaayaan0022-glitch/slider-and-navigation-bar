let image =[
    "nature.jpeg","screenshot_2026-10_29_110453-removebg-preview.png","screenshot-11-07 071151.png"
];

let currentImage =0;

function nextImage(){
    currentImage++;
    if (currentImage >= image.length){
        currentImage=0;
    }

    updateImage();
}

function previousImage(){
    currentImage--;
    if(currentImage < 0){
        currentImage =image.length-1;
    }
    updateImage();
}


function updateImage(){
    document.getElementById("Slideimage").src=
     image[currentImage];


    document.getElementById("SlideNumber").innerHTML=
    "image" + (currentImage+1) + "of" + image.length;
}


function showMessage(){
    document.getElementById("messages").innerHTML="thank you for visiting our website";
}