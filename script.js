jQuery(document).ready(function() {
    $("#search_button").click(function() {
        var worker = new Worker("worker.js");
        var number = $("#input").val();
        worker.postMessage(number);
        worker.onmessage = function(event) {
            var result = event.data;
            $("#result").html(result);
            worker.terminate();
        };
    });
});
