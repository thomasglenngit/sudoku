import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';



import { fileName } from './ping-pong';

$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();
    const goal = $('#number').val();
    const output = sudoku(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});