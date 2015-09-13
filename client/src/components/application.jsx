// import styler from 'classnames';
import * as React from 'react/addons';
import { connect } from 'react-redux';
import {State, Navigation} from 'react-router';
import * as _ from 'underscore';

const Application = React.createClass({
    displayName: 'Application',

    propTypes: {
    },

    mixins: [State, Navigation],

    render() {
        return <div>Hi template!</div>;
    },
});

function mapStateToProps(state) {
    return _.extend(
        {},
        state
    );
}

export default connect(mapStateToProps)(Application);
