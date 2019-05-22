import React, { Component } from 'react'

class Image extends Component {
    constructor(props) {
        super(props)


    }

    render() {
        return (
            <div>
                <h1>The Final Frontier!!!!!</h1>
                <a href="https://www.google.com/search?ei=JmfkXJrGGZG6-gSjq6WgAw&q=space&oq=space&gs_l=psy-ab.3..35i39j0i67l3j0l4j0i67j0.4619.4905..5579...0.0..0.98.177.2......0....1..gws-wiz.......0i71j0i10j0i131.8DuRtvDS9_o">Click Here</a>
                <img 
                    src={this.props.source}>
                </img>
            </div>
        )
    }
}

export default Image
