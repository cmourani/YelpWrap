import React from 'react';
<<<<<<< HEAD
import GridListItem from './EntryListItem.js';
import {GridList} from 'material-ui/GridList';
=======
import EntryListItem from './EntryListItem.js';
import style from './entries.css';
>>>>>>> header


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 450,
    height: 550,
    overflowY: 'auto',
  },
};


const  EntryList = (props) => (
  <div className={styles.root}>
  	<GridList cols="1" style={styles.gridList}>
      { props.list.map((item, idx)=>{return <GridListItem key={idx} item={item}/>}) }
    </GridList>
 </div>
)

export default EntryList;

