import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faBackwardStep, faForwardStep, faCirclePause } from '@fortawesome/free-solid-svg-icons'

const Layout = () => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
    const [isPlaying, setIsPlaying] = useState(false);  
    const [songs, setSongs] = useState([
    {
        title: "Can't Get You out of My Head (Cover)",
        artist: "AnnenMayKantereit x Parcels",
        img: "/SongImage/AnnenMayKantereit.jpg",
        src: "./songs/AnnenMayKantereit.mp3"
    },
    {
        title: "Peaches And Cream",
        artist: "112",
        img: "/SongImage/112.jpg",
        src: "./songs/112 - Peaches And Cream.mp3"
    },
    {
        title: "Use Somebody",
        artist: "Kings of Leon",
        img: "/SongImage/KingsOfLeon.png",
        src: "./songs/KingsOfLeon-UseSomebody.mp3"
    },
    {
        title: "I Know What You Want",
        artist: "Busta Rhymes, Mariah Carey ft. Flipmode Squad",
        img: "/SongImage/Bustamariah-IknowWhatYouWant.jpg",
        src: "./songs/Busta Rhymes, Mariah Carey - I Know What You Want ft. Flipmode Squad.mp3"
    }
])

useEffect(() => {
  if (isPlaying){
      audioElement.current.play();
  } else {
      audioElement.current.pause();
  }
}, [isPlaying]);

let audioElement = useRef(null);

useEffect(() => {
    setNextSongIndex(() => {
        if(currentSongIndex +1 > songs.length -1){
            return 0;
        } else {
            return currentSongIndex + 1;
        }
    })

    if (isPlaying) audioElement.current.play();
}, [currentSongIndex])


const skipSong = (forwards = true) => {
    if(forwards){
        setCurrentSongIndex(() => {
            let temp = currentSongIndex;
            temp++;
        
            if(temp > songs.length - 1){
                temp = 0;
            }

            return temp;
            
        });
    } else {
        setCurrentSongIndex(() => {
            let temp = currentSongIndex;
            temp--;

            if(temp < 0){
                temp = songs.length - 1;
            }

            return temp;
        });
    }
}

  return (
    <div className="headerContainer">
        <h1>
            Altug
        </h1>
        <ul className="navItems">
            <li><Link className="a" to={"/"}>Home</Link></li>
            <li><Link className="a" to={"/about"}>About</Link></li>
            <li><Link id="coding" className="a" to={"/code"}>Code</Link></li>
            <li><Link id="design" className="a" to={"/design"}>Design</Link></li>
            <li><Link className="a" to={"/contact"}>Contact</Link></li>
        </ul>
        <div className='music-container'>
          <audio src={songs[currentSongIndex].src} ref={audioElement}></audio>
          <div className='player-controls'>
            <div>
              <button className="skip-btn" onClick={() => skipSong(false)} >
              <FontAwesomeIcon icon={faBackwardStep} />
              </button>
              <button className="play-btn" onClick={() => setIsPlaying(!isPlaying)}>
                <FontAwesomeIcon icon={isPlaying ? faCirclePause : faCirclePlay} />
              </button>
              <button className="skip-btn" onClick={() => skipSong()}>
                <FontAwesomeIcon icon={faForwardStep} />
              </button>
            </div>
            <img src={songs[currentSongIndex].img} alt="" />
            <p><span>{songs[currentSongIndex].artist}</span> - <span>{songs[currentSongIndex].title}</span></p>
          </div>
        </div>
    </div>
  )
}

export default Layout