


export const required =value=>{
    if (value){
        return undefined
    };
    return  "field is required"
};

export const maxlength =(maxLength)=>(value)=>{
    if(value.length>maxLength) {return `Max length is ${maxLength} symbols`;}
    return undefined
}