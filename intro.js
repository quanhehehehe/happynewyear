// Chọn nút "Ấn vào đây nè!"
var buttonActive = document.querySelector('.button button');
var slider3 = document.querySelector('.slider3'); // Tham chiếu slider3
var closeSlider3 = document.querySelector('.fa-xmark'); // Tham chiếu nút đóng slider

// Khi nhấn vào nút, hiển thị slider3
buttonActive.onclick = function() {
    slider3.classList.add("active"); // Thêm lớp 'active' để hiển thị slider3
};

// Khi nhấn vào nút đóng, ẩn slider3
closeSlider3.addEventListener('click', function() {
    slider3.classList.remove("active"); // Xóa lớp 'active' để ẩn slider3
});

// ------audio------------
var buttonSong = document.querySelector('.button');
var mySong = document.getElementById("song");
buttonSong.onclick = function() {
    if (mySong.paused) {
        mySong.play();
    }
}

// Chọn nút "Xem pháo hoa cùng tui!"
var newButton = document.getElementById('newButton');

// Thêm sự kiện click cho nút
newButton.addEventListener('click', function() {
    window.location.href = 'phaohoa.html'; // Chuyển hướng đến index.html
});

// Hiệu ứng xuất hiện sau 3 giây
setTimeout(function() {
    var buttonContainer = document.querySelector('.new-button-container');
    buttonContainer.classList.add('show'); // Thêm lớp 'show' để hiển thị nút
}, 3000); // Thay 'lôiz' bằng 3000 để đợi 3 giây