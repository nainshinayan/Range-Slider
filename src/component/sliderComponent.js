import{useState} from 'react';

export default function Slider(props){
  let {minValue, maxValue, defaultValue} = props;
  const [selectedValue,setSelectedValue] = useState(defaultValue);


  function handleRangeChange(e){
    setSelectedValue(e.target.value)
  }
  return(
  <>
  <h2>Select the price range</h2>
  <div style={{fontSize: "18px"}}>
  ${minValue}
  <input type="range" min= {minValue} max={maxValue} value ={selectedValue} onInput={(e)=>handleRangeChange(e)}></input>
  ${maxValue}
  <br/>
  <br/>
  <br/>
  <div><b>Selected range is: ${minValue} to ${selectedValue}</b></div>
  </div>
  
  </>)
}
