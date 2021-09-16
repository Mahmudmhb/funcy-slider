const image = [
    "pic-1.jpeg",
    "pic-2.jpeg",
    "pic-3.jpeg",
    "pic-4.jpeg",
    "pic-5.jpeg"
];
let imgeIndex = 0;
const imgElement = document.getElementById('img-silder');
setInterval(() => {
    if (imgeIndex >= image.length) {
        imgeIndex = 0;
    }
    imgElement.setAttribute('src', image[imgeIndex]);
    imgeIndex++;
}, 2000)