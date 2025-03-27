
var MODAL_ACTIVE_CLASS_NAME = 'order-modal-active';
var abc = "abc" 
var formModal = document.querySelector('#order-form-modal');
var form = document.querySelector('#order-form');

var openFormModalBtn = document.querySelectorAll('.open-order-modal-btn');
var launchBtn = document.querySelector('#launch-btn');
var closeBtns = document.querySelectorAll('.order-close-btn');


var closeFormModal = () => {
    formModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
};


closeBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        closeFormModal();
    })
})


for (i = 0; i < openFormModalBtn.length; i++) { 
    openFormModalBtn[i].addEventListener('click', () => {
        formModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
    })
}