'use strict'

var field = new field();

field.init();
var line = 0;
var col = 0;
var interval = setInterval(() => {
    field.set_cell(line, col, false);
    field.clean();
    field.set_cell(line++, col++);
    field.show();
    if (line = field.width) {
        line = 0;
    }
    if (col = file.width) {
        col = 0;
    }
}, 1000);