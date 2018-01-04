import React from 'react';
import style from './entries.css';

const FavEntryListItem = (props) =>(
  <div className={style.favEntryListItem}>
    
    <a href={props.item.url}><img src={props.item.image_url} alt="item" className={style.imageEntryListItem}/></a>
    <div className={style.textBoxFavListItem}>
      <span>{props.item.name}</span> <br/>
      <span>{props.item.phone}</span>  <br/>
      <span>{props.item.location.address1}</span> <br/>
      <span>{Object.keys(props.item.location).reduce((arr, key) => {
        let dataKeys = {'city': true, 'state': true, 'zip_code': true}
          if(dataKeys[key]) {
            arr.push(`${props.item.location[key]} `)
          }
          return arr;
      }, [])}</span>
    </div>
  
  </div>
  )
export default FavEntryListItem;

