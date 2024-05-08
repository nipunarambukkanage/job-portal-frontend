import React from 'react';
import { TextField, Typography } from '@material-ui/core';

function Login() {
  return (
      <div style={{textAlign: "center", display: "grid", marginRight: "400px", marginLeft: "400px", marginTop: "60px"}}>
        <div style={{margin:"50px"}}>
      <Typography variant="h4" align="center" gutterBottom>
        Login to browse jobs!
      </Typography>
      <Typography variant="body1" align="center">
          Explore job listings, manage categories, and more!
      </Typography>
      </div>
      <div style={{width:"100%",textAlign:"center"}}>
        <div style={{margin:"10px",width:"300px"}}><TextField id="outlined-basic" label="Username" variant="outlined" /></div>
        <div style={{margin:"10px",width:"300px"}}><TextField id="outlined-basic" label="Password" variant="outlined" /></div>
       </div>   
    </div>
  );
}

export default Login;