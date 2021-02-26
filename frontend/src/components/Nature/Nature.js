import { Divider } from '@material-ui/core';
import {makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
root:{
    minHeight: '180vh',
    backgroundRepeat:"no-repeat",
     backgroundSize: 'cover' 
}
}))

export default function(){
    const css = useStyles();
    return (
        <div className={css.root}>



        </div>
    )
}