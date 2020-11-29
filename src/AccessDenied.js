import React from 'react'
import { Button, Container, CssBaseline, Divider, Typography } from '@material-ui/core'

function AccessDenied() {
    return (
        <div className="accessDenied">
            <CssBaseline/>
            <Container fixed>
                <Typography component="div" style={{ backgroundColor : '#E9ECEF', height: '30vh', borderRadius: '20px'}}>
                    <Typography variant="h3" gutterBottom style={{ padding: '15px'}}>
                        Login to see Amazing tweets!!
                    </Typography>
                    <Divider/>
                    <Button variant="outlined" color="primary" href="/twitter/login" style={{marginTop: '30px', marginLeft: '10px'}}>
                        Log In to Existing Account
                    </Button>
                </Typography>
            </Container>
        </div>
    )
}

export default AccessDenied
