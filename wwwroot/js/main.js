$(function() {
    $('.something').on('click', function () {
        console.log("Horsin' Around");
    });
    
    $('.scroll_trigger').on('click', function () {
        let scrollTrigger = $(this);
        let screenWidth = $(window).width();
        let scrollContainer = $('.scroll', $(this).parent());
        let scrollContainerWidth = scrollContainer[0].scrollWidth;
        let scrollAmount = $(this).hasClass('scroll_right') ? 300 : -300;
        let scrollContainerLeftPosition = scrollContainer.scrollLeft();
        let firstScrollItem = $('.card:first-child');
        
        scrollContainer.css('scroll-snap-type', 'none');
        
        scrollContainer.stop().animate({scrollLeft: scrollContainerLeftPosition + scrollAmount}, 100, function () {
            scrollContainer.css('scroll-snap-type', 'x mandatory');

            let scrollItemLeftPosition = Math.abs(firstScrollItem.offset().left) + screenWidth;
            let endEdgeDiff = Math.abs(scrollItemLeftPosition - scrollContainerWidth) - 50;
            let startingEdgeDiff = Math.abs(scrollItemLeftPosition - screenWidth) - 50;

            $('.scroll_trigger').removeClass('disabled');
            
            if(!endEdgeDiff) {
                console.log('at the end');
                scrollTrigger.addClass('disabled');
            }
            else if(!startingEdgeDiff) {
                console.log('at the beginning');
                scrollTrigger.addClass('disabled');
            }
        });
        
        return false;
    });
});