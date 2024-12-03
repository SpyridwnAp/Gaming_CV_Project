import {PC_PERIPHERALS} from '../data/pc_peripherals';
import './Section.css'

//PC Peripherals SECTION
function PcPeripherals(props){
    return(
      <li>
        <h3>{props.type}</h3>
        <p>{props.name}</p>
      </li>
    );
  }
  
  
  function PcPeripheralsGrid(){
    return(
      <ul>
        {PC_PERIPHERALS.map((pcPeripherals) => (<PcPeripherals key={pcPeripherals.title} {...pcPeripherals}/>))}
      </ul>
    );
  }
  
 export default function SectionPcPeripherals(){
    return(
      <section id="fav-sections">
        <h2>My PC Peripherals</h2>
        <PcPeripheralsGrid/>
      </section>
    );
  }