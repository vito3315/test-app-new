import React from 'react';
import Head from 'next/head'
import Image from 'next/image';

import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import Snackbar from '@mui/material/Snackbar';

import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { Header } from '../../components/header.js';
import { Footer } from '../../components/footer.js';

import { IconClose, IconRuble, MyTextInput, MyCheckBox, Fade, roboto } from '../../components/elements.js'
import config from '../../components/config.js';

import queryString from 'query-string';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>{children}</Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const this_module = 'profile';

class AkciiModal extends React.Component{
  shouldComponentUpdate(nextProps){
    return (nextProps.showItem !== this.props.showItem || nextProps.openDialog !== this.props.openDialog);
  }

  render(){
    const { closeDialog, openDialog, activePromo, showItem } = this.props;
    
    return (
      <Dialog 
        onClose={closeDialog.bind(this)} 
        className={"modalActii "+roboto.variable} 
        open={openDialog}
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500,
        }}
      >
        <Fade in={openDialog}>
          <Box>
            <IconButton style={{ position: 'absolute', top: -43, right: 10 }} onClick={closeDialog.bind(this)}>
              <IconClose style={{ width: 25, height: 25, fill: '#fff', color: '#fff', overflow: 'visible' }} />
            </IconButton>

            <DialogTitle style={{ margin: 0, padding: 8 }}>
              { showItem ? showItem.promo_title : ''}
            </DialogTitle>
              
            <DialogContent className="modalActiiContent">
              { showItem ?
                <div dangerouslySetInnerHTML={{__html: showItem.text}} />
                  :
                null
              }
            </DialogContent>

            {showItem && showItem.promo.length > 0 ?
              <DialogActions style={{ justifyContent: 'center', padding: '15px 0px' }}>
                <ButtonGroup disableElevation={true} disableRipple={true} variant="contained">
                  <Button variant="contained" className="AkciiActivePromo" onClick={activePromo.bind(this, showItem.info, showItem.promo)}>Применить промокод</Button>
                </ButtonGroup>
              </DialogActions>
                :
              null
            }
          </Box>
        </Fade>
      </Dialog>
    )
  }
}

class AkciiItem extends React.Component{
  shouldComponentUpdate(nextProps){
    return nextProps.item !== this.props.item;
  }

  render(){
    const { openDialog, item } = this.props;
    
    return (
      <Grid item xs={12} sm={6} md={4} xl={4} onClick={openDialog.bind(this, item)}>
        <Image alt={item.promo_title} src={"https://storage.yandexcloud.net/site-aktii/"+item.img_new+"750х750.jpg"} width={750} height={750} priority={true} />
      </Grid>
    )
  }
}

