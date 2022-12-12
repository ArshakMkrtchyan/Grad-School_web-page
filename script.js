let about_more = document.querySelector('.about_more')
let about = document.querySelector('.about')

about.addEventListener('mouseenter', () => {
    about_more.style.display = 'block'
})

about_more.addEventListener('mouseleave', () => {
    about_more.style.display = 'none'
})


let boxes = document.querySelectorAll(".box");
let text;
let link;

for (let i = 0; i < boxes.length; i++) {
    text = document.createElement("p");
    text.setAttribute("class", "section1-box-text")
    link = document.createElement("p");
    link.setAttribute("class", "section1-box-link")

    boxes[i].addEventListener("mouseenter", () => {
        boxes[i].style.background = "orange";
        boxes[i].style.padding = "40px 60px";
        boxes[i].style.transition = "all .5s linear";

        if (boxes[i].classList.contains("section1-box1")) {
            text.innerHTML = "Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero."
            boxes[i].append(text);
            link.innerHTML = "MORE INFO.";
            boxes[i].append(link);
        }
        if (boxes[i].classList.contains("section1-box2")) {
            text.innerHTML = "Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero."
            boxes[i].append(text);
            link.innerHTML = "DETAILS";
            boxes[i].append(link);
        }
        if (boxes[i].classList.contains("section1-box3")) {
            text.innerHTML = "Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero."
            boxes[i].append(text);
            link.innerHTML = "READ MORE";
            boxes[i].append(link);
        }
    })

    boxes[i].addEventListener("mouseleave", () => {
        text.innerHTML = "";
        link.innerHTML = "";
        boxes[i].style.padding = "20px 60px";
        boxes[i].style.transition = "all .5s linear";
        boxes[i].style.background = "rgba(22, 34, 57, 0.95)";
    })
}


let sec_name = document.querySelectorAll('.sec_name')
let sec_info = document.querySelectorAll('.sec_info')
let id = document.getElementById('id')
let sec_title = document.querySelector('.sec_title')

for (let i = 0; i < sec_name.length; i++){
    sec_name[i].addEventListener('click', () => {
        for (let j = 0; j < sec_info.length+1; j++){
            id.style.opacity = '0'
            id.classList.remove('active_info')
            sec_info[i].style.opacity = '1'
            sec_info[j].style.opacity = '0'
        }
    })
}


let radio = document.querySelectorAll('.manual-btn')

let radios = document.querySelectorAll(".manual-btn");
for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("click", function () {
        for (let i = 0; i < radios.length; i++) {
            radios[i].classList.remove("active")
        }
        radios[i].classList.add("active")
    })
}
