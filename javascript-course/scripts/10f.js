
   function toggle() {

        if (document.querySelector('.btn').classList.contains('is-toggled')) {
            document.querySelector('.btn').classList.remove('is-toggled')
        }
        else {
            document.querySelector('.btn').classList.add('is-toggled')
            document.querySelector('.btn2').classList.remove('is-toggled')
            document.querySelector('.btn3').classList.remove('is-toggled')
        }

    }

    function toggle2() {
        if (document.querySelector('.btn2').classList.contains('is-toggled')) {
            document.querySelector('.btn2').classList.remove('is-toggled')
        }
        else {
            document.querySelector('.btn2').classList.add('is-toggled')
            document.querySelector('.btn').classList.remove('is-toggled')
            document.querySelector('.btn3').classList.remove('is-toggled')
        }
    }
    function toggle3() {
         if (document.querySelector('.btn3').classList.contains('is-toggled')) {
            document.querySelector('.btn3').classList.remove('is-toggled')
        }
        else {
            document.querySelector('.btn3').classList.add('is-toggled')
            document.querySelector('.btn').classList.remove('is-toggled')
            document.querySelector('.btn2').classList.remove('is-toggled')
        }
        }