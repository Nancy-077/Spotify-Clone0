import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) =>{
  const audioRef = useRef();
 const seekbg= useRef();
 const seekbar = useRef();
 
 
 

 const[track,setTrack]= useState(songsData[0])
 const[playStatus, setPlatStatus]= useState(false)
 const[time, setTime]= useState({
    currentTime:{
        second:0,
        minute:0
    },

    totalTime:{
        second:0,
        minute:0
    }
 })

const play = () =>{
    audioRef.current.play();
    setPlatStatus(true)
}

const pause = () =>{
    audioRef.current.pause();
    setPlatStatus(false);
}

const playWithId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlatStatus(true);
}

const Previous = ()=>{
    if(track.id < songsData.length-1){
         setTrack(songsData[track.id-1]);
         audioRef.current.play()
        setPlatStatus(true);
    }
}

const next = async ()=>{
    if(track.id>0){
        await setTrack(songsData[track.id-1]);
        await audioRef.current.play()
        setPlatStatus(true);
    }
}

const seekSong= async(e)=>{
    audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekbg.current.offsetWidth)*audioRef.duration)
}

    useEffect(()=>{
    setTimeout(()=>{
        audioRef.current.ontimeupdate = () =>
        {
           seekbar.current.style.width= (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%";

            setTime({
    currentTime:{
        second: Math.floor(audioRef.current.currentTime % 60),
        minute: Math.floor(audioRef.current.currentTime / 60)
    },

    totalTime:{
        second: Math.floor(audioRef.current.duration % 60),
        minute:Math.floor(audioRef.current.duration / 60)
    }
 })
        }
    }, 1000);

},[audioRef])




    const contextValue={
         audioRef, 
         seekbar,
         seekbg,
         track,setTrack,
         playStatus,setPlatStatus,
         time,setTime,
        play,pause,
        playWithId,
       next,
       Previous,
        seekSong,
       
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
     </PlayerContext.Provider>
    )

}


export default PlayerContextProvider;