$(document).ready(function () {

    const counterSection = document.querySelector('.counter-section');

    let started = false;

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(entry => {

            if (entry.isIntersecting && !started) {

                started = true;

                $('.counter').each(function () {

                    let $this = $(this);
                    let target = parseInt($this.attr('data-target'));
                    let originalText = $this.text().trim();

                    let symbol = '';

                    if (originalText.indexOf('+') !== -1) {
                        symbol = '+';
                    } else if (originalText.indexOf('%') !== -1) {
                        symbol = '%';
                    }

                    $({ countNum: 0 }).animate(
                        { countNum: target },
                        {
                            duration: 2000,
                            easing: 'swing',

                            step: function () {
                                $this.text(Math.ceil(this.countNum) + symbol);
                            },

                            complete: function () {
                                $this.text(target + symbol);
                            }
                        }
                    );

                });

            }

        });

    }, {
        threshold: 0.4
    });

    observer.observe(counterSection);

});