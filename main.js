Webcam.set({
width:300,
height:300,
image_format:"PNG",
PNG_quality:90
});
Webcam.attach("#camera");
function takeimage(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img id='snapshot' src='"+data_uri+"'>";
})
}

