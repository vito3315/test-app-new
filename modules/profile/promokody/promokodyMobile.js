import { useEffect, useState } from 'react';

import { useProfileStore } from '@/components/store.js';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

import Box from '@mui/material/Box';

import { ArrowLeftMobile } from '@/ui/Icons.js';

import PromoCardMobile from './promoCardMobile';

const promoL = [
  {
    name: 'Шоколадный десерт',
    text: 'в подарок за 1 рубль',
    time: '1 день',
    btn: 'Положить в корзину',
    term: 'Условия акции',
    desc: 'Акция действует ежедневно до 31.07.2023 г. на доставку, самовывоз и заказы в кафе. Один промокод можно применить неограниченное количество раз. Промокод не суммируется с другими акциями. Возможны изменения или приостановление акции. Один промокод можно применить неограниченное количество раз. Промокод не суммируется с другими акциями.',
    back: 'rgba(233, 71, 35, 0.20)',
    color: 'rgba(233, 71, 35, 0.50)',
  },
  {
    name: 'Ролл Жако',
    text: 'в подарок на день рождения',
    time: '22 дня',
    btn: 'Активировать промокод',
    term: 'Условия акции',
    desc: 'Акция действует ежедневно до 31.07.2023 г. на доставку, самовывоз и заказы в кафе. Один промокод можно применить неограниченное количество раз. Промокод не суммируется с другими акциями. Возможны изменения или приостановление акции. Один промокод можно применить неограниченное количество раз. Промокод не суммируется с другими акциями.',
    back: 'rgba(212, 113, 149, 0.20)',
    color: 'rgba(212, 113, 149, 0.50)',
  },
  {
    name: 'Пицца Пепперони',
    text: 'в подарок на день рождения',
    time: '15 дней',
    btn: 'Использовать промокод',
    term: 'Условия акции',
    desc: 'Акция действует ежедневно до 31.07.2023 г. на доставку, самовывоз и заказы в кафе. Один промокод можно применить неограниченное количество раз. Промокод не суммируется с другими акциями. Возможны изменения или приостановление акции. Один промокод можно применить неограниченное количество раз. Промокод не суммируется с другими акциями.',
    back: 'rgba(125, 206, 22, 0.20)',
    color: 'rgba(125, 206, 22, 0.50)',
  },
];

const promoA = [
  {
    name: 'Шоколадный чизкейек',
    text: 'при заказе 3-х пицц',
    time: 'Срок действия истёк',
    btn: 'НЕ ИСПОЛЬЗОВАН',
    term: 'Условия акции',
    desc: 'Акция действует ежедневно до 31.07.2023 г. на доставку, самовывоз и заказы в кафе. Один промокод можно применить неограниченное количество раз. Промокод не суммируется с другими акциями. Возможны изменения или приостановление акции. Один промокод можно применить неограниченное количество раз. Промокод не суммируется с другими акциями.',
    back: 'rgba(22, 173, 206, 0.20)',
    color: 'rgba(22, 173, 206, 0.50)',
  },
  {
    name: 'Шоколадный чизкейек',
    text: 'при заказе 3-х пицц',
    time: '7 апреля 2022 года',
    btn: 'АКТИВИРОВАН',
    term: 'Условия акции',
    desc: 'Акция действует ежедневно до 31.07.2023 г. на доставку, самовывоз и заказы в кафе. Один промокод можно применить неограниченное количество раз. Промокод не суммируется с другими акциями. Возможны изменения или приостановление акции. Один промокод можно применить неограниченное количество раз. Промокод не суммируется с другими акциями.',
    back: 'rgba(179, 89, 234, 0.20)',
    color: 'rgba(179, 89, 234, 0.50)',
  },
  {
    name: 'Шоколадный чизкейек',
    text: 'при заказе 3-х пицц',
    time: '15 мая 2022 года',
    btn: 'АКТИВИРОВАН',
    term: 'Условия акции',
    desc: 'Акция действует ежедневно до 31.07.2023 г. на доставку, самовывоз и заказы в кафе. Один промокод можно применить неограниченное количество раз. Промокод не суммируется с другими акциями. Возможны изменения или приостановление акции. Один промокод можно применить неограниченное количество раз. Промокод не суммируется с другими акциями.',
    back: 'rgba(208, 154, 16, 0.20)',
    color: 'rgba(208, 154, 16, 0.50)',
  },
];

export default function PromokodyMobile({ page, this_module, city }) {
  const { getPromoList, promoList } = useProfileStore((state) => state);

  const [list, setList] = useState(promoL);
  const [archive, setArchive] = useState(promoA);

  const [openArchive, setOpenArchive] = useState(false);

  const session = useSession();

  useEffect(() => {
    if (session.data?.user?.token) {
      getPromoList(this_module, city, session.data?.user?.token);
    }
  }, [session]);

  return (
    <Box sx={{ display: { xs: 'flex', md: 'flex', lg: 'none' } }} className="PromokodyMobile">
      <div className="promokodyLogin">
        <Link href={'/' + city + '/account'}>
          <ArrowLeftMobile />
        </Link>
        <span>Мои промокоды</span>
      </div>
      <div className="promoList promokodyMain">
        {list.map((item, key) => (
          <PromoCardMobile key={key} item={item} last={item === list.at(-1) && list.length && !openArchive ? 'last' : ''}/>
        ))}
        {!openArchive ? null : (
          <div className="openArchive">
            <div>Архив промокодов</div>
          </div>
        )}
        <>
          {!openArchive ? null : (
            <>
              {archive.map((item, key) => (
                <PromoCardMobile key={key} item={item} last={item === archive.at(-1) && archive.length ? 'last' : ''} archive={openArchive}/>
              ))}
            </>
          )}
        </>
        <div onClick={() => setOpenArchive(!openArchive)} className="promoArchive">
          <div>{openArchive ? 'Свернуть архив промокодов' : 'Показать архив промокодов'}</div>
        </div>
      </div>
    </Box>
  );
}
