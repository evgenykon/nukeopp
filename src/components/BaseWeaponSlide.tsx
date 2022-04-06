import * as React from "react";
import BaseWeaponSlideProps from "../interfaces/BaseWeaponSlideProps";

export default class BaseWeaponSlide extends React.Component<BaseWeaponSlideProps, {}> {
  constructor (props: BaseWeaponSlideProps){
    super(props);
  }

  render() {
    return (  
      <div className="weapon-slide">
        <div className="weapon-slide-content"  style={{ 
                maxWidth: '900px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 2fr', gridTemplateRows: '0.5fr 3fr 1fr', padding: '1vh 10vh', boxSizing: 'border-box', gridGap: '2vw'
        }}>
            <div style={{gridRow: '1/3', gridColumn: '1/2'}}>
                <img src={this.props.img} className="left photo" />  
            </div>
            <div style={{gridRow: '1/2', gridColumn: '2/3'}}>
                B-61
            </div>
            <div style={{gridRow: '2/3', gridColumn: '2/3', fontSize: '0.7rem'}}>
            B61 является бомбой с переменным уровнем мощности заряда, предназначенная для транспортировки на самолётах, 
            в том числе сверхзвуковых. Она имеет корпус, способный выдерживать полёт на сверхзвуковых скоростях. 
            Корпус металлический, сварной, имеет длину 3,58 м и диаметр около 33 см. Средний вес около 320 кг, но может варьировать в зависимости от модификации.    
            </div>
            <div style={{gridRow: '3/4', gridColumn: '2/3'}}>
            Мощность 0,1 - 1,1 Mт
            </div>
        </div>
          
      </div>
    );
  }
}