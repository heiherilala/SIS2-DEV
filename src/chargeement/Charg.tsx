import React, { useState } from 'react';
import {
  IonContent,
  IonItem,
  IonAvatar,
  IonLabel,
  IonSkeletonText,
  IonListHeader,
  IonIcon,
  IonThumbnail,
  IonList
} from '@ionic/react';
import { call } from 'ionicons/icons';

import './Charg.css'

export const Chargement: React.FC = () => {
    return(
        <>

          <IonList className='transparent'>
            <IonListHeader>
              <IonLabel>
                <IonSkeletonText animated style={{ width: '20%' }} />
              </IonLabel>
            </IonListHeader>

            <IonItem>
              <IonThumbnail slot="start">
                <IonSkeletonText animated />
              </IonThumbnail>
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '50%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '80%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '60%' }} />
                </p>
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonThumbnail slot="start">
                <IonSkeletonText animated />
              </IonThumbnail>
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '50%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '80%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '60%' }} />
                </p>
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonThumbnail slot="start">
                <IonSkeletonText animated />
              </IonThumbnail>
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '50%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '80%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '60%' }} />
                </p>
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonThumbnail slot="start">
                <IonSkeletonText animated />
              </IonThumbnail>
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '50%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '80%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '60%' }} />
                </p>
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonThumbnail slot="start">
                <IonSkeletonText animated />
              </IonThumbnail>
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '50%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '80%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '60%' }} />
                </p>
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonThumbnail slot="start">
                <IonSkeletonText animated />
              </IonThumbnail>
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '50%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '80%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '60%' }} />
                </p>
              </IonLabel>
            </IonItem>
          </IonList>
        </>
    );

};