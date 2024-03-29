import { useState, memo } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { BurgerIconMobile, MenuIconMobile, AboutIconMobile, LocationIconMobile, MapContactsMobile } from '@/ui/Icons.js';
import JacoLogo from '@/public/jaco-logo-mobile.png';
import { roboto } from '@/ui/Font.js';

import { useHeaderStore, useCitiesStore } from '@/components/store.js';

import BasketIconHeaderMobile from '../basket/basketIconHeaderMobile';
import ProfileIconHeaderMobile from '../profile/profileIconHeaderMobile';

export default memo(function NavBarMobile({ city }) {
  const [activeMenu, setActiveMenu] = useState(false);

  const [setActiveBasket, openBasket, setActiveModalCityList, activePage] = useHeaderStore( state => [state.setActiveBasket, state.openBasket, state.setActiveModalCityList, state.activePage] );
  
  const [ thisCityRu ] = useCitiesStore( state => [ state.thisCityRu ] );

  if (city == '') {
    return null;
  }

  const close = () => {
    if (openBasket) {
      setActiveBasket(false);
    }

    if(activeMenu) {
      setActiveMenu(false)
    }

  };

  return (
    <AppBar position="fixed" className="headerMobile" elevation={2} onClick={close} sx={{ display: { xs: 'flex', md: 'flex', lg: 'none' } }}>
      <Toolbar>
        <Link href={`/${city}`}>
          <Image alt="Жако доставка роллов и пиццы" src={JacoLogo} width={200} height={50} priority={true}/>
        </Link>

        <>
          <BurgerIconMobile onClick={() => setActiveMenu(true)} className={activeMenu ? 'BurgerActive' : null}/>

          <SwipeableDrawer
            anchor={'top'}
            open={activeMenu}
            onClose={() => setActiveMenu(false)}
            onOpen={() => setActiveMenu(true)}
            id='headerMenuCat'
          >
            <List className={'LinkList ' + roboto.variable}>

              <ListItem onClick={() => { setActiveModalCityList(true); setActiveMenu(false); }}>
                <a>
                  <MapContactsMobile />
                  <span>{thisCityRu}</span>
                </a>
              </ListItem>

              <ListItem onClick={() => setActiveMenu(false)}>
                <Link href={'/' + city} style={{background: activePage === 'home' ? 'rgba(0, 0, 0, 0.03)' : null}}>
                  <MenuIconMobile />
                  <span style={{color: activePage === 'home' ? ' #dd1a32' : null}}>Меню</span>
                </Link>
              </ListItem>

              <ListItem onClick={() => setActiveMenu(false)}>
                <Link href={`/${city}/contacts`} style={{background: activePage === 'contacts' ? 'rgba(0, 0, 0, 0.03)' : null}}>
                  <LocationIconMobile />
                  <span style={{color: activePage === 'contacts' ? ' #dd1a32' : null}}>Адреса</span>
                </Link>
              </ListItem>

              <ListItem onClick={() => setActiveMenu(false)}>
                <Link href={`/${city}/document`} style={{background: activePage === 'other' ? 'rgba(0, 0, 0, 0.03)' : null}}>
                  <AboutIconMobile />
                  <span style={{color: activePage === 'other' ? ' #dd1a32' : null}}>Жако</span>
                </Link>
              </ListItem>

              <ProfileIconHeaderMobile setActiveMenu={setActiveMenu} city={city} active_page={activePage}/>

              <BasketIconHeaderMobile setActiveMenu={setActiveMenu} active_page={activePage} city={city}/>

            </List>

            <div className="Line" />

          </SwipeableDrawer>
        </>

      </Toolbar>
    </AppBar>
  );
});
