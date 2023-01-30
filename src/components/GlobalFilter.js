import React from "react";
                           //----- when we laksh crores f data in rows then we use debouncing for optimization of the table ,for now no need


function GlobalFilter({filter,setfliter}){        //----- just like ustate filter for text input and set is to update the input text we texted in our data


    return(
        <div>
            <span>
                search:{''}
                <input value={filter || ''} onChange={(e)=>setfliter(e.target.value)}/>
            </span>
        </div>
    )
}

export default GlobalFilter