document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        // remove active from all
        document.querySelectorAll('.nav-link').forEach(item => {
            item.classList.remove('active');
        });

        this.classList.add('active');
    });
});
