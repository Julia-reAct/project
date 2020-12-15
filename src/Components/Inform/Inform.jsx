import React from 'react'
import s from './Inform.module.css'
import avatar from './pic.png'


const Inform= (props)=> {
  return (
    <div >
        <div className={s.person}>
        <img  className={s.avatar} src={avatar} alt='description of imag'  />
        <div className ={s.name} >Вероника Ростова</div>
        <div className={s.work}>Менеджер по продажам</div>
        <div className={s.sentence}>Подберу для вас самые лучшие предложения.
        Мои услуги абсолютно бесплатны</div>
        </div>
        <div>
            <div className={s.services}>Услуг</div>
            <div className={s.allservices}>
            <div className={s.booking} >Ручное бронирование </div>
            <div className={s.number}>11</div>
            <div className={s.tours}>Пакетные туры </div>
            <div className={s.numbers}>3</div>
            <div className={s.hotel}>Отели </div>
            <div className={s.numbers}>1</div>
            </div>
            <div className={s.schedule}>
            <div className={s.schedule1}></div>
            <div className={s.schedule2}></div>
            <div className={s.schedule3}></div>
            </div>
            <div className={s.all}>
              <div>Всего</div>
              <div>15</div>
            </div>
        </div>
    </div>
  );
}

export default Inform;