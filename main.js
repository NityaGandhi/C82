var mouseevents = "";
var last_position_of_x, last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);
function  my_mousedown(e){
    mouseevents = "mousedown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseevents= "mouseleave";

}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseevents = "mouseup";

}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
     current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseevents =="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.lineWidth = "10px";

        console.log("Last position of x and y coordinates =");
        console.log("current position of mouse x is =" + current_position_of_mouse_x + ", current position of mouse y is=" + current_position_of_mouse_y) ;
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates =");
        console.log("x =" + current_position_of_mouse_x + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();

    
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}