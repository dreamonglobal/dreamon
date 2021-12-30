/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { Session } from '@dreamon/conference-schedule'
import { Speaker } from '@dreamon/conference-speakers'
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
  IonToolbar,
} from '@ionic/react'
import {
  share,
  star,
  starOutline,
  schoolOutline,
  timeOutline,
  locationOutline,
} from 'ionicons/icons'
import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import SpeakerSocialChips from '../components/SpeakerSocialChips'
import { connect } from '../data/connect'
import * as selectors from '../data/selectors'
import { addFavorite, removeFavorite } from '../data/sessions/sessions.actions'
import './SessionDetail.scss'

interface OwnProps extends RouteComponentProps {}

interface StateProps {
  session?: Session
  favoriteSessions: number[]
  speakers?: Speaker[]
}

interface DispatchProps {
  addFavorite: typeof addFavorite
  removeFavorite: typeof removeFavorite
}

type SessionDetailProps = OwnProps & StateProps & DispatchProps

const SessionDetail: React.FC<SessionDetailProps> = ({
  session,
  addFavorite,
  speakers,
  removeFavorite,
  favoriteSessions,
}) => {
  if (!session) {
    return <div>Session not found</div>
  }

  const isFavorite = favoriteSessions.indexOf(session.id) > -1

  const toggleFavorite = () => {
    isFavorite ? removeFavorite(session.id) : addFavorite(session.id)
  }

  return (
    <IonPage id="session-detail-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/schedule"></IonBackButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => toggleFavorite()}>
              {isFavorite ? (
                <IonIcon slot="icon-only" icon={star}></IonIcon>
              ) : (
                <IonIcon slot="icon-only" icon={starOutline}></IonIcon>
              )}
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="ion-padding">
          <h1>{session.name}</h1>
          {session.tracks
            ? session.tracks.map((track) => (
                <span
                  key={track}
                  className={`session-track-${track.toLowerCase()}`}
                >
                  <IonChip color="warning" outline={true}>
                    <IonIcon icon={schoolOutline}></IonIcon>
                    <IonLabel>{track}</IonLabel>
                  </IonChip>
                </span>
              ))
            : null}
          <p>{session.description}</p>

          <IonText color="medium">
            <IonIcon icon={timeOutline}></IonIcon> {session.timeStart} &ndash;{' '}
            {session.timeEnd}
            <br />
            <IonIcon icon={locationOutline}></IonIcon> {session.location}
          </IonText>
        </div>
        {speakers?.map((speaker: Speaker, key: number) => (
          <IonItem
            key={key}
            button
            routerLink={`/tabs/speakers/${speaker.slug}`}
          >
            <IonCard>
              <img src={speaker.image} alt={speaker.name} />
              <IonCardHeader>
                <IonCardTitle>{speaker.name}</IonCardTitle>
                <IonCardSubtitle>{speaker.title}</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <p>{speaker.description}</p>
                <SpeakerSocialChips speaker={speaker} />
              </IonCardContent>
            </IonCard>
          </IonItem>
        ))}
      </IonContent>
    </IonPage>
  )
}

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state, OwnProps) => ({
    session: selectors.getSession(state, OwnProps),
    favoriteSessions: state.data.favorites,
    speakers: selectors.getSessionSpeakers(state, OwnProps),
  }),
  mapDispatchToProps: {
    addFavorite,
    removeFavorite,
  },
  component: withRouter(SessionDetail),
})
