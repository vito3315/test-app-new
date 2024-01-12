import React, { useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ProfileBreadcrumbs from '../profileBreadcrumbs.jsx';
import PromoCardPC from './promoCardPC.jsx';

import { useProfileStore, useCartStore } from '../../../components/store.js';

import { useSession } from 'next-auth/react';

export default function PromokodyPC({ page, this_module, city }) {

  const [ getPromoList, promoListActive ] = useProfileStore( state => [ state.getPromoList, state.promoListActive ]);
  const [ getInfoPromo ] = useCartStore( state => [ state.getInfoPromo ] )

  const session = useSession(); 

  useEffect(() => {
    if (session.data?.user?.token) {
      getPromoList(this_module, city, session.data?.user?.token);
    }
  }, [session]);

  return (
    <Grid container spacing={3} style={{ margin: 0, width: '100%' }} sx={{ display: { xs: 'none', md: 'none', lg: 'flex' } }}>
      <Grid item className="Promokody mainContainer">
        <Grid item xs={12}>
          <Typography variant="h5" component="h1">
            Мои промокоды
          </Typography>
        </Grid>

        <Grid item xs={12} className='promo_list_active'>
          {promoListActive.map((item, key) => (
            <PromoCardPC key={key} item={item} activePromo={getInfoPromo} />
          ))}
        </Grid>

      </Grid>
      <ProfileBreadcrumbs />
    </Grid>
  );
}
