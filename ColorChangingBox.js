let box = [
    [1, 1, 1], 
    [1, 1, 1],
    [1, 1, 1]
];

window.onload = function () {
    draw_box(box); 
}

function draw_box(box) {
    let box_html = generate_box_html(box);
    document.getElementById("box").innerHTML = box_html;
}

function generate_box_html(box) {
    let box_inner_html = "";
    for (let i = 0; i < box.length; i++) {

        let row_html = "<tr>";
        for (let j = 0; j < box[i].length; j++) {
            if (box[i][j] == 1) {
                row_html += "<td class=\"greenbox\"and onclick='square_click_handler(this)'></td>";
            } else if (box[i][j] == 2) {
                row_html += "<td class=\"redbox\"and onclick='square_click_handler(this)'></td>";
            }
        }
            
        row_html += "</tr>";
        box_inner_html += row_html;
    }

    return `<table>${box_inner_html}</table>`;
}

function square_click_handler(cell) {
    let col = cell.cellIndex;
    let row = cell.parentNode.rowIndex;
    change_color(box, row, col);
    draw_box(box);
}

let change_color = (box, row, col) => {
    if (box[row][col] == 1) {
        box[row][col] = 2;
        } else {
            box[row][col] = 1;
        }
}
