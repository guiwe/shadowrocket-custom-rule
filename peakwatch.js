var body = $response.body;
var obj = JSON.parse(body);

if (obj.content && obj.content.hasOwnProperty("isSubscriber")) {
    obj.content.isSubscriber = true;
    obj.content.productId = "pro";
}

body = JSON.stringify(obj);
$done({body});
