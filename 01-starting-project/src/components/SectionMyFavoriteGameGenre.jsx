import {GAMES_GENRE} from '../data/favorite_game_genre_data';
import './Section.css'
import Section from './Section'

//FAV GENRES SECTION
function FavoriteGameGenre(props){
    return(
      <li>
        <img src={props.image} alt={props.title}/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
    );
  }
  
export default function SectionMyFavoriteGameGenre(){
    return(
      <section id="fav-sections">
        <h2>MY FAVORITE VIDEOGAMES' GENRE</h2>
        <ul>
          {GAMES_GENRE.map((favGamesGenre) => (<FavoriteGameGenre key={favGamesGenre.title} {...favGamesGenre}/>))}
        </ul>
      </section>
    );
  }

