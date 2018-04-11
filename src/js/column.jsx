import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import defaults from '../config.json';

export default class Column extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.tag = this.props.tag || 'div';
        this.width = this.props.width || this.context['column-width'];

        try {
            this.colNamespace = global.UI.config.grid.options['col-namespace'];
        }
        catch(error) {
            try {
                this.colNamespace = defaults.defaults.options['col-namespace'];
            }
            catch(error) {
                this.colNamespace = 'span';
            }
        }

        this.class = this.props.className ? this.props.className + this.colNamespace : this.colNamespace;

        if (this.width) {
            if (typeof this.width === 'object') {
                for (let width in this.width) {
                    if (width === 'default') {
                        this.class = `${this.class}-${this.width.default}`
                    } else {
                        this.class = `${this.class} ${width}-${this.width[width]}`
                    }
                }
            } else {
                this.class = `${this.class}-${this.width}`
            }
        };

        if (this.props.push) this.class = `${this.class} push-${this.props.push}`;
        if (this.props.pull) this.class = `${this.class} pull-${this.props.pull}`;

        if (this.props.align) {
            this.class = `${this.class} va-${this.props.align}`; 
        }
    }

    render() {
        return (
            <this.tag {...this.props} className={this.class}>
                { this.props.children }
            </this.tag>
        )
    }
}

Column.contextTypes = {
    'column-width': PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object])
};