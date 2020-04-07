

export const requestCredentails = (data)=>{
   return {
       type: "CREDENTIALS",
       payload: data
   }
}

export const requestData = (data)=>{
    return {
        type: "DATA",
        payload: data
    }
 }