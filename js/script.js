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

    const sign_in_btn = document.querySelector('.sign_in_btn');
    const close_btn = document.querySelector('.close_btn');
    const box_form = document.querySelector('.box_form');
    const container_modal = document.querySelector('.container_modal')

    sign_in_btn.addEventListener('click', () => {
        container_modal.classList.remove('hide');
    })

    close_btn.addEventListener('click', () => {
        container_modal.classList.add('hide');
    })

    container_modal.addEventListener('click', () => {
        container_modal.classList.add('hide');
    })

    box_form.addEventListener('click', (e) => {
        e.stopPropagation();
    })


});