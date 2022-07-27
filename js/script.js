document.addEventListener('DOMContentLoaded', () => {

    const question = document.querySelectorAll('.question');
    const qContainers = document.querySelectorAll('.q_container')

    question.forEach(item => {
        item.addEventListener('click', () => {
            if (!item.parentElement.classList.contains('show')) {
                qContainers.forEach(container => {
                    container.classList.remove('show');
                });
            }
            item.parentElement.classList.toggle('show');
        });
    })

});