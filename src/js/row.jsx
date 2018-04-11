import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Row extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.columnTypes = [
            'block',
            'default',
            'flow',
            'magic',
            'no-gutter'
        ]

        this.tag = this.props.tag || 'div';
        this.class = 'row';

        if (this.props.stack) {
            this.class = `${this.class} stack-${this.props.stack}`;
        }
        else if (this.props.stack === false) {
            this.class = `${this.class} stack-break-0`;
        }

        if (this.props.reverse) this.class = `${this.class} row-reverse`;

        Object.keys(this.props).forEach(prop => {
            if (this.columnTypes.includes(prop)) {
                this.class = `${this.class} row-${prop}`;
            }
        });
    }

    getChildContext() {
        return { 
            'column-width': this.props['column-width'],
        };
    }

    render() {
        return (
            <this.tag className={this.class}>
                { this.props.children }
            </this.tag>
        )
    }
}

Row.childContextTypes = {
    'column-width': PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object])
};