import React from 'react'
import Menu from '../menu/menu'
import styles from './styles'
import { withStyles } from '@material-ui/core/styles';

function footer(props) {
    let { classes } = props
    return (
        <footer className={classes.footer}>
            <Menu />
        </footer>
    )
}
export default withStyles(styles)(footer)