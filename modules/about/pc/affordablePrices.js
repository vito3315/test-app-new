import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function AffordablePrices() {
  return (
    <Grid item xs={12} id={'tag2'}>
      <Typography variant="h2">Доступные цены</Typography>
      <p>
        <span>
          <strong>Низкая наценка.</strong> Держим низкую цену за счёт
          большого объёма продаж. Мы закупаем продукты оптом на всю сеть и
          получаем максимальные скидки от поставщиков. Благодаря этому вы
          тоже получаете выгоду.
          <br />
        </span>
        <br />
        <span>
          <strong>Прозрачное ценообразование.</strong> Возможно, для вас это
          станет открытием, но бесплатной доставки и бесплатных приправ не
          существует. Расходы на на них распределяются между всеми клиентами
          кафе за счет повышения стоимости блюд.
          <br />
          У нас вы платите лишь за те приправы, которые действительно
          нужны. А за доставку платит только тот, кто ею пользуется.
          Благодаря этому цены на блюда ниже.
        </span>
      </p>
    </Grid>
  );
}
