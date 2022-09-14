import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function MenuPopupState({latest}: any) {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Dashboard
          </Button>
          <Menu {...bindMenu(popupState)}>
            {
              Object.keys(latest)?.map(val => {
                return (
                  <MenuItem onClick={popupState.close} key={Math.random()}>{val}</MenuItem>
                )
              })
            }
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}