import Image from 'next/image';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function WeOptimism() {
  return (
    <Grid item xs={12} id={'tag5'}>
      <Typography variant="h2">Заряжаем оптимизмом!</Typography>
      <p>
        <span>
          Сотрудники кафе всегда встретят вас дружелюбно и при
          необходимости помогут с выбором блюд. Мы подбираем
          жизнерадостных и трудолюбивых людей, которые готовят
          ответственно и с душой. А клиенты за это оставляют нам слова
          благодарности. Получается круговорот хорошего настроения и
          оптимизма!
        </span>
        <br />
        <br />
        <span>
          Оптимизм — основная ценность нашей компании. И это не про шутки
          и анекдоты. Это про веру в лучшее, про веру в себя, про
          мотивацию и путь к поставленной цели. 
        </span>
        <br />
        <br />
        <span>
          У нас есть цель — построить сеть кафе по всей России, мы идём к
          ней и верим, что всё получится. И вы тоже достигнете любой
          поставленной цели, если будете идти к ней шаг за шагом.
        </span>
      </p>
    
      <Image
        alt="WeOptimism"
        src="/about/IMG_5144.jpg"
        width={4541}
        height={3027}
        priority={true}
        style={{ width: '100%', height: 'auto' }}
      />
    
      <p style={{ textAlign: 'center' }}>А это Наталия, менеджер кафе на Цветном (Тольятти). Всех заряжает оптимизмом!</p>
    </Grid>
  );
}
