function preload() {

}

function setup() {
canvas=createCanvas(310,310);
canvas.center();
video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

function draw() {
image(video,0,0,310,310);
}

function take_snapshot() {
save("FilterOfLipstick.png");
}

function modelLoaded() {
console.log("Pose net is intiallized");
}

function gotPoses (results) {
if (results.length>0) {
console.log(results);
console.log("Nose X = "+ results[0].pose.nose.x);
console.log("Nose Y = "+ results[0].pose.nose.y);
}
}