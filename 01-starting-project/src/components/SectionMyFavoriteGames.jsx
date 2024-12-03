import {GAMES} from '../data/favorite_game_data'
import './Section.css'

//FAV GAMES SECTION
function FavoriteGames(props){
    return(
      <li>
        <img src={props.image} alt={props.title}/>
        <h3>{props.title}</h3>
        <p>Timeplayed: {props.timeplayed} hours</p>
        <p>{props.description}</p>
      </li>
    );
  }
  
  export default function SectionMyFavoriteGames(){
    return(
      <section id="fav-sections">
          <h2>MY FAVORITE VIDEOGAMES</h2>
          <ul>
            {GAMES.map((favGames)=>(<FavoriteGames key={favGames.title} {...favGames}/>))}
          </ul>
      </section>
    );
  }



