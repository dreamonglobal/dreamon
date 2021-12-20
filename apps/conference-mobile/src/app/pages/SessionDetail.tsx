import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonToolbar,
} from "@ionic/react";
import { share, star, starOutline } from "ionicons/icons";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { connect } from "../data/connect";
import * as selectors from "../data/selectors";
import { addFavorite, removeFavorite } from "../data/sessions/sessions.actions";
import { Session } from "../models/Schedule";
import "./SessionDetail.scss";

interface OwnProps extends RouteComponentProps {}

interface StateProps {
  session?: Session;
  favoriteSessions: number[];
}

interface DispatchProps {
  addFavorite: typeof addFavorite;
  removeFavorite: typeof removeFavorite;
}

type SessionDetailProps = OwnProps & StateProps & DispatchProps;

const SessionDetail: React.FC<SessionDetailProps> = ({
  session,
  addFavorite,
  removeFavorite,
  favoriteSessions,
}) => {
  if (!session) {
    return <div>Session not found</div>;
  }

  const isFavorite = favoriteSessions.indexOf(session.id) > -1;

  const toggleFavorite = () => {
    isFavorite ? removeFavorite(session.id) : addFavorite(session.id);
  };
  const shareSession = () => {};

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
            <IonButton onClick={() => shareSession}>
              <IonIcon slot="icon-only" icon={share}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="ion-padding">
          <h1>{session.name}</h1>
          {session.tracks.map((track) => (
            <span
              key={track}
              className={`session-track-${track.toLowerCase()}`}
            >
              {track}
            </span>
          ))}
          <p>{session.description}</p>
          <IonText color="medium">
            {session.timeStart} &ndash; {session.timeEnd}
            <br />
            {session.location}
          </IonText>
        </div>
        {/* <IonList>
          <IonItem onClick={() => sessionClick("add to calendar")} button>
            <IonLabel color="primary">Add to Calendar</IonLabel>
          </IonItem>
          <IonItem onClick={() => sessionClick("download video")} button>
            <IonLabel color="primary">Download Video</IonLabel>
            <IonIcon
              slot="end"
              color="primary"
              size="small"
              icon={cloudDownload}
            ></IonIcon>
          </IonItem>
          <IonItem onClick={() => sessionClick("leave feedback")} button>
            <IonLabel color="primary">Leave Feedback</IonLabel>
          </IonItem>
        </IonList> */}
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state, OwnProps) => ({
    session: selectors.getSession(state, OwnProps),
    favoriteSessions: state.data.favorites,
  }),
  mapDispatchToProps: {
    addFavorite,
    removeFavorite,
  },
  component: withRouter(SessionDetail),
});
