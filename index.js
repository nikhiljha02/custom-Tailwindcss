let cssArray = {
    c_block: "display:block;",
    c_inline: "display:inline;",
    c_inline_block: "display:inline-block;",
    c_flex: "display:flex;",
    c_grid: "display:grid;",
    c_hidden: "display:none;",
    //width & height
    c_w_full: "width:100%;",
    c_h_full: "height:100%;",
    c_w_half: "width:50%;",
    c_h_half: "height:50%;",
    c_w_screen: "width:100vw;",
    c_h_screen: "height:100vh;",
    c_w_150: "width:150px",
    c_h_150: "height:150px",
    c_w_50: "width:50px",
    c_h_50: "height:50px",

    //padding
    c_p_5: "padding:50px;",
    c_p_2: "padding:20px;",
    c_pt_2: "padding-top:20px;",
    c_pb_2: "padding-bottom:20px;",
    c_pl_2: "padding-left:20px;",
    c_pr_2: "padding-right:20px;",

    //margin
    c_m_2: "margin:20px;",
    c_mt_2: "margin-top:20px;",
    c_mb_2: "margin-bottom:20px;",
    c_ml_2: "margin-left:20px;",
    c_mr_2: "margin-right:20px;",

    c_ml_7: "margin-left:70px;",
    c_m_auto: "margin:auto;",

    //flex box
    c_flex_row: "flex-direction:row;",
    c_flex_col: "flex-direction:column;",
    c_justify_center: "justify-content:center;",
    c_justify_between: "justify-content:space-between;",
    c_align_center: "align-items:center;",
    //colors

    c_bg_blue: "background-color:blue;",
    c_bg_green: "background-color:green;",
    c_bg_black: "background-color:black;",
    c_bg_white: "background-color:white;",

    c_tx_white: "color:white;",
    c_tx_black: "color:black;",
    c_tx_blue: "color:blue;",

    //text
    c_tx_center: "text-align:center;",
    c_tx_left: "text-align:left;",
    c_tx_right: "text-align:right;",

    c_tx_bold: "font-weight:bold;",
    c_tx_light: "font-weight:300;",
    c_tx_upper: "text-transform:uppercase;",
    c_tx_lower: "text-transform:lowercase;",

    //font size
    c_tx_1: "font-size:10px;",
    c_tx_2: "font-size:12px;",
    c_tx_3: "font-size:14px;",
    c_tx_4: "font-size:16px;",
    c_tx_5: "font-size:20px;",
    c_tx_6: "font-size:24px;",
    c_tx_7: "font-size:30px;",
    c_tx_8: "font-size:36px;",
    c_tx_9: "font-size:48px;",
    c_tx_10: "font-size:60px;",

    //border
    c_border: "border:1px solid black;",
    c_border_red: "border:5px solid red;",
    c_border_green: "border:5px solid green;",
    c_border_pink: "border:5px solid pink;",
    c_border_purple: "border:5px solid purple;",
    c_rounded: "border-radius:10px;",
    c_rounded_full: "border-radius:9999px;",
};

Object.keys(cssArray).forEach((ele) => {
    document.querySelectorAll(`.${ele}`).forEach((elem) => {
        elem.style.cssText += cssArray[ele];
    });
});
