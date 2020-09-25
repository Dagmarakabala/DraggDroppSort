import $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';

const Draggable = {
  settings: {
    target: '.draggable',
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
    $(".draggable__item.-yellow").draggable({
      addClasses: false,
    });
    $(".draggable__item.-red").draggable({
      addClasses: false,
      axis: "x"
    });
    $(".draggable__item.-blue").draggable({
      addClasses: false,
      axis: "y"
    });
  }

};
export default Draggable;