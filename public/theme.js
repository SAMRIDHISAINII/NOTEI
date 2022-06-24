
localStorage.setItem('noteit-theme', '');
const theme = localStorage.getItem('noteit-theme');
const body = document.body;
const toggle = document.getElementById("checkbox");
function darkTheme() {
    if (localStorage.theme != 'dark') {
        body.classList.toggle("dark-mode-body", true);
        localStorage.theme = 'dark';
    } else {
        body.classList.toggle("dark-mode-body", false);
        localStorage.theme = '';
    }
}

if (localStorage.theme == 'dark') {
    body.classList.add("dark-mode-body");
    toggle.checked = true;
} else {
    body.classList.remove("dark-mode-body");
    toggle.checked = false;
}