class ProfilePromosTable extends React.Component{
  render(){
    const { promo_list, activePromo } = this.props;

    return (
      <>
        <Table sx={{ display: { xs: 'none', lg: 'inline-table' } }} className="TablePromoPc">
          <TableHead>
            <TableRow>
              <TableCell>Промокод</TableCell>
              <TableCell>Промокод дает:</TableCell>
              <TableCell>Действует до</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {promo_list.map((item, key) => 
              <TableRow key={key}>
                <TableCell onClick={activePromo.bind(this, item.info, item.promo_name)}>{item.promo_name}</TableCell>
                <TableCell>{item.promo_text}</TableCell>
                <TableCell>{item.date_end}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <Table sx={{ display: { xs: 'inline-table', lg: 'none' } }} className="TablePromoMobile">
          <TableBody>
            {promo_list.map((item, key) => 
              <TableRow key={key}>
                <TableCell>
                  <div>
                    <Typography variant="h5" component="span" className="PromoName">Промокод: </Typography>
                    <Typography variant="h5" component="span" className="PromoName">{item.promo_name}</Typography>
                  </div>
                  <div style={{ width: '100%', paddingTop: 10 }}>
                    <Typography variant="h5" component="span" className="PromoDate">Действует до: </Typography>
                    <Typography variant="h5" component="span" className="PromoDate">{item.date_end}</Typography>
                  </div>
                  <div style={{ width: '100%', paddingTop: 10, textAlign: 'justify' }}>
                    <Typography variant="h5" component="span" className="PromoText">Промокод дает: </Typography>
                    <Typography variant="h5" component="span" className="PromoText">{item.promo_text}</Typography>
                  </div>
                  <div style={{ width: '100%', paddingTop: 10 }}>
                    <Button variant="contained" style={{ width: '100%' }} onClick={activePromo.bind(this, item.info, item.promo_name)}>Применить промокод</Button>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </>
    )
  }
}

class ProfileOrdersTable extends React.Component{
  render(){
    const { order_list } = this.props;

    return (
      <div className="TableOrders">
        <div className="thead">
          <Typography variant="h5" component="span" style={{ flex: 1 }}>№</Typography>
          <Typography variant="h5" component="span" style={{ flex: 3 }}>Дата</Typography>
          <Typography variant="h5" component="span" style={{ flex: 2 }}>Сумма</Typography>
          <Typography variant="h5" component="span" style={{ flex: 1 }}></Typography>
        </div>
        <div className="tbody">
          {order_list.map((item, key) => 
            <div key={key}>
              <div>
                <Typography variant="h5" component="span" style={{ flex: 1 }}>{item.order_id}</Typography>
                <Typography variant="h5" component="span" style={{ flex: 3 }}>{item.date_time_new}</Typography>
                <Typography variant="h5" component="span" className="CardPriceItem" style={{ flex: 2 }}>{item.sum} <IconRuble style={{ width: 13, height: 13, fill: '#525252', marginBottom: -1 }} /></Typography>
                <Typography variant="h5" component="span" style={{ flex: 1 }}>{parseInt(item.is_delete) == 1 ? <CloseIcon style={{ position: 'relative', top: 3 }} /> : parseInt(item.status_order) == 6 ? <CheckIcon style={{ position: 'relative', top: 3 }} /> : null}</Typography>
              </div>
                
              {(parseInt(item.status_order) == 6 || parseInt(item.is_delete) == 1) ? null :
                <div className="boxSteps">
                  <div>
                    <div className={ parseInt(item.steps[0]['active']) == 0 || parseInt(item.steps[0]['active']) == 2 ? '' : 'active' }>
                      <Typography variant="h5" component="span">{item.steps[0]['name']}</Typography>
                    </div>
                    <div className={ parseInt(item.steps[1]['active']) == 0 || parseInt(item.steps[1]['active']) == 2 ? '' : 'active' }>
                      <Typography variant="h5" component="span">{item.steps[1]['name']}</Typography>
                    </div>
                    <div className={ parseInt(item.steps[2]['active']) == 0 || parseInt(item.steps[2]['active']) == 2 ? '' : 'active' }>
                      <Typography variant="h5" component="span">{item.steps[2]['name']}</Typography>
                    </div>
                    <div className={ parseInt(item.steps[3]['active']) == 0 || parseInt(item.steps[3]['active']) == 2 ? '' : 'active' }>
                      <Typography variant="h5" component="span">{item.steps[3]['name']}</Typography>                                                        
                    </div>
                  </div>
                  { item.time_to_client == 0 ? null :
                    <div>
                      <Typography variant="h5" component="span">Заказ { parseInt(item.type_order) == 1 ? 'привезут до: ' : 'будет готов до: ' }{item.time_to_client}</Typography>
                    </div>
                  }
                </div> 
              }
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default class Profile extends React.Component {
  constructor(props) {
      super(props);
      
      this.state = {    
          is_load: false,
          
          page: this.props.data1 ? this.props.data1.page : null,
          title: this.props.data1 ? this.props.data1.page.title : '',
          description: this.props.data1 ? this.props.data1.page.description : '',

          city: this.props.data1 ? this.props.data1.city : '',
          city_name: this.props.city,

          openMSG: false,
          statusMSG: false,
          textMSG: '',

          activeTab: 1,
          promo_list: [],
          order_list: [],
          user: null,

          
      };
      
      //itemsStore.setCity(this.props.city);
  }
  
  getData = (method, data = {}) => {
    this.setState({
      is_load: true
    })

    data.type = method; 

    return fetch(config.urlApi+this_module, {
      method: 'POST',
      headers: {
          'Content-Type':'application/x-www-form-urlencoded'},
      body: queryString.stringify(data)
    })
      .then((res) => res.json())
      .then((json) => {
        setTimeout( () => {
          this.setState({
            is_load: false
          })
        }, 500 )

        return json;
      })
      .catch((err) => {
        setTimeout( () => {
          this.setState({
            is_load: false
          })
        }, 500 )
        console.log(err);
      });
  };

  componentDidMount(){
    if( parseInt(this.state.activeTab) == 0 ){
      this.getPromoList()
    }

    if( parseInt(this.state.activeTab) == 1 ){
      this.getOrderList()
    }

    if( parseInt(this.state.activeTab) == 2 ){
      this.getUserInfo()
    }
  }
  
  changeTab(event, value){
    this.setState({
      activeTab: value
    })

    if( parseInt(value) == 0 ){
      this.getPromoList()
    }

    if( parseInt(value) == 1 ){
      this.getOrderList()
    }

    if( parseInt(value) == 2 ){
      this.getUserInfo()
    }
  }
  
  async getPromoList(){
    let data = {
      city_id: this.state.city,
      user_id: 'ODk4NzkzNDAzOTEtXy0xNzYyMg'
    };

    let res = await this.getData('get_my_promos', data);

    this.setState({
      promo_list: res.promo_list
    })
  }

  async getOrderList(){
    let data = {
      city_id: this.state.city,
      user_id: 'ODk4NzkzNDAzOTEtXy0xNzYyMg'
    };

    let res = await this.getData('get_my_orders', data);

    this.setState({
      order_list: res.order_list
    })
  }

  async getUserInfo(){
    let data = {
      city_id: this.state.city,
      user_id: 'ODk4NzkzNDAzOTEtXy0xNzYyMg'
    };

    let res = await this.getData('get_my_info', data);

    console.log( res )

    this.setState({
      user: res.user
    })
  }

  activePromo(){

  }

  changeUserData(type, event){
    let user = {...this.state.user};

    if( type == 'spam' ){
      user[ [type] ] = event.target.checked ? 1 : 0;  
    }else{
      user[ [type] ] = event.target.value;
    }

    this.setState({
      user: user
    })
  }

  render() {
    return (
      <div className={roboto.variable}>
        <Backdrop open={this.state.is_load} style={{ zIndex: 99 }}>
          <CircularProgress color="inherit" />
        </Backdrop>

        <Header city={this.state.city} />

        <Grid container className="Profile mainContainer MuiGrid-spacing-xs-3">
                  
          <Head>
            <title>{this.state.title}</title>
            <meta name="description" content={this.state.description} />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          
          <Grid item xs={12}>
            <Typography variant="h5" component="h1">Личный кабинет</Typography>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ width: '100%' }}>
              <Box>
                <Tabs value={this.state.activeTab} onChange={ this.changeTab.bind(this) } centered>
                  <Tab label="Промокоды" {...a11yProps(0)} />
                  <Tab label="Заказы" {...a11yProps(1)} />
                  <Tab label="Редактирование" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <TabPanel value={this.state.activeTab} index={0} className="Tabs">
                <ProfilePromosTable promo_list={this.state.promo_list} activePromo={this.activePromo.bind(this)} />
              </TabPanel>
              <TabPanel value={this.state.activeTab} index={1} className="Tabs">
                <ProfileOrdersTable order_list={this.state.order_list} />
              </TabPanel>
              <TabPanel value={this.state.activeTab} index={2} className="Tabs">
                <Grid container spacing={3} className="TableUserForm">

                  <Grid item xs={12} sm={6}>
                    <MyTextInput label={'Имя'} value={ this.state.user?.name ?? '' } func={ this.changeUserData.bind(this, 'name') } />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <MyTextInput label={'Номер телефона'} value={ this.state.user?.login ?? '' } func={ this.changeUserData.bind(this, 'login') } disabled={true} />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <MyTextInput label={'День рождения'} value={ this.state.user?.date_bir ?? '' } func={ this.changeUserData.bind(this, 'date_bir') } disabled={true} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <MyTextInput label={'E-mail'} value={ this.state.user?.mail ?? '' } func={ this.changeUserData.bind(this, 'mail') } />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <MyCheckBox label={'Получать сообщения с акциями'} value={ parseInt(this.state.user?.spam ?? 1) == 1 ? true : false } func={ this.changeUserData.bind(this, 'spam') } />
                  </Grid>

                </Grid>
              </TabPanel>
            </Box>
          </Grid>

        </Grid>

        { this.state.city == '' ? null :
          <Footer cityName={this.state.city} />
        }
      </div>
    )
  }
}

export async function getServerSideProps({ req, res, query }) {
  let data = {
    type: 'get_page_info', 
    city_id: query.city,
    page: this_module
  };

  let res1 = await fetch(config.urlApi+this_module, {
    method: 'POST',
    headers: {
      'Content-Type':'application/x-www-form-urlencoded'},
    body: queryString.stringify(data)
  })
  
  const data1 = await res1.json()
  
  data1['city'] = query.city;

  return { props: { data1 } }
}