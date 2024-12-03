import Dannn1sImg from '../assets/spyrozofia.jpg';
import './Header.css';
import { useState } from 'react';

//HEADER
const Nicknames = ['Dannn1s', 'YOGI', 'ELOUSADOR', 'TRELOSTOUXWRIOU']



function genRandomInt(max) {
  return Math.floor(Math.random()*(max+1));
}



export default function Header(){
  let [currentAge,setCurrentAge] = useState(24)
  
  function happyBirthday(){
    var today = new Date();
    var birthDate = new Date('2000-8-4');
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    setCurrentAge(age);
  }

  return(
    <header onLoad={happyBirthday}>
        <img id="Dannn1s_img" src={Dannn1sImg} alt="Dannn1s_img" />
        <h1>Dannn1s's CV</h1>
        <p>
          Hello some people call me {Nicknames[genRandomInt(Nicknames.length-1)]} and i am a {currentAge} years old video gamer. 
          Videogames are my passion cause they help me escape reallity  and mainly boredom!<br/>They are giving me the adrenalyn I need to keep going with my basic and boring life!
          I can say with certainty that I have acquired a "Proficiency degree" on them with all the hours i have spend on them!
        </p>
    </header>
  );
}
