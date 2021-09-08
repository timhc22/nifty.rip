import {
  Button,
  createStyles,
  InputLabel,
  makeStyles,
  MenuItem,
  Modal,
  Select,
  TextField,
  Theme, Typography
} from "@material-ui/core";
import React from "react";
import {Switch} from "@material-ui/core";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default function SettingsModal ({ open, setOpen, zoomEnabled, setZoomEnabled, setMusicUrl, musicUrl,
                                         setDisplayMode, displayMode, maxImages, setMaxImages, vrMode, setVrMode,
                                         setInfoOpen, source, setSource, address, setAddress }: any) {

  const toggleZoomEnabled = () => {
    let zoomEnabledOption = !zoomEnabled;
    setZoomEnabled(zoomEnabledOption);
    localStorage.setItem('zoomEnabled', zoomEnabledOption.toString());
  }

  const toggleVrMode = () => {
    let vrModeOption = !vrMode;
    setVrMode(vrModeOption);
    localStorage.setItem('vrMode', vrModeOption.toString());
  }

  const updateMusicUrl = (url: string) => {
    setMusicUrl(url);
    localStorage.setItem('musicUrl', url);
    // localStorage.setItem('musicUrl', JSON.stringify(url));
  }

  const updateAddress = (ad: any) => {
    setAddress(ad);
    localStorage.setItem('address', ad);
    // localStorage.setItem('musicUrl', JSON.stringify(url));
  }

  const updateDisplayMode = (dm: any) => {
    setDisplayMode(dm);
    localStorage.setItem('displayMode', dm);
  }

  const updateSource = (src: any) => {
    setSource(src);
    localStorage.setItem('source', src);
  }

  const updateMaxImages = (mi: any) => {
    setMaxImages(mi);
    localStorage.setItem('maxImages', mi);
  }

  function getModalStyle() {
    return {
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      minWidth: '50vw',
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

        <Typography variant="h3" className="greyFont">Settings</Typography>
        <br/>
        <Typography className="greyFont">More <a className="pointer underlined" onClick={()=>{setOpen(false); setInfoOpen(true)}}>Info here</a>.</Typography>
        <br/>
        <hr/>
        <br/>
        <Typography className="greyFont">Zoom Enabled:</Typography>
        {/*<Button variant="contained" color="primary" onClick={toggleZoomEnabled}>Toggle Zoom</Button>*/}
        <Switch checked={zoomEnabled} onChange={toggleZoomEnabled} color="primary" />
        <br/>
        <br/>
        <Typography className="greyFont">VR Mode:</Typography>
        {/*<Button variant="contained" color="primary" onClick={toggleZoomEnabled}>Toggle Zoom</Button>*/}
        <Switch checked={vrMode} onChange={toggleVrMode} color="primary" />
        <br/>
        <br/>
        <TextField
          className="audioURLInput"
          type="url"
          value={musicUrl}
          onChange={(e) => updateMusicUrl(e.target.value)}
          label="AudioURL"
        />
        <br/>
        <br/>
        <InputLabel id="demo-simple-select-label3">Address:</InputLabel>
        <Select
          className="addressInput"
          labelId="demo-simple-select-label3"
          id="demo-simple-select3"
          value={address}
          onChange={(ev) => {updateAddress(ev.target.value)}}
        >
          <MenuItem value={"0x0000000000000000000000000000000000000000"}>0x0000...0000000000000</MenuItem>
          <MenuItem value={"0x000000000000000000000000000000000000dead"}>0x0000...000000000dead</MenuItem>
          <MenuItem value={"0x000000000000000000000000000000000edd899b"}>0x0000...000000edd899b</MenuItem>
        </Select>
        <br/>
        <br/>

        <InputLabel id="demo-simple-select-label">Display Mode:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={displayMode}
          onChange={(ev) => {updateDisplayMode(ev.target.value)}}
        >
          <MenuItem value={0}>Cluster</MenuItem>
          <MenuItem value={1}>Spiral</MenuItem>
          <MenuItem value={2}>Spiral Galaxy</MenuItem>
          <MenuItem value={3}>Swirl</MenuItem>
        </Select>

        <br/><br/>

        <InputLabel id="demo-simple-select-label2">Source:</InputLabel>
        <Select
          labelId="demo-simple-select-label2"
          id="demo-simple-select2"
          value={source}
          onChange={(ev) => {updateSource(ev.target.value)}}
        >
          <MenuItem value={'knownorigin'}>KnownOrigin</MenuItem>
          <MenuItem value={'opensea'}>OpenSea</MenuItem>
        </Select>

        <br/>
        <br/>
        {/*max images setting*/}
        <TextField
          type="number"
          value={maxImages}
          onChange={(e) => updateMaxImages(e.target.value)}
          label="Max Images"
          InputProps={{
            inputProps: {
              min: 1 , max: 100
            }
          }}
        />
        <br/><br/>

        <Button variant="contained" color="primary" onClick={()=>{window.location.reload();}}>Refresh Page</Button>
      </div>
    </Modal>
  )
}
