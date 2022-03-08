let i = 0;

const power = () => {
    document.getElementById('input_content').value = i;
    if (i < 360) {
        i += 20;
        image.style.transform = `rotate(${i}deg)`;

    } else {
        i = 0;
        image.style.transform = `rotate(${i}deg)`;
    }
}



const image = document.getElementById('image_content');
image.addEventListener('click', power);