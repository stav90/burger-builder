import React, {Component} from 'react';
import classes from './Layout.css';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

    sidedrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})

    }
        
    render() {
            return (
                <Aux>
                    <Toolbar drawToggleClicked={this.sideDrawerToggleHandler}/>
                    <SideDrawer
                        closed={this.sidedrawerClosedHandler}
                        open={this.state.showSideDrawer} />
                    <main className={classes.Content}>
                        {this.props.children}
                    </main>
                </Aux>
        )

    }
}; 
    




export default Layout;