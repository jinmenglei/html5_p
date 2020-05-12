const ins_showbox = new C_mode_showbox();
const ins_frame = new C_mode_frame();
const ins_dict_mode_index = {};
window.onload = function () {
    add_lister();
    ins_showbox.start();
    ins_frame.start();
    const ins_mode_start = new C_mode_start();
    ins_dict_mode_index[mode_index.Page_start] = ins_mode_start;
    ins_mode_start.start();
}