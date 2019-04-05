var prefix = "/ajax_hw_war_exploded";

function arrToStr(arr) {
    return arr.map(function (value) {
        var data = new Date(value.time);
        return data.toLocaleDateString() + " - "
            + data.toLocaleTimeString() + " : "
            + value.message;
    })
}

function showRes(result) {
    arr = arrToStr(result);
    if(arr.length>0){
        alert(arr.join('\n'));
    }else{
        alert("No data found");
    }
}

var RestGet = function() {

    $.ajax({
        type: 'GET',
        url:  prefix + "/MyData/",
        dataType: 'json',
        async: true,
        success: function(result) {
            console.log("GET");
            showRes(result);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
            alert(jqXHR.status + " " + jqXHR.responseText);
        }
    });

};

var RestPut = function() {

    var mess = document.getElementById("inp1").value;

    var JSONObject= {
        "time": Date.now(),
        "message": mess
    };

    $.ajax({
        type: 'PUT',
        url:  prefix + "/MyData",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(JSONObject),
        dataType: 'json',
        async: true,
        success: function(result) {
            console.log("PUT");
            showRes(result);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
            alert(jqXHR.status + " " + jqXHR.responseText);
        }
    });

};

var RestDelete = function() {

    var mess = document.getElementById("inp1").value;

    var JSONObject= {
        "time": Date.now(),
        "message": mess
    };

    $.ajax({
        type: 'DELETE',
        url:  prefix + "/MyData/",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(JSONObject),
        dataType: 'json',
        async: true,
        success: function(result) {
            console.log("DELETE");
            showRes(result);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
            alert(jqXHR.status + " " + jqXHR.responseText);
        }
    });

};