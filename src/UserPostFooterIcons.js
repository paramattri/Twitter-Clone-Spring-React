import React, {useState} from 'react'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function UserPostFooterIcons({tweetId}) {

    const [open, setOpen] = useState(false);

    const handleDeleteClickOpen = () => {
        setOpen(true);
    };

    const handleDeleteClose = () => {
        setOpen(false);
    };

    const deleteTweet = (tweetId) => {
        console.log(tweetId+"deleted")
        axios.delete(`http://localhost:8080/twitter/tweets/${tweetId}`)
        setOpen(false)
        window.location.reload()
    }

    return (
        <React.Fragment>
            <ChatBubbleIcon fontSize="small"/>
            <FavoriteBorderIcon fontSize="small"/>
            <EditIcon fontSize="small"/>
            <DeleteIcon fontSize="small" onClick={handleDeleteClickOpen} style={{cursor: 'pointer'}}/>

            <Dialog
            open={open}
            onClose={handleDeleteClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="sm" 
            fullWidth={true}
            >
                <DialogTitle id="alert-dialog-title">{"Delete Tweet?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        This can't be undone and it will be removed from your profile, the timeline of any accounts
                        that follow you, and from Twitter search results.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteClose} color="primary">
                    Cancel
                    </Button>
                    <Button onClick={() => deleteTweet(tweetId)} color="secondary" autoFocus>
                    Delete
                    </Button>
                </DialogActions>
            </Dialog> 
        </React.Fragment>
    )
}

export default UserPostFooterIcons
