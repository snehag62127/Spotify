console.log("Welcome to Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement=new Audio("/songs/1.mp3");
let masterPlay=document.getElementById('masterPlay');
let songItemPlay=document.getElementById('songItemPlay');
let masterSongName=document.getElementById('masterSongName');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'))


let songs=[
    {songName:"Baby", filePath:"/songs/1.mp3", coverPath:"/covers/1.jpg"},
    {songName:"Shape of You", filePath:"/songs/2.mp3", coverPath:"/covers/2.jpg"},
    {songName:"I love You", filePath:"/songs/3.mp3", coverPath:"/covers/3.jpg"},
    {songName:"Perfect", filePath:"/songs/4.mp3", coverPath:"/covers/4.jpg"},
    {songName:"Love me Like You Do", filePath:"/songs/5.mp3", coverPath:"/covers/5.jpg"},
    {songName:"Raatan Lambiya", filePath:"/songs/6.mp3", coverPath:"/covers/6.jpg"},
    {songName:"Who Says", filePath:"/songs/7.mp3", coverPath:"/covers/7.jpg"},
    {songName:"Malang Sajna", filePath:"/songs/8.mp3", coverPath:"/covers/8.jpg"},
    {songName:"Ishq Wala love", filePath:"/songs/9.mp3", coverPath:"/covers/9.jpg"},
    {songName:"Raanjhana", filePath:"/songs/10.mp3", coverPath:"/covers/10.jpg"},
]

songItems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})

const makeSinglePlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element,i)=>{
        if(songIndex===i)
        {
            element.classList.add("fa-circle-pause")
            element.classList.remove("fa-circle-play")
        }
        else
        {
            element.classList.add("fa-circle-play")
            element.classList.remove("fa-circle-pause")
        }
        
    })
}
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        makeSinglePlays();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity=1
    }
    else
    {
        audioElement.pause();
        makeAllPlays();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity=0
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //Update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value=progress;
    // console.log(myProgressBar.value);
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add("fa-circle-play")
        element.classList.remove("fa-circle-pause")
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        if(e.target.classList=="fa-solid songItemPlay fa-circle-play")
        {
            makeAllPlays();
            songIndex=parseInt(e.target.id)
            e.target.classList.remove("fa-circle-play")
            e.target.classList.add("fa-circle-pause")
            masterSongName.innerText=songs[songIndex].songName;
            audioElement.src=`/songs/${songIndex+1}.mp3`
            audioElement.currentTime=0;
            audioElement.play()
            gif.style.opacity=1
            masterPlay.classList.remove('fa-circle-play')
            masterPlay.classList.add('fa-circle-pause')
        }
        else
        {
            makeAllPlays();
            songIndex=parseInt(e.target.id)
            e.target.classList.remove("fa-circle-pause")
            e.target.classList.add("fa-circle-play")
            masterSongName.innerText=songs[songIndex].songName;
            audioElement.src=`/songs/${songIndex+1}.mp3`
            audioElement.currentTime=0;
            audioElement.pause()
            gif.style.opacity=0
            masterPlay.classList.remove('fa-circle-pause')
            masterPlay.classList.add('fa-circle-play')
        }
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9)
    {
        songIndex=0;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.src=`/songs/${songIndex+1}.mp3`
        audioElement.currentTime=0;
        audioElement.play()
        makeSinglePlays()
        gif.style.opacity=1
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    }
    else
    {
        songIndex+=1;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.src=`/songs/${songIndex+1}.mp3`
        audioElement.currentTime=0;
        audioElement.play()
        makeSinglePlays()
        gif.style.opacity=1
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    }
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=9;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.src=`/songs/${songIndex+1}.mp3`
        audioElement.currentTime=0;
        audioElement.play()
        makeSinglePlays()
        gif.style.opacity=1
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    }
    else
    {
        songIndex-=1;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.src=`/songs/${songIndex+1}.mp3`
        audioElement.currentTime=0;
        audioElement.play()
        makeSinglePlays()
        gif.style.opacity=1
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    }
})


// makeAllPlays();
//         songIndex=parseInt(e.target.id)
//         e.target.classList.remove("fa-circle-play")
//         e.target.classList.add("fa-circle-pause")
//         masterSongName.innerText=songs[songIndex].songName;
//         audioElement.src=`/songs/${songIndex+1}.mp3`
//         audioElement.currentTime=0;
//         audioElement.play()
//         gif.style.opacity=1
//         masterPlay.classList.remove('fa-circle-play')
//         masterPlay.classList.add('fa-circle-pause')