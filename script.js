
// const inputElement = document.getElementById("get-user");
// const shortenButton = document.getElementById("search");


const txt1 = document.getElementById('get-user');
const btn1 = document.getElementById('search');
const out1 = document.getElementById('output1');
const out2 = document.getElementsByClassName("output-line");
var display = 0;

function fun1() {
    // out1.innerHTML = txt1.value


    if (out1.innerHTML = txt1.value) {
        out2.style.display = "block";
        display = 0;
    } else {
        out2.style.display = "none";
        display = 1;

    }
}
btn1.addEventListener('click', fun1);
const header = document.querySelector("header");
const menuToggler = document.querySelectorAll("#menu_toggle");

menuToggler.forEach(toggler => {
  toggler.addEventListener("click", () => header.classList.toggle("showMenu"))
})

// function out2(){
//     if(display == 1)
//     {
//         div.style.display = 'block'
//         display = 0;
//     }else
//     {
//         div.style.display = 'none'
//         display = 1;
//     }
// }


// shortenButton.addEventListener("click", () => {
//     const inputValue = inputElement.value;

//     if (inputValue) {
//         fetch("https://cleanuri.com/api/v1/shorten", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ url: inputValue }),
//         })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then((data) => {
//             if (data.error) {
//                 console.error("Error:", data.error);
//             } else {
//                 console.log("Shortened URL:", data.result_url);
//             }
//         })
//         .catch((error) => {
//             console.error("API Request Error:", error);
//         });
//     } else {
//         console.error("Input value is empty.");
//     }
// });

