import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter } from '@ionic/react';

interface props{
  searchText:string;
  setSearchText:React.Dispatch<React.SetStateAction<string>>
}

export const SearchBar: React.FC<props> = ({searchText, setSearchText}) => {

  return (
    <>
 <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="never"></IonSearchbar>
    </>

  );
};