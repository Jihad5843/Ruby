
document.querySelector(".form").addEventListener("submit", function (e) {
    e.preventDefault();

    const address = document.getElementById("Adderss").value.trim();
    const card = document.getElementById("card").value.trim();


    if (address === "") {
        alert("please enter the address");
        return;
    }

    if (card.length < 5) {
        alert("the number of letters must be more than 5");
        return;
    }


    alert("thanks for buying from Ruby's Shop!");
});

document.querySelector(".form").addEventListener("submit", function (e) {
    e.preventDefault();

    const fpass = document.getElementById("password").value.trim();
    const lpass = document.getElementById("password2").value.trim();

    if (fpass != lpass) {
        alert("passwords are not matching");
        return;
    }

    alert("thanks for thanks for choosing us");
});

document.querySelector(".form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("emaillogin").value.trim();
    const pass = document.getElementById("password").value.trim();

    alert("thanks for coming back!");
});