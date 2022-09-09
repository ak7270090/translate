const To = ({options,setTo}) => {
    return ( 
        <div>
        to
        <select name="lang" onChange={(e)=>setTo(e.target.value)}>
          {options.map((opt)=>(
          <option  key={opt.code} value={opt.code}>{opt.name}</option>))}
          
        
        </select>
      </div>
     );
}
 
export default To;