import { Grid,TextField,Button,Divider,FormLabel,RadioGroup,FormControl,FormControlLabel,Radio } from "@mui/material";
import { useState } from "react";

export default function Calculate(props){
  const [getRate,setRate]=useState('')
  const [getQuantity,setQuantity]=useState('')
  const [getAmount,setAmount]=useState('')
  const [getnetAmount,setnetAmount]=useState('')
  const [getDiscount,setDiscount]=useState('')
  const [getdisamt,setdisamt]=useState('')
  function hadleQuantity(event)
  {
    setQuantity(event.target.value)
  }
  function handleAmount()
  {
    var amt=getQuantity*getRate
    var dis=(amt*getDiscount)/100
    var netamt=amt-dis
    setdisamt(dis)
    setAmount(amt)
    setnetAmount(netamt)
  }
  function handleDiscount(event)
  {
    setDiscount(event.target.value)
  }
  return (
    <div style={{display:'flex',justifyContent:'center',fontFamily:'Roboto',margin:5}}>
      <div style={{width:400,height:'auto',background:'#f2f2f2',borderRadius:10}}>
        <Grid container spacing={2} style={{padding:10}}>
         
          <Grid item xs={6} style={{fontWeight:'bold',fontSize:20}}>
              {props.heading}
          </Grid>

          <Grid item xs={6} style={{display:'flex'}}>
            <img src={props.logo} alt='logo' width={70} style={{marginLeft:'auto'}} />
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item xs={12}>
            <TextField label='Product Rate' fullWidth size="small" onChange={(event)=>{setRate(event.target.value)}}></TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField label='Product Qunatity' fullWidth size='small' onChange={hadleQuantity}></TextField>
          </Grid>

          <Grid item xs={12}>
            <FormControl>
              <FormLabel style={{color:'black',fontWeight:'bold'}}>Discount</FormLabel>
              <RadioGroup row onChange={handleDiscount}>
                <FormControlLabel value={10} control={<Radio/>} label="10%"></FormControlLabel>
                <FormControlLabel value={20} control={<Radio/>} label="20%"></FormControlLabel>
                <FormControlLabel value={30} control={<Radio/>} label="30%"></FormControlLabel>
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} style={{fontWeight:'bold',fontSize:18}}>
            <div>Amount :  {getAmount}</div>
            <div>Discount : {getdisamt}</div>
            <div>netAmount : {getnetAmount}</div>

          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" fullWidth onClick={handleAmount}>Get Amount </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}