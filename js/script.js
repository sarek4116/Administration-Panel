// Graph

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
                // 4
                label: "Signups",
                // 5
                backgroundColor: '#8DBEC8',
                borderColor: '#8DBEC8',
                // 6
                data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
            },
            {
                label: "FTD",
                backgroundColor: '#F29E4E',
                borderColor: '#F29E4E',
                data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
            },
            {
                label: "Earned",
                backgroundColor: '#71B374',
                borderColor: '#71B374',
                data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
                // 7
                hidden: true,
            }
        ]
    },
});

// Hamburger Menu

document.querySelector('#hamburger').addEventListener('click', function () {
    document.querySelector('#sidebar').classList.toggle('show');
})

var sectionBtns = document.querySelectorAll('#sidebar .menu a')

// Section Changer

function addSectionBtnHandler(event) {
    document.querySelector('section.container.show').classList.remove('show');
    document.querySelector(event.target.getAttribute('href')).classList.add('show');
}

for (let i = 0; i < sectionBtns.length; i++) {
    sectionBtns[i].addEventListener('click', addSectionBtnHandler)
}

// Modals

const buttons = document.querySelectorAll('[data-target^="#modal"]');

function addBtnHandler(event) {
    document.querySelector(event.target.dataset.target).classList.add('show');
}

function closeModal() {
    document.getElementById('modal-1').classList.remove('show')
    document.getElementById('modal-2').classList.remove('show')
    document.getElementById('modal-3').classList.remove('show')
    document.getElementById('modal-4').classList.remove('show')
    document.getElementById('modal-5').classList.remove('show')
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", addBtnHandler)
}

// Quit Modal

document.querySelector('#cancel').addEventListener('click', function () {
    closeModal();
})

document.querySelector('#quit').addEventListener('click', function () {
    quit();
})

function quit() {
    window.location.replace("http://www.google.com");
}

document.querySelector('#modal-1').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
})

document.addEventListener('keyup', function (e) {
    if (e.keyCode === 27) {
        closeModal();
    }
})

// Login Modal

document.querySelector('#modal-2').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
})


// Chat Modal


document.querySelector('#modal-3').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
})


// Add Link Modal

document.querySelector('#modal-4').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
})

// Add Link Banner

document.querySelector('#modal-5').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
})