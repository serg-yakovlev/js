'use strict'
// var _get_game_fields = () => {
//     return $("#game_window .col").get();
// }


// // for (var i = 0; i < game_fields.length; ++i) {
//     //     $(game_fields[i]).addClass("active");
//     // }


// const game_fields = _get_game_fields();
// console.log(game_fields);
// const field = new Array(game_fields.length);

// var show = (show_list) => { 
//     game_fields.forEach((element, index) => {
//         if (show_list[index] == 1)
//             $(element).addClass("active");
//     });
// }

// var clean = () => {
//     game_fields.forEach((element) => {
//         if ($(element).hasClass("active")) {
//             $(element).removeClass("active");
//         }
//     });
// }

// var set_col = (i, j, value=1) => {
//     var len_str = 10;
//     field[(i*len_str)+j] = !!value
// }

// var init_field = () => {
//     clean();
//     for (var i = 0; i < field.length; ++i) {
//         field[i] = 0;
//     }
// }

class Fileld {

    width = 10;
    height = 20;

    constructor() {
        this.game_fields = $("#game_window .col").get();
        this.field = new Array();
        for (var i = 0; i < this.game_fields.length; ++i) {
            this.field[i] = false;
        }
    }

    init () {
        this clean()
        for (var i = 0; i < field.length; ++i) {
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

    show() {
        this.game_fields.forEach((element, index) => {
            if (show_list[index]) {
                $(element).addClass("active");
            }
        });
    }

    set_cell (i, j, value=false) {
        this.field[(i * width) + j] = !!value
    }
}




// set_col(6,5, 1);
// show(field);

// set_col(4,6, true);
// show(field);


// clean();

// for (var i = 0; i < field.length; i+= len_str) {
//     for (var j = 0; j < len_str; ++j) {
//         console.log(i+j);
//     }
// }

// field[(4*len_str)+4] = 1
// field[(6*len_str)+2] = 1
// show(field)