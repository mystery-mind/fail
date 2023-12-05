peter_pan_song="";
harry_potter_theme_song="";
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function draw(){
    image(video, 0 , 0 ,380, 380);
}
function preload(){
    peter_pan_song=loadSound("music2.mp3");
    harry_potter_theme_song=loadSound("music1.mp3");
}
