import { Component } from "react";
import Aux from '../../hoc/Aux';
import React from 'react';
import Burger from '../../components/Burger/Burger';


class BurgerBuilder extends Component{
    render() {
        return (
            <Aux>
                <Burger />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;

