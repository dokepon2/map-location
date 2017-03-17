import React, { PropTypes, Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import styles from './styles.css';

export default class Maker extends Component {
    static propTypes = {
        text: PropTypes.string
    };

    static defaultProps = {};

    shouldComponentUpdate = shouldPureComponentUpdate;

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div className={styles.MarkerStyle}>
                    <img src={this.props.images} className={styles.img_avatar} />
                </div>
                <div className={styles.MarkerStickStyle}></div>
            </div>
        );
    }
}