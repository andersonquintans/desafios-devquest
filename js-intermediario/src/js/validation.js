const input = document.querySelectorAll(".input");
const submit = document.getElementById("btn")


submit.addEventListener("click", function () {
    input.forEach(function (input) {
        if (input.value == "") {
            input.classList.add("invalid");
            input.nextElementSibling.classList.add("error")
        } else input.classList.add("valid");

    });
});
