import { IonCard, IonCol, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonBadge, IonFooter, IonItem, IonLabel, IonRow } from "@ionic/react";
import { useState } from "react";
import {Job} from "../interface/Job"
import './job.css'

interface props{
  data:Job;
  id:number;
  idActif:number;
  setIdActif:React.Dispatch<React.SetStateAction<number>>;
  typeChous:string;
  searchText:string;
}

const Jobs:React.FC<props> = ({data, id, idActif, setIdActif, typeChous, searchText})=>{
  if ((typeChous=="tout"||(data.contrat_type.toUpperCase()==`Contrat ${typeChous}`.toUpperCase()))&&
  (
    data.titre.toUpperCase().includes(searchText.toUpperCase())||
    data.societe.toUpperCase().includes(searchText.toUpperCase())||
    data.description.toUpperCase().includes(searchText.toUpperCase())
  )
  ) {
    if (idActif!=id) {
      return ( 
        <>
        <IonCard onClick={()=>{setIdActif(id)}}>
          <IonCardHeader>
            <IonCardContent>
                <IonRow >
                  <IonCol size="12">
                    <IonCardTitle>{data.titre}</IonCardTitle> 
                  </IonCol>
                  <IonCol size="12">
                    <IonCol size="6">
                      <IonBadge color="success">{data.urgent}</IonBadge>
                    </IonCol>
                    <IonCol size="6">
                      <IonBadge color="success">{data.date_lim}</IonBadge>
                    </IonCol>
                  </IonCol>
                </IonRow>
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
        
      </>
       );
    }else{
      return ( 
        <>
        <IonCard class="activPage" onClick={()=>{setIdActif(-1)}}>
          <IonCardHeader>
            <IonCardSubtitle>{data.date_annonce}</IonCardSubtitle>
            <IonCardTitle>{data.titre}</IonCardTitle>
            <IonCardSubtitle>Société: {data.societe}</IonCardSubtitle>
            <IonCardSubtitle>{data.contrat_type}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonRow>{data.description}</IonRow>
            <IonRow>{data.date_lim}</IonRow>
          </IonCardContent>
          <IonFooter>
            <IonItem color="success" href={data.lien} className="ion-activated ion-justify-content-center">
              <IonCol class="iii">Cliquer pour plus de detail</IonCol>
            </IonItem>
          </IonFooter>
        </IonCard>
        
      </>
       );
    }
  
  }else{
    return(
      <></>
    )
  }

}

export default Jobs;