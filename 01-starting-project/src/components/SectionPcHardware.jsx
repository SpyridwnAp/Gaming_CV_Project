import {PC_PARTS} from '../data/pc_parts';
import './Section.css'

//PC PARTS SECTION
function PcHardware(props){
    return(
      <li>
        <h3>{props.type}</h3>
        <p>{props.name}</p>
      </li>
    );
  }
  
  function PcHardwareGrid(){
      return(
        <ul>
          {PC_PARTS.map((pcHardware) => (<PcHardware key={pcHardware.title} {...pcHardware}/>))}
        </ul>
      );
  }
  
export default  function SectionPcHardware(){
    return(
      <section id="fav-sections">
        <h2>My PC Hardware</h2>
        <PcHardwareGrid/>
      </section>
    );
  }
