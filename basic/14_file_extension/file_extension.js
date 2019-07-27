
var fileName = "system.php";

//now split the file name

var file_split = fileName.split('.');

//pop the last element out

var file_extension = file_split.pop();

console.log(file_extension);