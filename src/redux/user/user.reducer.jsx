const initial_state={
    currentUser:null,
    addval:0,
    subval:20,
    data:'test',
    signin:false,
}

const userReducer=(state=initial_state,action)=>{ 
     switch (action.type) {
         case 'add_val':
                return{
                    ...state,
                    currentUser:action.payload.currentUser,
                    addval:action.payload.addval,
                    
                    test:action.payload.test,
                    // currentUser:action.payload

                     
                }
                case  'sub_val':
                    return {
                        ...state,
                        subval:action.payload.subval,

                    }              
            //  break; 
     
         default:
             return state;
     }
}
export default userReducer;