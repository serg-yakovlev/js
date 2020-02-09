'use strict'

class Field {

    constructor() {
    	this.width = 10;
    	this.height = 20;
        this.game_fields = $("#game_window .col").get();
        this.field = new Array();
        for (var i = 0; i < this.game_fields.length; ++i) {
            this.field[i] = false;
        }
    }

    clean() {
        this.game_fields.forEach((element) => {
            if ($(element).hasClass("active")) {
                $(element).removeClass("active");
            }
        });
    }

    init() {
        this.clean();
        for (var i = 0; i < field.length; ++i) {
            this.field[i] = false;
        }
    }


    show() {
        this.game_fields.forEach((element, index) => {
            if (this.field[index]) {
                $(element).addClass("active");
            }
        });
    }

    set_cell(i, j, value=false) {
        this.field[(i * this.width) + j] = !!value;

    }

    send_message(a,b="message ") {
	console.log(b+a);
    }

    set_figure(figure) {
	this.clean();
	for (var i = 0; i < figure.length; ++i) {
            this.field[(figure[i][0] * this.width) + figure[i][1]] = true;

        }
    }

    remove(figure) {
	for (var i = 0; i < figure.length; ++i) {
            this.field[(figure[i][0] * this.width) + figure[i][1]] = false;

        }
    }
}


class Figure {
    constructor() {
	this.message = "figure created";
	this.d_shift = 0;
	this.l_shift = 0;
	this.figures_list = [
		[[0,0], [1,0], [2,0], [3,0]],
		[[0,0], [0,1], [0,2], [0,3]],

		[[0,0], [1,0], [2,0], [3,0], [3,1]],
		[[0,1], [1,1], [2,1], [3,1], [3,0]],
		[[0,0], [0,1], [0,2], [0,3], [1,3]],
		[[1,0], [1,1], [1,2], [1,3], [0,3]],

		[[0,0], [1,0], [2,0], [3,0], [0,1]],
		[[0,1], [1,1], [2,1], [3,1], [0,0]],
		[[0,0], [0,1], [0,2], [0,3], [1,0]],
		[[1,0], [1,1], [1,2], [1,3], [0,0]],

		[[0,0], [0,1], [1,0], [1,1]]
	];
    }

    select(n) {
	this.figures_list = [
		[[0,0], [1,0], [2,0], [3,0]],
		[[0,0], [0,1], [0,2], [0,3]],

		[[0,0], [1,0], [2,0], [3,0], [3,1]],
		[[0,1], [1,1], [2,1], [3,1], [3,0]],
		[[0,0], [0,1], [0,2], [0,3], [1,3]],
		[[1,0], [1,1], [1,2], [1,3], [0,3]],

		[[0,0], [1,0], [2,0], [3,0], [0,1]],
		[[0,1], [1,1], [2,1], [3,1], [0,0]],
		[[0,0], [0,1], [0,2], [0,3], [1,0]],
		[[1,0], [1,1], [1,2], [1,3], [0,0]],

		[[0,0], [0,1], [1,0], [1,1]]
	];
	console.log("start select");
	console.log("before: d_shift ",figure.d_shift);
	this.figure_num = n;
console.log(this.figures_list[0][0], this.figures_list[1][0],this.figures_list[2][0], this.figures_list[3][0],this.figures_list[4][0], this.figures_list[5][0],this.figures_list[6][0], this.figures_list[7][0],this.figures_list[8][0], this.figures_list[9][0],this.figures_list[10][0])
	this.selected = this.figures_list[n];
console.log("after selection:",this.selected[0],this.selected[1],this.selected[2],	this.selected[3],this.selected[4]);
	for (var i = 0; i < this.selected.length; ++i) {
		this.selected[i][0] += this.d_shift;
		this.selected[i][1] += this.l_shift;
	}
	console.log("end select \n\n\n");
        }
    

    shift(left=0, down=0) {
	this.left = left;
	this.down = down;
	this.l_shift += this.left;
	this.d_shift += this.down;
	this.select(this.figure_num);
    }

    rotate() {
//      this.origin_list  = [0,1,2,3,4,5,6,7,8,9,10];
	this.rotated_list = [1,0,5,4,6,7,9,8,2,3,10];

	this.figure_num = this.rotated_list[this.figure_num];
	this.select(this.figure_num);
	    }
}



