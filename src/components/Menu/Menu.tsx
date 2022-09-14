import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function MenuPopupState({
  currencyArray,
  currency,
  onSelect,
}: any) {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            {currency}
          </Button>
          <Menu {...bindMenu(popupState)}>
            {currencyArray?.map((val: string) => {
              return (
                <MenuItem
                  onClick={(e) => {
                    popupState.close();
                    onSelect(e);
                  }}
                  key={Math.random()}
                >
                  {val}
                </MenuItem>
              );
            })}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
