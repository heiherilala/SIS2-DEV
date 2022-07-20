import {
  IonApp,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonHeader,
  IonRow,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";

import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "./theme/variables.css";
import Scraping from "./scraping/Index";
import Jobs from "./components/Jobs";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonHeader>
      <IonToolbar color="success">
        <IonTitle className="titre" >ANNONCES DE TRAVAIL</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <Scraping />
    </IonContent>
  </IonApp>
);

export default App;
