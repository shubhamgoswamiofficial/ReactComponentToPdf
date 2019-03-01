import React, { Component } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import canvg from 'canvg';
import ReactDOMServer from 'react-dom/server';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

class App extends Component {
    resume;

    constructor() {
        super();
        // this.iconsToConvert = [
        //     {
        //         icon: faGithub,
        //         alt: 'github icon'
        //     },
        //     {
        //         icon: faMedium,
        //         alt: 'medium icon'
        //     }
        // ]
        this.canvLoaded = false;
    }

    exportPDF = () => {
        this.resume.save();
    }

    convertSvgToImage = (arr) => {
        let canv = this.refs.canvas;
        if (!this.canvLoaded) {
            this.canvLoaded = true;
            canv.getContext("2d");
            // arr.forEach((d, i) => {
            //     let htmlString = ReactDOMServer.renderToStaticMarkup(
            //         <FontAwesomeIcon icon={d.icon} size={"3x"} style={{ color: '#005696', height: '500px', width: '500px' }} />
            //     );
            //     canvg(canv, htmlString);
            //     d.icon = canv.toDataURL("image/png");
            // });
            this.setState({});
        }
    }

    componentDidMount() {
        this.convertSvgToImage(this.iconsToConvert);
    }

    render() {

        const { classes } = this.props;



        return (
            <div class="container-fluid" style={{ height: '100%', width: '100%', paddingTop:0, backgroundColor: 'white' }}>
                {!this.canvLoaded &&
                    <canvas ref="canvas" style={{ display: 'flex' }}>
                    </canvas>}

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
                    <button type="button" class="btn btn-primary" variant="primary" onClick={this.exportPDF} style={{ margin: 'auto' }}>download</button>
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