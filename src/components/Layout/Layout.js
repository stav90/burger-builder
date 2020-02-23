import React from 'react';
import './Layout.css';
import Aux from '../../hoc/Aux';

const layout = (props) => (
    <Aux>
    <div>Toolbar, sidedrawer, backdrop</div>
        <main className='Content'>
        {props.children}
    </main>
    </Aux>

);


export default layout;