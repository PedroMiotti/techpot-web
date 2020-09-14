import React, { useState, useEffect } from 'react'


// Material UI
    import Menu from "@material-ui/core/Menu";
    import MenuItem from "@material-ui/core/MenuItem";

const ModalNotificao = ({ currentTarget }) => {
    const [anchorEl, setAnchorEl] = useState(currentTarget);

    const handleClose = () => {
      setAnchorEl(!anchorEl);
    };

    useEffect(() => {

      setAnchorEl(currentTarget);

    }, [currentTarget]);

    return (
      <div className="ModalNotificacaoContainer">
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Menu>
      </div>
    );
}

export default ModalNotificao;
