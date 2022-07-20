import React from 'react';
import { IonContent, IonItem, IonLabel, IonSelect, IonSelectOption, IonPage } from '@ionic/react';
import './style.css'

  const options = {
    cssClass: 'my-custom-interface'
  };

  interface props{
    typeChous:string;
    setTypeChous:React.Dispatch<React.SetStateAction<string>>
  }


export const SelectOptionExample: React.FC<props> = ({typeChous, setTypeChous}) => {
  return (

        <>
          <IonSelect className='select' interfaceOptions={options} interface="popover" onIonChange={(e) => setTypeChous(`${e.detail.value}`)} value={typeChous}>
            <IonSelectOption value="tout" onChange={()=>setTypeChous("tout")}  onClick={()=>setTypeChous("tout")}>Tout</IonSelectOption>
            <IonSelectOption value="stage" onChange={()=>setTypeChous("stage")} onClick={()=>setTypeChous("stage")}>Stage</IonSelectOption>
            <IonSelectOption value="cdi" onClick={()=>setTypeChous("cdi")}>CDI</IonSelectOption>
            <IonSelectOption value="cdd" onClick={()=>setTypeChous("cdd")}>CDD</IonSelectOption>
          </IonSelect>
        </>

  );
};