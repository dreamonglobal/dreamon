/* eslint-disable @typescript-eslint/no-empty-interface */
import { Session } from '@dreamon/conference-schedule'
import { Speaker } from '@dreamon/conference-speakers'
import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonToolbar,
} from '@ionic/react'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import SpeakerSocialChips from '../components/SpeakerSocialChips'
import { connect } from '../data/connect'
import * as selectors from '../data/selectors'
import './SpeakerDetail.scss'
interface OwnProps extends RouteComponentProps {
  speaker?: Speaker
  sessions?: { [key: string]: Session[] }
}

interface StateProps {}

interface DispatchProps {}

interface SpeakerDetailProps extends OwnProps, StateProps, DispatchProps {}

const SpeakerDetail: React.FC<SpeakerDetailProps> = ({ speaker, sessions }) => {
  console.log(sessions)
  if (!speaker) {
    return <div>Speaker not found</div>
  }

  return (
    <IonPage id="speaker-detail">
      <IonContent>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/tabs/speakers" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <div className="speaker-background">
          <img src={speaker.image} alt={speaker.name} />
          <h2>{speaker.name}</h2>
        </div>

        <div className="ion-padding speaker-detail">
          <p>
            {speaker.description} <br />
          </p>

          <hr />

          <div className="speaker-details">
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>{speaker.name}'s Sessions</IonCardTitle>
              </IonCardHeader>
              {sessions ? (
                <IonCardContent>
                  <IonList lines="none">
                    {sessions[speaker.name]?.map((session: Session) => (
                      <IonItem
                        detail={false}
                        routerLink={`/tabs/speakers/sessions/${session.id}`}
                        key={session.name}
                      >
                        <IonLabel>
                          <h3>{session.name}</h3>
                        </IonLabel>
                      </IonItem>
                    ))}
                  </IonList>
                </IonCardContent>
              ) : null}
            </IonCard>
          </div>

          <SpeakerSocialChips speaker={speaker} />
        </div>
      </IonContent>
    </IonPage>
  )
}

export default connect({
  mapStateToProps: (state, ownProps) => ({
    speaker: selectors.getSpeaker(state, ownProps),
    sessions: selectors.getSpeakerSessions(state),
  }),
  component: SpeakerDetail,
})
