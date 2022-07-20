import {IonBadge,IonButton,IonCard,IonCardContent,IonCardHeader,IonCardSubtitle,IonCardTitle,
  IonCol,IonFooter,IonIcon,IonItem,IonLabel,IonRow} from "@ionic/react";
import axios from "axios";
import {useEffect, useState } from "react";
import Jobs from "../components/Jobs";
import {Job} from "../interface/Job";
import {
  chevronBackOutline,
  chevronForwardOutline,
  ellipsisHorizontalOutline
} from 'ionicons/icons'
import './index.css'
import { Chargement } from "../chargeement/Charg";
import { SearchBar } from "../cherche/SearchBar";
import { SelectOptionExample } from "../select/SelectOption";


interface scrapingProps {}

type GetJobResponse = {
  data: Job[];
};

function Scraping() {
  let [jobList, setJobList] = useState<Job[]>([]);
  let [idActif, setIdActif] = useState(-1);
  let [debut, setDebut] = useState(false);

  let [actuellNumber, setActuellNumber] = useState(1);

  let [fistNumbur, setFistNumbur] = useState(1);
  let [lastNumbur, setLastNumbur] = useState(10);
  let [numburOne, setNumburOne] = useState(1);
  let [numburToow, setNumburToow] = useState(2);
  let [numburfree, setNumburfree] = useState(3);

  const [searchText, setSearchText] = useState('');
  const [typeChous, setTypeChous] = useState('tout');


  let [classOne, setClassOne] = useState("actif");
  let [classToow, setClassToow] = useState("");
  let [classfree, setClassfree] = useState("");


  console.log(typeChous);
  



  const changeNumberColor:(num:number)=>void=(num)=>{
    if (num==1) {
      setFistNumbur(1);
      setLastNumbur(10);
      setNumburOne(1);
      setNumburToow(2);
      setNumburfree(3);
      setClassOne("actif");
      setClassToow("");
      setClassfree("");
    }else if (num==99) {
      setFistNumbur(80);
      setLastNumbur(99);
      setNumburOne(97);
      setNumburToow(98);
      setNumburfree(99);
      setClassOne("");
      setClassToow("");
      setClassfree("actif");
    }else{

      if (num<=10) {
        setFistNumbur(1);
      }else{
        setFistNumbur((num-2)-(num-2)%10);
      }

      if (num>=90) {
        setLastNumbur(99);
      }else{
        setLastNumbur((num+11)-(num+11)%10);
      }

      setNumburOne(num-1);
      setNumburToow(num);
      setNumburfree(num+1);
      setClassOne("");
      setClassToow("actif");
      setClassfree("");
    }
  }



  console.log(""+numburOne+"  "+numburToow+"  "+numburfree+"  avec : "+actuellNumber);
  console.log(jobList);

  const getData= () => {
    setDebut(true);
    setIdActif(-1);
    setJobList([]);
    const promise = axios.get(
      `https://miscrap-01.herokuapp.com/portal/?page=${actuellNumber}`
    );
    promise.then((response) => {
      setJobList(response.data);
    });
  }

  useEffect(
    ()=>{
      setDebut(true);
      setIdActif(-1);
      setJobList([]);
      const promise = axios.get(
        `https://miscrap-01.herokuapp.com/portal/?page=${actuellNumber}`
      );
      promise.then((response) => {
        setJobList(response.data);
      });
    },[actuellNumber]
  )
  
  if ((jobList.length==0)&&(debut)) {
    return(
      <>
      <IonRow>

        <IonCol size="9" class="ion-align-self-center ion-justify-content-between litel" >
          <IonCol size="auto" onClick={()=>{
              if (actuellNumber!=1) {
                setActuellNumber(actuellNumber-1);
                changeNumberColor(actuellNumber-1);
              }
            }}>
            <IonIcon icon={chevronBackOutline}></IonIcon>
          </IonCol>
          <IonCol size="1" onClick={()=>{
            setActuellNumber(fistNumbur);
            changeNumberColor(fistNumbur);
            }}>
            {fistNumbur}
          </IonCol>
          <IonCol size="auto">
            ... 
          </IonCol>
          <IonCol size="1" className={classOne} onClick={()=>{
            setActuellNumber(numburOne);
            changeNumberColor(numburOne);
            }}>
            {numburOne}
          </IonCol>
          <IonCol size="auto">
            .
          </IonCol>
          <IonCol size="1" className={classToow} onClick={()=>{
            setActuellNumber(numburToow);
            changeNumberColor(numburToow);
            }}>
            {numburToow}
          </IonCol>
          <IonCol size="auto">
            .
          </IonCol>
          <IonCol size="1" className={classfree} onClick={()=>{
            setActuellNumber(numburfree);
            changeNumberColor(numburfree);
            }}>
            {numburfree}
          </IonCol>
          <IonCol size="auto">
            ...
          </IonCol>
          <IonCol size="1" onClick={()=>{
            setActuellNumber(lastNumbur);
            changeNumberColor(lastNumbur);
            }}>
            {lastNumbur}
          </IonCol>
          <IonCol size="auto" onClick={()=>{
              if (actuellNumber!=99) {
                setActuellNumber(actuellNumber+1);
                changeNumberColor(actuellNumber+1);
              }
            }}>
          <IonIcon icon={chevronForwardOutline}></IonIcon>
          </IonCol>

          </IonCol>

          <IonCol size="3" class="ion-align-self-center">
            <SelectOptionExample typeChous={typeChous} setTypeChous={setTypeChous}/>
          </IonCol>


          <IonCol size="8" class="ion-align-self-center">
          <SearchBar searchText={searchText} setSearchText={setSearchText}/>
          </IonCol>

          <IonCol size="4" class="ion-align-self-center" >
            <IonButton color={"success"}
              onClick={getData}
            >
              {"actualiser".toUpperCase()}
            </IonButton>
          </IonCol>

        </IonRow>
        <Chargement/>
    </>
  )
  }else{



  return (
    <>
    
      <IonRow>

        <IonCol size="9" class="ion-align-self-center ion-justify-content-between litel" >
          <IonCol size="auto" onClick={()=>{
              if (actuellNumber!=1) {
                setActuellNumber(actuellNumber-1);
                changeNumberColor(actuellNumber-1);
              }
            }}>
            <IonIcon icon={chevronBackOutline}></IonIcon>
          </IonCol>
          <IonCol size="1" onClick={()=>{
            setActuellNumber(fistNumbur);
            changeNumberColor(fistNumbur);
            }}>
            {fistNumbur}
          </IonCol>
          <IonCol size="auto">
            ... 
          </IonCol>
          <IonCol size="1" className={classOne} onClick={()=>{
            setActuellNumber(numburOne);
            changeNumberColor(numburOne);
            }}>
            {numburOne}
          </IonCol>
          <IonCol size="auto">
            .
          </IonCol>
          <IonCol size="1" className={classToow} onClick={()=>{
            setActuellNumber(numburToow);
            changeNumberColor(numburToow);
            }}>
            {numburToow}
          </IonCol>
          <IonCol size="auto">
            .
          </IonCol>
          <IonCol size="1" className={classfree} onClick={()=>{
            setActuellNumber(numburfree);
            changeNumberColor(numburfree);
            }}>
            {numburfree}
          </IonCol>
          <IonCol size="auto">
            ...
          </IonCol>
          <IonCol size="1" onClick={()=>{
            setActuellNumber(lastNumbur);
            changeNumberColor(lastNumbur);
            }}>
            {lastNumbur}
          </IonCol>
          <IonCol size="auto" onClick={()=>{
              if (actuellNumber!=99) {
                setActuellNumber(actuellNumber+1);
                changeNumberColor(actuellNumber+1);
              }
            }}>
          <IonIcon icon={chevronForwardOutline}></IonIcon>
          </IonCol>

        </IonCol>

        <IonCol size="3" class="ion-align-self-center">
          <SelectOptionExample typeChous={typeChous} setTypeChous={setTypeChous}/>
        </IonCol>


        <IonCol size="8" class="ion-align-self-center">
          <SearchBar searchText={searchText} setSearchText={setSearchText}/>
        </IonCol>

        <IonCol size="4" class="ion-align-self-center" >
          <IonButton color={"success"}
            onClick={getData}
          >
            {"actualiser".toUpperCase()}
          </IonButton>
        </IonCol>

      </IonRow>
        

      {jobList.map(data => (
        <Jobs data={data} id={jobList.indexOf(data)} idActif={idActif} setIdActif={setIdActif}  typeChous={typeChous} searchText={searchText}/>
      ))}

    </>
  );
}
}

export default Scraping;
