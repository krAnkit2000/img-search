import React from 'react';

function  Input({urls, alt_description, user}) {

    return(

            <div className = "image">
            
                <img src = {urls.small} alt = {alt_description} />
               
            </div>

    )
}
export default Input