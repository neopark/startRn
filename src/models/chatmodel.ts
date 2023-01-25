
export type T_mtype = "text" | "image" | "file"

export type T_message = {
    text:string
    type?:T_mtype; 
    userId?:string;
    creatDate?:string;
    isSame?:boolean | true;
    displayName:string;
  
}