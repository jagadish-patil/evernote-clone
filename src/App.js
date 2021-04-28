import './App.css';
import React from 'react';

import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null
    };
  }

  render() {
    return (<div>Hello World!</div>);
  }

  componentDidMount = () => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        console.log(notes);
        this.setState({ notes: notes });
      });

  }

}

export default App;
