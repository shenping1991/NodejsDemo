(function ($) {
    var u = {};
    var serverUrl = "/";
    var systemSuccess = "200";

    function parseArguments(url, data, fnSuc, fnErr, dataType, servertype) {
        if (typeof (data) == 'function') {
            dataType = fnSuc;
            fnSuc = data;
            data = undefined;
        }
        if (typeof (fnSuc) != 'function') {
            dataType = fnSuc;
            fnSuc = undefined;
        }
        if (typeof (fnErr) != 'function') {
            dataType = fnErr;
            fnErr = undefined;
        }
        var surl = "";
        if (servertype && servertype == "fileserver") {
            surl = u.fileUploadUrl
        }
        else {
            surl = serverUrl;
        }
        return {
            url: surl + url,
            data: data,
            fnSuc: fnSuc,
            fnErr: fnErr,
            dataType: dataType
        };
    }
    u.post = function (/*url,data,fnSuc,fnErr,dataType*/) {
        var argsToJson = parseArguments.apply(null, arguments);
        var json = {};
        var fnSuc = argsToJson.fnSuc;
        var fnErr = argsToJson.fnErr;
        argsToJson.url && (json.url = argsToJson.url);
        argsToJson.data && (json.data = argsToJson.data);
        if (argsToJson.dataType) {
            var type = argsToJson.dataType.toLowerCase();
            if (type == 'text' || type == 'json') {
                json.dataType = type;
            }
        } else {
            json.dataType = 'json';
        }
        json.type = 'post';
        json.success = function (ret) {
            if (ret && ret.error == systemSuccess) {
                fnSuc && fnSuc(ret);
            }
            else {
                fnErr && fnErr(ret);
            }
        };
        json.error = function (XMLHttpRequest, txtStatus, errorThrown) {
            console.log('ajax请求失败');

            console.log(XMLHttpRequest);
            console.log(txtStatus);
            console.log(errorThrown);

            console.log('服务器连接失败，接收到非法json数据格式' + json.url);
            //console.log(json.data);
        };
        $.ajax(json);
    };

    $ajaxs = u;
})(jQuery);