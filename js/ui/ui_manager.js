function mode_dispatcher(mode) {
    console.log("mode_dispatcher" + mode)
    for (var index=0;index<mode_index_id.length;index++){
        $(document.getElementById(''+ mode_index_id[index])).hide();
    }
    if (mode === mode_index.Page_mt_mode) {
        $(document.getElementById("mode_button")).text("切换到 自动驾驶");
    }else{
        $(document.getElementById("mode_button")).text("切换到 手动驾驶");
    }
    $(document.getElementById(''+ mode_index_id[mode])).show();
    document.getElementById("mode").innerHTML = mode_title_list[mode];
}