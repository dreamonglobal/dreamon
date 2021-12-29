/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { useState } from 'react'
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol,
  IonRefresher,
  IonRefresherContent,
  IonToast,
} from '@ionic/react'
import SpeakerItem from '../components/SpeakerItem'
import { connect } from '../data/connect'
import * as selectors from '../data/selectors'
import './SpeakerList.scss'
import { Speaker } from '@dreamon/conference-speakers'
import { Session } from '@dreamon/conference-schedule'
import { RefresherEventDetail } from '@ionic/core'
import { loadConfData } from '../data/sessions/sessions.actions'

interface OwnProps {}

interface StateProps {
  speakers: Speaker[]
  speakerSessions: { [key: string]: Session[] }
}

interface DispatchProps {
  loadConfData: typeof loadConfData
}

interface SpeakerListProps extends OwnProps, StateProps, DispatchProps {}

const SpeakerList: React.FC<SpeakerListProps> = ({
  speakers,
  speakerSessions,
  loadConfData,
}) => {
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const [showCompleteToast, setShowCompleteToast] = useState(false)

  const doRefresh = (event: CustomEvent<RefresherEventDetail>) => {
    setRefreshing(true)
    loadConfData()
    setTimeout(() => {
      setShowCompleteToast(true)
      setRefreshing(false)
      event.detail.complete()
    }, 2500)
  }
  return (
    <IonPage id="speaker-list">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Speakers</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Speakers</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent />
        </IonRefresher>

        <IonToast
          isOpen={showCompleteToast}
          message="Refresh complete"
          duration={2000}
          onDidDismiss={() => setShowCompleteToast(false)}
        />

        {!refreshing ? (
          <IonGrid fixed>
            <IonRow>
              {speakers.map((speaker) => (
                <IonCol size="12" size-md="6" key={speaker.id}>
                  <SpeakerItem
                    key={speaker.id}
                    speaker={speaker}
                    sessions={speakerSessions[speaker.name]}
                  />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        ) : null}
      </IonContent>
    </IonPage>
  )
}

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    speakers: selectors.getSpeakers(state),
    speakerSessions: selectors.getSpeakerSessions(state),
  }),
  mapDispatchToProps: {
    loadConfData,
  },
  component: React.memo(SpeakerList),
})
