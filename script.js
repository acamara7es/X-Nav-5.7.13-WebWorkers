jQuery(document).ready(function() {
    $("#search_button").click(function() {
        $("#result").text("");
        var worker = new Worker("worker.js");
        var number = $("#input").val();
        worker.postMessage(number);
        worker.onmessage = function(event) {
            var result = event.data;
            if (result[result.length-1] === -1){
                worker.terminate();
                result.pop();
            }
            $("#result").append(result.join("\t"));
        };
    });
});
