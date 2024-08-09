const GameName = "Color Changing Box";
let my_box = [
    [1, 1, 1], 
    [1, 1, 1],
    [1, 1, 1]
];

window.onload = function () {
    document.getElementById("title").innerHTML = GameName;
    draw_box(my_box);
    document.getElementById("description").innerHTML = description;
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
    change_color(my_box, row, col);
    draw_box(my_box);
}

let change_color = (box, row, col) => {
    if (box[row][col] == 1) {
        box[row][col] = 2;
        } else {
            box[row][col] = 1;
        }
}

let game_colors = function(){
    return "green and red";
    };
let description = `There are ${game_colors()} colors in the game.`;

function change_color_of_box(event){
    event.preventDefault();
  
    let ColorNumber = document.getElementById('ColorNumber').value;
    if(ColorNumber == 1){
        draw_green_box(my_box);
    }else if(ColorNumber == 2){
        draw_red_box(my_box);
    }else {
        alert("Name must be 1 or 2");
    }
}

function draw_green_box(box){
    for (let i = 0; i < box.length; i++) {
        for (let j = 0; j < box[i].length; j++) {
            box[i][j] = 1;
        }
    }
    draw_box(box);
}
function draw_red_box(box){
    for (let i = 0; i < box.length; i++) {
        for (let j = 0; j < box[i].length; j++) {
            box[i][j] = 2;
        }
    }
    draw_box(box);
}
  
const form = document.getElementById('form');
form.addEventListener('submit', change_color_of_box);
