import { EDIT_STATE } from './types'

export const EditState = (data) => dispatch =>{
    
    dispatch(
        {type:EDIT_STATE,
        state:data}
    )
}