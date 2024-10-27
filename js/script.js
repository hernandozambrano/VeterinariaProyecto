document.getElementById("menu-toggle").addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
});
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    const main = document.querySelector('main');

    sidebar.classList.toggle('open'); 
    if (sidebar.classList.contains('open')) {
        main.style.marginLeft = '220px'; 
    } else {
        main.style.marginLeft = '0'; 
    }
});
