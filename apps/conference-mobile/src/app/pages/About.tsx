import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonPopover,
  IonToolbar,
} from '@ionic/react'
import { ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons'
import React, { useState } from 'react'
import AboutPopover from '../components/AboutPopover'
import './About.scss'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const [showPopover, setShowPopover] = useState(false)
  const [popoverEvent, setPopoverEvent] = useState<MouseEvent>()

  const presentPopover = (e: React.MouseEvent) => {
    setPopoverEvent(e.nativeEvent)
    setShowPopover(true)
  }

  return (
    <IonPage id="about-page">
      <IonContent>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonButtons slot="end">
              <IonButton onClick={presentPopover}>
                <IonIcon
                  slot="icon-only"
                  ios={ellipsisHorizontal}
                  md={ellipsisVertical}
                ></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <div className="about-header">
          <div className="about-image madison"></div>
        </div>
        <div className="about-info">
          <h3 className="ion-padding-top ion-padding-start">About</h3>

          <p className="ion-padding-start ion-padding-end">
            5 Year's ago Dream On: Global was founded and kicked off their
            ministry with the Dream On: Conference. Since then, the Dream On
            team has ministered to thousands of people all across the globe
            about God's plans and purposes their lives. The Dream On team is
            excited to announce that they will be hosting another Dream On:
            Conference on Saturday February 19, 2022
          </p>

          <h3 className="ion-padding-top ion-padding-start">Details</h3>

          <IonList lines="none">
            <IonItem>
              <IonLabel>Location</IonLabel>
              <IonLabel className="ion-text-end">Botkins, Ohio</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Date</IonLabel>
              <IonLabel className="ion-text-end">February, 19th 2022</IonLabel>
            </IonItem>
          </IonList>

          <h3 className="ion-padding-top ion-padding-start">Internet</h3>

          <IonList lines="none">
            <IonItem>
              <IonLabel>Wifi network</IonLabel>
              <IonLabel className="ion-text-end">OBM Guest</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Password</IonLabel>
              <IonLabel className="ion-text-end">DreamOn2022</IonLabel>
            </IonItem>
          </IonList>
        </div>
      </IonContent>

      <IonPopover
        isOpen={showPopover}
        event={popoverEvent}
        onDidDismiss={() => setShowPopover(false)}
      >
        <AboutPopover dismiss={() => setShowPopover(false)} />
      </IonPopover>
    </IonPage>
  )
}

export default React.memo(About)
