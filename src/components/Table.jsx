import { createTheme, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../context/context'

export default function Table() {
  const {coinList} = useContext(Context);
  console.log(coinList);
  const dark = createTheme({
    palette:{
      primary:{
        main:"#fff"
      }
    },
    type:"dark"
  })

  const headData=["Coin","Price","Change","Market Cap"];

  return (
    <ThemeProvider theme={dark}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {
                headData.map((data,i)=>{
                  <TableCell key={i} align={data!=="Coin"?"right":""} style={{color:"#113111" , fontWeight:900, fontSize:"1.3rem"}}>
                    {data}
                  </TableCell>
                })
              }
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow></TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  )
}
