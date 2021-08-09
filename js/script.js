//toggle menu
$('#menu').click(function() {
    $('.toggle').toggleClass('active');
});

//scroll
$('body').scrollspy({ target: '.header__nav' })

//liquid
$(function() {
    var header = $(".liquid");
    $(window).scroll(function() {
            var scroll = $(window).scrollTop();
    
            if (scroll >= 200) {
                    header.removeClass('liquid').addClass("liquid-alt");
            } else {
                    header.removeClass("liquid-alt").addClass('liquid');
            }
    });
});

//toggler
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
const body = $(".body");

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        body.removeClass('body--light').addClass("body--dark");
    }
}

function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      body.removeClass('body--light').addClass("body--dark");
    }
    else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      body.removeClass('body--dark').addClass("body--light");
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);