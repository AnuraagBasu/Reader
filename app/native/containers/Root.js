import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from '../../core/actions';

class Root extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <View>
                <Text>React Native with Redux</Text>
            </View>
        );
    }
}

function mapDispatchToProps( dispatch ) {
    return bindActionCreators( ActionCreators, dispatch );
}

function mapStateToProps( state ) {
    return {

    }
}

export default connect( mapStateToProps, mapDispatchToProps )( Root );