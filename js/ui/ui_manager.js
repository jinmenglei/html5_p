function mode_dispatcher(mode) {
    console.log("mode_dispatcher" + mode)
    for (var index=0;index<mode_index_id.length;index++){
        $(document.getElementById(''+ mode_index_id[index])).hide();
    }
    $(document.getElementById(''+ mode_index_id[mode])).show();
    document.getElementById("mode").innerHTML = mode_title_list[mode];
}