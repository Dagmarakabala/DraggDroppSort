import 'babel-polyfill';
import $ from 'jquery';
import Draggable from './components/Draggable/Draggable';
import Droppable from './components/Droppable/Droppable';
import Sortable from './components/Sortable/Sortable';
$(document).ready(() => {
  Draggable.init();
  Droppable.init();
  Sortable.init();
});
