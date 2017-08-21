"use strict"
import React from 'react';
import Header from './header';

class Main extends React.Component{
    render(){
        return(
            <div>
                <Header />
                    {this.props.children}
            </div>
        );
    }
}


export default Main;

