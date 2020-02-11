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
	this.d_shift = 0;
	this.r_shift = 0;
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
        console.log("start select");
        for (var fig = 0; fig<this.figures_list.length; ++fig) {
        console.log("\n\nfigure ", fig);
        for (var cell = 0; cell<this.figures_list[fig].length; ++cell) {
            console.log(this.figures_list[fig][cell][0], this.figures_list[fig][cell][1]);
        }
    }

	this.max_width_list =  [4,4,4,4,4,4,4,4,4,4, 2];
	this.init_width_list = [1,4,2,2,4,4,2,2,4,4, 2];
	this.max_width = this.max_width_list[n];
	this.init_width = this.init_width_list[n];
	this.figure_num = n;
	this.selected = this.figures_list[n];
	for (var i = 0; i < this.selected.length; ++i) {
		this.selected[i][0] += this.d_shift;
		this.selected[i][1] += this.r_shift;
	}
    }
    

    shift(right=0, down=0) {
	this.right = right;
	this.down = down;
	this.r_shift += this.right;
	this.d_shift += this.down;
	this.select(this.figure_num);
    }

    rotate() {
//  this.origin_list  = [0,1,2,3,4,5,6,7,8,9,10];
	this.rotated_list = [1,0,5,4,6,7,9,8,2,3,10];

	this.figure_num = this.rotated_list[this.figure_num];
	this.select(this.figure_num);
	    }
}



