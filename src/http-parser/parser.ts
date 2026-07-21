
export const httpParser = ( data :any ) => {

    const rawRequest = data;

    //End of network header 

    const endOfHeader = rawRequest.indexOf('\r\n\r\n');
    if(endOfHeader === -1) return;


    //Parsing the Body 

    const body = rawRequest.substring(endOfHeader + 4);


    //Header Text 

    const headerText = rawRequest.substring(0 , endOfHeader);
    const lines = headerText.split('\r\n');


    //Parser the request line ( GET )

    const [ method , path , version ] = lines[0].split(' ');

    // Parse the headers into an object

    const headers : any = {};
    
     for (let i = 1; i < lines.length; i++) {
      const colonIndex = lines[i].indexOf(':');
      const key = lines[i].substring(0, colonIndex).trim();
      const value = lines[i].substring(colonIndex + 1).trim();
       headers[key.toLowerCase()] = value;
      
        }

   


    
    return {
        method ,
        path ,
        version ,
        headers,
        body
    }


}