

function openForm() {
    document.getElementById("registerForm").style.display = "block";
}

function closeForm() {
    document.getElementById("registerForm").style.display = "none";
}

window.onclick = function(event) {
    const popup = document.getElementById("registerForm");

    if (event.target == popup) {
        popup.style.display = "none";
    }
};
