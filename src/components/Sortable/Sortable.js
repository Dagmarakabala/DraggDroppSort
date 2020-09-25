import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable';

const Sortable = {
  settings: {
    target: '.sortable',
  },
  init(args) {
    this.settings = $.extend(true, this.settings, args);
    if ($(this.settings.target).length > 0) {
      this.catchDOM(this.settings);
      this.addSortable();
    }
  },
  catchDOM(settings) {
    const target = $(settings.target);
    this.$target = {
      root: target,
    };
  },
  addSortable() {
    
    $(".sortable__box.-first").sortable({
      addClasses: false,
      over: function( event, ui ) {
        $(ui.item).addClass( "-yellow" );
      },
      out: function( event, ui ) {
        const items = $(this).find('.sortable__item');
        items.each((index, element) => {
          if(ui.item[0] == element) {
            if(`id-${index}` == element.id) {
              $(ui.item).removeClass( "-yellow" );
              $(ui.item).removeClass( "-red" );
              $(ui.item).addClass( "-green" );
            }
            else {
              $(ui.item).removeClass( "-yellow" );
              $(ui.item).addClass( "-red" );
            }
          }
          
        });
      },
    });
    $(".sortable__box.-second").sortable({
      addClasses: false,
      axis: 'y',
      opacity: 0.3,
      cursor: "move",
      
    });
    $(".sortable__box.-third").sortable({});
  }

};
export default Sortable;