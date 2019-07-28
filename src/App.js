import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function App() {
    return (
        <div>
            <h3>My notes:</h3>
            <Fab color="primary" variant="extended" aria-label="add">
                <AddIcon />
                Add new note
            </Fab>
        </div>
    );
}

export default App;
