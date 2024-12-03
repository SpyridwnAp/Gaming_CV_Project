import { useState } from 'react';

import './SectionSelectHardwarePeripheralsContent.css'

import SectionPcHardware from './SectionPcHardware'
import SectionPcPeripherals from './SectionPcPeripherals'
import Section from './Section'

function TabButton(props){
    //console.log(props.activeClass)
    return(
        <li>
            <button className={props.activeClass} onClick={props.clickFunc}>
                {props.buttonName}
            </button>
        </li>
    );
}


function HardwarePeriferalsSelectionMenu(){
    let [selectedContent, setSelectedContent] = useState(SectionPcHardware);
    let [selectedColor, setSelectedColor] = useState('Hardware');
    
    function clickHandler(selectedButton){
        //console.log(selectedColor);
        if(selectedButton=="Hardware"){
            //console.log('hello hard');
            setSelectedContent(SectionPcHardware);
            setSelectedColor('Hardware');
        }
        else{
            //console.log('hello per')
            setSelectedContent(SectionPcPeripherals);
            setSelectedColor('Peripherals')
        }
    }
    return(
        <>
            <menu>
                <TabButton activeClass={selectedColor === 'Hardware' ? 'active': undefined}  clickFunc={() => clickHandler("Hardware")} buttonName="Hardware"/>
                <TabButton activeClass={selectedColor === 'Peripherals' ? 'active' : undefined} clickFunc={() => clickHandler("Peripherals")} buttonName="Peripherals"/>
            </menu> 
            {selectedContent}
        </>
    );
} 

export default function SectionSelectHardwarePeripheralsContent(){
    return(
        <Section title="PC Hardware and Peripherals" id="selection-content-section">
            <HardwarePeriferalsSelectionMenu/>
        </Section>
    );
}
