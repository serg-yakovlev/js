'use strict'

var figure_number = 3;
var is_rotated = 1;
var down_shift = 2;
var right_shift = 2;
var show_all_timer = 1500;
var figure_moving_timer = 1000;

var field = new Field();
var figure = new Figure();

figure.down=down_shift;
figure.select(figure_number);
var figure_width = figure.init_width;
if (is_rotated) {figure_width = figure.max_width};
field.set_figure(figure.selected);

show_all_figures();
setTimeout(go_on, show_all_timer);

function go_on() {
	setInterval(rotate_and_shift, figure_moving_timer);
}

function rotate_and_shift() {
	var next_r_shift = 0;
	field.remove(figure.selected);
	figure.shift(figure.right, figure.down);
	if (is_rotated) {figure.rotate()};
	if (figure.d_shift>19) {
		next_r_shift = figure.r_shift + right_shift;
			if (figure.r_shift>(9 - figure_width)) {
				next_r_shift = 0;
			}
		figure = new Figure();
		figure.down = down_shift;
		figure.r_shift = next_r_shift;
		figure.select(figure_number);
	}
	field.set_figure(figure.selected);
	field.show();
}


function show_all_figures() { 
	var field = new Field();
	field.init();

	var n = 0;
	var down = 0;
	var right = 0;
	figure = new Figure();
	figure.select(n);
	figure.shift(right, down);
	field.set_figure(figure.selected);

	n = 1;
	down += 5;
	figure = new Figure();
	figure.select(n);
	figure.shift(right, down);
	field.set_figure(figure.selected);

	n = 2;
	down += 2;
	figure = new Figure();
	figure.select(n);
	figure.shift(right, down);
	field.set_figure(figure.selected);

	n = 3;
	down += 5;
	figure = new Figure();
	figure.select(n);
	figure.shift(right, down);
	field.set_figure(figure.selected);

	n = 4;
	down += 5;
	figure = new Figure();
	figure.select(n);
	figure.shift(right, down);
	field.set_figure(figure.selected);

	n = 5;
	right = 5;
	down = 0;
	figure = new Figure();
	figure.select(n);
	figure.shift(right, down);
	field.set_figure(figure.selected);

	n = 6;
	down += 3;
	figure = new Figure();
	figure.select(n);
	figure.shift(right, down);
	field.set_figure(figure.selected);

	n = 7;
	right += 2;
	down += 2;
	figure = new Figure();
	figure.select(n);
	figure.shift(right, down);
	field.set_figure(figure.selected);

	n = 8;
	right = 5;
	down += 5;
	figure = new Figure();
	figure.select(n);
	figure.shift(right, down);
	field.set_figure(figure.selected);

	n = 9;
	down += 3;
	figure = new Figure();
	figure.select(n);
	figure.shift(right, down);
	field.set_figure(figure.selected);
	field.show();

	n = 10;
	right +=1;
	down += 4;
	figure = new Figure();
	figure.select(n);
	figure.shift(right, down);
	field.set_figure(figure.selected);
	field.show();
}