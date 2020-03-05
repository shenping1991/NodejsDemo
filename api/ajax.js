// export default (type='GET', url='', data={}, async=true) => {
// 	return new Promise((resolve, reject) => { //定义一个promise
// 		type = type.toUpperCase();

// 		let requestObj;
// 		if (window.XMLHttpRequest) {
// 			requestObj = new XMLHttpRequest();
// 		} else {
// 			requestObj = new ActiveXObject;
// 		}

// 		if (type == 'GET') {
// 			let dataStr = ''; //数据拼接字符串
// 			Object.keys(data).forEach(key => {
// 				dataStr += key + '=' + data[key] + '&';
// 			})
// 			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
// 			url = url + '?' + dataStr;
// 			requestObj.open(type, url, async);
// 			requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// 			requestObj.send();
// 		}else if (type == 'POST') {
// 			requestObj.open(type, url, async);
// 			requestObj.setRequestHeader("Content-type", "application/json");
// 			requestObj.send(JSON.stringify(data));
// 		}else {
// 			reject('error type');
// 		}

// 		requestObj.onreadystatechange = () => {
// 			if (requestObj.readyState == 4) {
// 				if (requestObj.status == 200) {
// 					let obj = requestObj.response
// 					if (typeof obj !== 'object') {
// 						obj = JSON.parse(obj);
// 					}
// 					resolve(obj);
// 				}else {
// 					reject(requestObj);
// 				}
// 			}
// 		}
// 	})
// }
function ajax(json) {
    console.log(json.data); //=> data传入是{user:'bill',pass:'123456'}的格式，需要转换成 user=bill&pass=123456才能接入open的url里
    var ajax = new XMLHttpRequest(); 


if(json.type == 'get') {
ajax.open(json.type, json.url+'?'+ JsonToString(json), true);
// console.log('?user='+user.value + '&pass='+ pass.value);
// console.log(JsonToString(json));

//将数据发送
ajax.send();
}else if(json.type == 'post') {
    ajax.open(json.type, json.url, true); 
    ajax.setRequestHeader("Content-Type", 
    "application/x-www-form-urlencoded");
    //在post中，数据是放在send()里面的
    ajax.send(JsonToString(json));
}


//当状态码改变时的函数
ajax.onreadystatechange=function() {
    if(ajax.readyState == 4) {
        if(ajax.status >= 200 && ajax.status < 300 || ajax.status == 304) {
            //console.log(ajax.responseText);
            json.success(ajax.responseText);
        }else{
            //console.log('服务器错误');
            json.error();
        }
    }
}

console.log(ajax.responseText);  
}

function JsonToString(json) {
    var arr = [];
    for(var i in json.data) {
        //console.log(i+json.data[i]);  //=> userbill,pass123456
        arr.push(i+'='+json.data[i]);//字符串转数组
    }
    //console.log(arr);          
    //console.log(arr.join('&'));//数组转字符串
    return arr.join('&');
}