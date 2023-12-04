import React, { useState, useEffect } from 'react';
import { useHeaderStore, useHomeStore } from '@/components/store.js';
import { Link as ScrollLink } from 'react-scroll';
import Box from '@mui/material/Box';

import useCheckCat from '../hooks';

import * as Scroll from 'react-scroll';
var scroller = Scroll.scroller;

export default function MenuCatMobile({ city }) {

  const [ category, setCategory ] = useHomeStore((state) => [ state.category, state.setCategory ]);

  const [ thisActiveID, setThisActiveID ] = useState(0);

  const [catMenu, setCatMenu] = useState(category);
  const [catDopMenu, setCatDopMenu] = useState([]);
  const [scrollMenuCat, setScrollMenuCat] = useState(0);
  const [offset, setOffset] = useState(null);

  //if( category.length > 0 ){
    let activeID = useCheckCat(category);
    //setThisActiveID(thisActiveID);

  useEffect( () => {
    chooseCat(activeID?.id, false)
  }, [activeID] )

    console.log( 'activeID', activeID )
  //}

  useEffect(() => {
    setCatMenu(category);

    
  }, [category]);

  useEffect(() => {
    setCatMenu(category);

    
  }, [category]);

  //console.log( 'category', catMenu, catDopMenu )

  if (city == '') return null;

  const [activePage] = useHeaderStore((state) => [state.activePage]);

  //const handleScroll = () => setScrollMenuCat(window.scrollY > 100);

  useEffect(() => {
    //window.addEventListener('scroll', handleScroll);
    //return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // так оставить сброс состояния выбора категории товара при переходе на другие страницы ??
  useEffect(() => {
    if(activePage === 'home') {
      setCatMenu(category)
    } else {
      const cat = category.map(item => item.choice = false)
      setCatMenu(cat)
    }
  }, [activePage]);

  const chooseCat = (id, scroll) => {
    console.log( 'chooseCat' )
    localStorage.setItem('goTo', id);

    const menuCatDop = document.querySelector('.menuCatDop');

    if (menuCatDop) {
      menuCatDop.scrollLeft = 0;
    }

    const newCatMenu = catMenu.map((cat) => {
      if (cat.id === id) {
        cat.choice = true;

        if(cat.cats.length > 0) {
          cat.cats.map((cat) => (cat.choice = false));
          setCatDopMenu(cat.cats);
        } else {
          setCatDopMenu([]);
        }
      } else {
        cat.choice = false;
      }

      return cat;
    });

    setCatMenu(newCatMenu);

    if (scroll) {
      getScroll(id);
    }
  };

  const chooseDopCat = (id, scroll) => {
    localStorage.setItem('goTo', id);

    const newCatDopMenu = catDopMenu.map((cat) => {
      if (cat.id === id) {
        cat.choice = true;
      } else {
        cat.choice = false;
      }
      return cat;
    });

    setCatDopMenu(newCatDopMenu);

    if (scroll) {
      getScroll(id);
    }
  };

  const getScroll = (id) => {
    const header = document.querySelector('.headerMobile').getBoundingClientRect().height;

    const menu = document.querySelector('.menuCatMobile').getBoundingClientRect().height;

    const offset = -(header + menu);

    setOffset(offset);

    scroller.scrollTo('cat' + id, {
      duration: 0,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset,
    });
  };

  return (
    <>
      <Box sx={{ display: { xs: 'flex', md: 'flex', lg: 'none' } }} className="menuCatMobile">
        <div className="menuCat" style={{ marginBottom: catDopMenu.length == 0 ? '1.7094017094017vw' : '2.5641025641026vw' }}>
          {catMenu.map((item, key) => (
            <ScrollLink
              key={key}
              className={item?.choice ? (item.choice ? 'Cat activeCat' : 'Cat') : 'Cat'}
              to={'cat' + item.id}
              id={'link_' + item.id}
              spy={true}
              isDynamic={true}
              smooth={false}
              offset={offset}
              onClick={() => chooseCat(item.id, 'scroll')}
              onSetActive={() => chooseCat(item.id, null)}
            >
              <span>{item.name}</span>
            </ScrollLink>
          ))}
        </div>
        {catDopMenu.length == 0 ? false : (
          <div className="menuCatDopContainer">
            <div className="menuCatDop" id="menuCatDop" >
              {catDopMenu.map((cat, key) => (
                <ScrollLink
                  key={key}
                  className={cat?.choice ? (cat.choice ? 'CatDop activeCatDop' : 'CatDop') : 'CatDop'}
                  style={{minWidth: cat.name.length > 8 ? '27.350427350427vw' : '21.367521367521vw',
                    marginLeft: key === 0 ? '3.4188034188vw' : '1.7094017094017vw',
                    marginRight: cat === catDopMenu.at(-1) ? '3.4188034188vw' : 0}}
                  to={'cat' + cat.id}
                  id={'linkDOP_' + cat.id}
                  spy={true}
                  isDynamic={true}
                  smooth={false}
                  offset={offset}
                  onClick={() => chooseDopCat(cat.id, 'scroll')}
                  //onSetActive={() => chooseDopCat(cat.id, null)}
                  onSetActive={ () => {

                    chooseDopCat(cat.id, null);
                    let scrollContainer = document.querySelector("#menuCatDop");

                    let data = document.querySelector('#linkDOP_'+cat.id).getBoundingClientRect()

                    console.log( data['x'] + data['width'] - 150 )

                    scrollContainer.scroll({
                        left: data['x'] + data['width'] - 150,
                        behavior: 'smooth'
                    });


                  } }
                >
                  <span>{cat.short_name}</span>
                </ScrollLink>
              ))}
            </div>
          </div>
        )}
      </Box>
      {catDopMenu.length > 0 ? 
        <div className="blockShadowMenuCatMobile" style={{ top: catDopMenu.length != 0 ? '43.735042735043vw' : '31.5786vw' }} /> 
          : 
        false
      }
    </>
  );
}
