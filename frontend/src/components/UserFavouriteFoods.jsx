import React, {createElement} from 'react'

const UserFavouriteFoods = (props) => {
  console.log(props.fooditem)
  return (
    <div>
        <section>
            <b>Favourite Foods:</b>
            <br/>
            <ul>
                <li>{props.name}</li>
                <li>Pizza</li>
                <li>Sushi</li>
                <li>Sushi</li>
            </ul>
       </section>
    </div>
  
  ) 
}

export default UserFavouriteFoods