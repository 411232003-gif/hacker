alert("sigit hadi pratama di sini");
console.log("sigit" + " " + "hadi" + " " + "pratama");

switch ("hadi") {
    case "sigit":
        console.log("true");
        break;
    case "hadi":
        console.log("true");
        break;
    case "pratama":
        console.log("true");
        break;
    default:
        console.log("false");
        break;
}
client();
if (typeof client === 'function') {
    client();
}
if (typeof server === 'function') {
    server();
}
if (typeof Element === 'function') {
    Element();
}
else {
    console.log("Element is not a function");
}