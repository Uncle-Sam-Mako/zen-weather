const close_change_location_modal = document.querySelector('.close_location_modal'),
open_change_local_modal = document.querySelectorAll('.change_location_btn'),
change_location_modal = document.querySelector('.change_location_modal');

open_change_local_modal.forEach(e => {
    e.addEventListener('click', () => {
        change_location_modal.style.display = 'block';
    })
})

close_change_location_modal.addEventListener('click', () => {
    change_location_modal.style.display = "none";
})