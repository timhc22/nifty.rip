import {Button, createStyles, makeStyles, Modal, Theme, Typography} from "@material-ui/core";
import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

export default function InfoModal ({ open, setOpen, maxImages, openSettings, source, address }: any) {

  function getModalStyle() {
    return {
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      maxWidth: '90vw',
      maxHeight: '70vh',
      overflow: 'scroll'
    };
  }

  const useStyles2 = makeStyles((theme: Theme) =>
    createStyles({
      paper: {
        position: 'absolute',
        width: 'auto',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    }),
  );

  const classes2 = useStyles2();
  const [modalStyle] = React.useState(getModalStyle);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    // todo add close button on modal
    <Modal
      className="timeline-modal"
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes2.paper}>
        <HighlightOffIcon className="closeModalButton" onClick={() => { setOpen(false)}}/>

        <Typography variant="h3" className="greyFont">Info</Typography>
        <br/>

        <Typography className="greyFont">
          This project is designed to show an important concept about NFTs.. 'ownership' can be lost, the 'jpg' not.. Think about posting the key AND the deeds through the letterbox of a house..
        </Typography>
        <br/>
        <Typography className="greyFont">
          Blockchains add 'ownership certainty' re 'digital assets' on the Internet, therefore, these NFTs are arguably the most valuable on the planet as there will always be demand for them, but no supply.
        </Typography>
        <br/>
        <hr/>
        <br/>
        {/*<Typography style={{color: '#333'}}>Burned (and therefore irrecoverable) NFTs sent to the address:<br/>*/}
        {/**/}
        {/*  <b>{address}<br/><br/></b>*/}
        <Typography className="greyFont">
          This site is currently displaying the last <b>{maxImages}</b> 'burned' NFTs from&nbsp;

          { source === 'knownorigin' && (
            <b><a target="_blank" href="https://knownorigin.io">Known Origin</a></b>
          )}
          { source === 'opensea' && (
            <b><a target="_blank" href="https://opensea.io">OpenSea</a>.</b>
          )}
            <br/>
            sent to the address: <b className="minitext">{address}<br/><br/></b>
          Please allow some time for loading, especially if the number of assets is high.<br/>
          To change options visit: <b><Button variant="contained" color="primary" className="pointer underlined" onClick={()=>{setOpen(false); openSettings(true)}}>Settings</Button></b><br/><br/>
        </Typography>
        <hr/>
        <br/>
        <Typography className="greyFont">
          Contribute here: <a target="_blank" href="https://github.com/timhc22/nifty.rip">Github</a>.<br/>
          Special thanks to: <a target="_blank" href="https://twitter.com/0xnibbler">@0xnibbler</a>, <a target="_blank" href="https://twitter.com/mo_ezz14">@mo_ezz14</a> and <a target="_blank" href="#">PixLord</a><br/><br/>
          <span style={{float: 'right'}}>Made by <a target="_blank" href="https://unegma.com">unegma</a>.</span>
        </Typography>
      </div>
    </Modal>
  )
}
