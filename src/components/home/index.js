import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setUser } from '../../actions/user';

function Greating() {
    return (
        <div>
            Hello World!
        </div>
    )
}

Greating.defaultProps = {
    user: null,
}

Greating.propTypes = {
    setUserData: PropTypes.func.isRequired,
}

const mapStateToProps = store => ({
    user: store.user,
});

const mapDispatchToProps = dispatch => ({
    setUserData: data => dispatch(setUser(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Greating);
