import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from 'react-admin';
import { TextInput } from 'react-admin';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Field, reduxForm } from 'redux-form';

class MyLoginPage extends Component {
    submit = (e) => {
        e.preventDefault();
        // gather your data/credentials here
        const credentials = { };

        // Dispatch the userLogin action (injected by connect)
        this.props.userLogin(credentials);
    }

    render() {
        return (
            <MuiThemeProvider theme={this.props.theme}>
                test
                <form onSubmit={this.submit}>
                    <TextInput source="username" />
                    <TextInput source="password" />
                </form>
               
            </MuiThemeProvider>
        );
    }
};

export default connect(undefined, { userLogin })(MyLoginPage);