var navitem = document.querySelectorAll('nav ul li a');
        var sections = document.querySelectorAll('section');

        window.onscroll = function() {
            var scrollPos = window.pageYOffset || document.documentElement.scrollTop;

            sections.forEach(function(div, i) {
                if (div.offsetTop <= scrollPos && (div.offsetTop + div.offsetHeight) > scrollPos) {
                    navitem.forEach(function(section) { section.classList.remove('active'); });
                    navitem[i].classList.add('active');
                }
            });
        };