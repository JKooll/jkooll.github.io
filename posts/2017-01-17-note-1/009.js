$(function() {
    $("span").click(function() {
        var thisEle = $("#para").css("font-size");

        //将字符串转换成浮点数，10代表十进制
        var textFontSize = parseFloat(thisEle, 10);

        console.log(thisEle);
        console.log(textFontSize);

        //获取字体大小单位 px...
        var unit = thisEle.slice(-2);

        var cName = $(this).attr("class");

        if(cName == "bigger") {
            textFontSize += 2;
        } else if(cName == "smaller") {
            textFontSize -= 2;
        }

        $("#para").css("font-size", textFontSize + unit);
    });
});
