import { getMode } from '@ionic/core'
import {
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { call, construct, document, hammer, restaurant } from 'ionicons/icons'
import React from 'react'
import { connect } from '../data/connect'
import { updateFilteredTracks } from '../data/sessions/sessions.actions'
import './SessionListFilter.css'

interface OwnProps {
  onDismissModal: () => void
  onFilterChange: () => void
}

interface StateProps {
  allTracks: string[]
  filteredTracks: string[]
}

interface DispatchProps {
  updateFilteredTracks: typeof updateFilteredTracks
}

type SessionListFilterProps = OwnProps & StateProps & DispatchProps

const SessionListFilter: React.FC<SessionListFilterProps> = ({
  allTracks,
  filteredTracks,
  onDismissModal,
  onFilterChange,
  updateFilteredTracks,
}) => {
  const ios = getMode() === 'ios'

  const toggleTrackFilter = (track: string) => {
    onFilterChange()
    if (filteredTracks.indexOf(track) > -1) {
      updateFilteredTracks(filteredTracks.filter((x) => x !== track))
    } else {
      updateFilteredTracks([...filteredTracks, track])
    }
  }

  const handleDeselectAll = () => {
    updateFilteredTracks([])
  }

  const handleSelectAll = () => {
    updateFilteredTracks([...allTracks])
  }

  const iconMap: { [key: string]: any } = {
    Documentation: document,
    Food: restaurant,
    Tooling: hammer,
    Breakout: construct,
    Keynote: call,
  }

  return (
    <>
      <IonHeader translucent={true} className="session-list-filter">
        <IonToolbar>
          <IonButtons slot="start">
            {ios && <IonButton onClick={onDismissModal}>Cancel</IonButton>}
            {!ios && <IonButton onClick={handleDeselectAll}>Reset</IonButton>}
          </IonButtons>

          <IonTitle>Filter Sessions</IonTitle>

          <IonButtons slot="end">
            <IonButton onClick={onDismissModal} strong>
              Done
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="session-list-filter">
        <IonList lines={ios ? 'inset' : 'full'}>
          <IonListHeader>Tracks</IonListHeader>

          {allTracks.map((track, index) => (
            <IonItem key={track}>
              {ios && (
                <IonIcon slot="start" icon={iconMap[track]} color="medium" />
              )}
              <IonLabel>{track}</IonLabel>
              <IonCheckbox
                onClick={() => toggleTrackFilter(track)}
                checked={filteredTracks.indexOf(track) !== -1}
                color="primary"
                value={track}
              ></IonCheckbox>
            </IonItem>
          ))}
        </IonList>
      </IonContent>

      {ios && (
        <IonFooter>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={handleDeselectAll}>Deselect All</IonButton>
            </IonButtons>
            <IonButtons slot="end">
              <IonButton onClick={handleSelectAll}>Select All</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonFooter>
      )}
    </>
  )
}

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    allTracks: state.data.allTracks,
    filteredTracks: state.data.filteredTracks,
  }),
  mapDispatchToProps: {
    updateFilteredTracks,
  },
  component: SessionListFilter,
})
