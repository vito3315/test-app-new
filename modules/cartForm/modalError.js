import { useEffect, useState } from 'react';

import { useCartStore, useHeaderStore } from '@/components/store.js';

import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Backdrop from '@mui/material/Backdrop';
import LinearProgress from '@mui/material/LinearProgress';

import { IconClose } from '@/ui/Icons';
import { roboto } from '@/ui/Font.js';

export default function ModalError() {
  const [progress, setProgress] = useState(0);

  const [matches] = useHeaderStore((state) => [state.matches]);

  const [openModalErorr, setActiveModalError, textError] = useCartStore((state) => [state.openModalErorr, state.setActiveModalError, state.textError]);

  useEffect(() => {

    if(openModalErorr) {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? setActiveModalError(false, '') : prevProgress + 10));
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };

    } else {
      setProgress(0);
    }

  }, [openModalErorr]);

  return (
    <Dialog 
      onClose={() => setActiveModalError(false, '')}
      className={matches ? 'modalErrorMobile ' + roboto.variable : 'modalErrorPC ' + roboto.variable}
      open={openModalErorr}
      slots={Backdrop}
      slotProps={{ timeout: 500 }}
      fullWidth
    >
      <DialogContent>
        <div className='btnError'>
          <IconButton className="closeError" onClick={() => setActiveModalError(false, '')}>
            <IconClose />
          </IconButton>
        </div>
        <div className='containerError'>
          <span>{textError}</span>
          <LinearProgress variant="determinate" size="sm" value={progress} />
        </div>
      </DialogContent>
    </Dialog>
  );
}