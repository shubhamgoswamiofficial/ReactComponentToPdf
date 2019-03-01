import React, { Component } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
// import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import canvg from 'canvg';
// import ReactDOMServer from 'react-dom/server';

import {Button,CssBaseline,FormControl,FormControlLabel, Checkbox, Input, InputLabel, Paper, Typography,withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

class App extends Component {
    resume;


    render() {

        const { classes } = this.props;



        return (
            <div class="container-fluid" style={{ height: '100%', width: '100%', paddingTop:0, backgroundColor: 'white' }}>
               
                <PDFExport paperSize={'a4'}
                
                    fileName="Output.pdf"
                    title=""
                    subject=""
                    keywords=""
                    ref={(r) => this.resume = r}>


                    {/* All the Component to be converted into PDF will be placed inside <PDFExport></PDFExport> Tags */}

                    <div >

                        <main className={classes.main}>



                            <Typography variant="h1" align="center" >
                                Log In</Typography>

                            <CssBaseline />
                            <Paper className={classes.paper}>
                            <img style={{height:'300px'}} src={require('./background.jpg')} />

                                <form className={classes.form} >
                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="email">Email Address</InputLabel>
                                        <Input id="email" name="email" autoComplete="email" autoFocus required onChange={this.handleChange} />

                                    </FormControl>
                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="password">Password</InputLabel>
                                        <Input name="password" type="password" id="password" autoComplete="current-password" onChange={this.handleChange} required />
                                    </FormControl>
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                    >
                                        Sign in
  </Button>
                                </form>
                                <br />
                                <Typography>Not a member yet? SignIn</Typography>

                                <Typography>Or Use Social Handles to Login!!</Typography>

                            </Paper>

                        </main>
                    </div>

                </PDFExport>

                <div style={{ textAlign: 'center', marginBottom: 10 }}>
                    <button type="button" class="btn btn-primary" variant="primary" onClick={() => { this.resume.save(); }} style={{ margin: 'auto' }}>download</button>
                </div>

            </div>
        );
    }
}

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    social: {
        padding: "30px",
    }
});

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);