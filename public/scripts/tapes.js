var currentChannel = 1;
    var totalChannels = 5; 

    document.getElementById("play-video").addEventListener("click", function() {

        document.getElementById("video-container").style.display = "block";
        

        var video = document.getElementById("background-video");
        

        video.src = "tapes/video" + currentChannel + ".mp4";
        
     
        video.muted = false;
        
  
        video.play();
        
       
        currentChannel = (currentChannel % totalChannels) + 1;
        

        document.getElementById("play-video").innerText = "CHANNEL 0" + currentChannel;
    });
