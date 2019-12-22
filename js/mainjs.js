// Search box
const input = document.getElementById("search");


function imageFilter() {
    let text = input.value.toLowerCase();
    const img = document.querySelectorAll("li a");

    for (let i = 0; i < img.length; i += 1) {
        let image = img[i].parentNode;
        let caption = img[i].getAttribute("data-title");

        if (caption.indexOf(text) > -1){
            image.style.display = "";
        }
        else {
            image.style.display = 'none';
        }
    }
}