let
    carousel = $('.carousel'),
    caption = $('.caption-area'),
    item = $('div.carousel-item'),
    carouselData = [
        ["My investment plan made easy with ginger!"],
        ["I thought investment was hard, but thanks to ginger!"],
        ["I thought investment was hard, but thanks to ginger! My investment plan made easy with ginger!"]
    ]
$(function updateCarouselText() {
            let carouselItems = carousel.find('.carousel-item');
            console.log(carouselItems);
            carouselItems.each(function(index) {
                if ($(this).hasClass('active')) {
                    caption.text(carouselData[index][0]);

                }
            });

        }; updateCarouselText();

        carousel.on('slid.bs.carousel', function() {
            updateCarouselText();
        });

        // alert("I'm here");