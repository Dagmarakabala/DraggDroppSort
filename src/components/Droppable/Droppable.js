import $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/ui/widgets/droppable';

const Droppable = {
  settings: {
    target: '.droppable',
  },
  init(args) {
    this.settings = $.extend(true, this.settings, args);
    if ($(this.settings.target).length > 0) {
      this.catchDOM(this.settings);
      this.addDraggable();
    }
  },
  catchDOM(settings) {
    const target = $(settings.target);
    this.$target = {
      root: target,
    };
  },
  addDraggable() {
    $(".droppable__item.-square").draggable({
      addClasses: false,
    });
    $(".droppable__item.-circle").draggable({
      addClasses: false,
    });
    $( ".droppable__item.-dropSquare" ).droppable({
      accept: '.droppable__item.-square',
      tolerance: "fit",
      drop: function( event, ui ) {
        $( this )
          .addClass( "-accept" );
        $(".droppable__item.-square").draggable({disabled: "true"});
        if($('.droppable__item.-dropCircle').hasClass('-accept') && $('.droppable__item.-dropSquare').hasClass('-accept'))
          $('.droppable__title').text("Gratulacje");
      }
    });
    $( ".droppable__item.-dropCircle" ).droppable({
      accept: '.droppable__item.-circle',
      tolerance: "fit",
      drop: function( event, ui ) {
        $( this )
          .addClass( "-accept" );
        $(".droppable__item.-circle").draggable({disabled: "true"});
        if($('.droppable__item.-dropCircle').hasClass('-accept') && $('.droppable__item.-dropSquare').hasClass('-accept'))
          $('.droppable__title').text("Gratulacje");
      }
    
    });
  },

};
export default Droppable;