function mode_button_click() {
    console.log("mode_button_click was clicked")
    if ($(document.getElementById("mode_button")).text() === "切换到 自动驾驶"){
        mode_showbox_show(show_box_index.show_box_turn_at);
    }else{
        mode_showbox_show(show_box_index.show_box_turn_mt);
    }
}