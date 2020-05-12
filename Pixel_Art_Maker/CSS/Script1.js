// JavaScript source code

$("#sizePicker").submit(function (event) {
    event.preventDefault();

    var numRows = $("#inputHeight").val();
    var numColumns = $("#inputWidth").val();

    $("#pixelCanvas").empty();
    makeGrid(numRows, numColumns);
});

function makeGrid(numRows, numColumns) {
    for (var r = 0; r < numRows; r++) {
        $("#pixelCanvas").append("<tr></tr>");

        for (var c = 0; c < numColumns; c++) {
            $("tr").last().append("<td></td>");
        }
    }
};

$("#pixelCanvas").on("click mouseenter mousemove mouseleave mouseover", "td", function () {
    $(this).css("background-color", $("#colorPicker").val());
});


