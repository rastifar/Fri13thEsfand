import React, { Component } from 'react';
 import Timer from './Timer';
import Todo from './Todo';
import styles from './App.module.css'

class App extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Timer />
                <Todo/>
            </div>
        );
    }
}

export default App;