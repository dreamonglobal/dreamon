import React, { useState, useRef } from 'react'
import {
  IonToolbar,
  IonContent,
  IonPage,
  IonButtons,
  IonTitle,
  IonMenuButton,
  IonSegment,
  IonSegmentButton,
  IonButton,
  IonIcon,
  IonSearchbar,
  IonRefresher,
  IonRefresherContent,
  IonToast,
  IonModal,
  IonHeader,
  getConfig,
} from '@ionic/react'
import { options, search } from 'ionicons/icons'

import SessionList from '../components/SessionList'
import SessionListFilter from '../components/SessionListFilter'
import './SchedulePage.scss'

import ShareSocialFab from '../components/ShareSocialFab'

import * as selectors from '../data/selectors'
import { connect } from '../data/connect'
import { loadConfData, setSearchText } from '../data/sessions/sessions.actions'
import { Schedule } from '@dreamon/conference-schedule'
import { RefresherEventDetail } from '@ionic/core'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OwnProps {}

interface StateProps {
  schedule: Schedule
  favoritesSchedule: Schedule
  mode: 'ios' | 'md'
}

interface DispatchProps {
  setSearchText: typeof setSearchText
  loadConfData: typeof loadConfData
}

type SchedulePageProps = OwnProps & StateProps & DispatchProps

const SchedulePage: React.FC<SchedulePageProps> = ({
  favoritesSchedule,
  schedule,
  setSearchText,
  loadConfData,
  mode,
}) => {
  const [segment, setSegment] = useState<'all' | 'favorites'>('all')
  const [showSearchbar, setShowSearchbar] = useState<boolean>(false)
  const [showFilterModal, setShowFilterModal] = useState(false)
  const [showCompleteToast, setShowCompleteToast] = useState(false)
  const [refreshing, setRefreshing] = useState<boolean>(false)

  const pageRef = useRef<HTMLElement>(null)

  const ios = mode === 'ios'

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
    <IonPage ref={pageRef} id="schedule-page">
      <IonHeader translucent={true}>
        <IonToolbar>
          {!showSearchbar && (
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
          )}
          {ios && (
            <IonSegment
              value={segment}
              onIonChange={(e) => setSegment(e.detail.value as any)}
            >
              <IonSegmentButton value="all">All</IonSegmentButton>
              <IonSegmentButton value="favorites">Favorites</IonSegmentButton>
            </IonSegment>
          )}
          {!ios && !showSearchbar && <IonTitle>Schedule</IonTitle>}
          {showSearchbar && (
            <IonSearchbar
              showCancelButton="always"
              placeholder="Search"
              onIonChange={(e: CustomEvent) => {
                setRefreshing(true)
                setSearchText(e.detail.value)
                setRefreshing(false)
              }}
              onIonCancel={() => {
                setRefreshing(true)
                setShowSearchbar(false)
                setRefreshing(false)
              }}
            ></IonSearchbar>
          )}

          <IonButtons slot="end">
            {!ios && !showSearchbar && (
              <IonButton onClick={() => setShowSearchbar(true)}>
                <IonIcon slot="icon-only" icon={search}></IonIcon>
              </IonButton>
            )}
            {!showSearchbar && (
              <IonButton onClick={() => setShowFilterModal(true)}>
                {mode === 'ios' ? (
                  'Filter'
                ) : (
                  <IonIcon icon={options} slot="icon-only" />
                )}
              </IonButton>
            )}
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Schedule</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonSearchbar
              placeholder="Search"
              onIonChange={(e: CustomEvent) => setSearchText(e.detail.value)}
            ></IonSearchbar>
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

        {!refreshing && schedule ? (
          <>
            <SessionList
              schedule={schedule}
              listType={segment}
              hide={segment === 'favorites'}
            />

            <SessionList
              schedule={favoritesSchedule}
              listType={segment}
              hide={segment === 'all'}
            />
          </>
        ) : null}
      </IonContent>

      <IonModal
        isOpen={showFilterModal}
        onDidDismiss={() => setShowFilterModal(false)}
        swipeToClose={true}
        presentingElement={pageRef.current!}
      >
        <SessionListFilter
          onFilterChange={() => {
            setRefreshing(true)
            setTimeout(() => {
              setRefreshing(false)
            }, 100)
          }}
          onDismissModal={() => setShowFilterModal(false)}
        />
      </IonModal>

      <ShareSocialFab />
    </IonPage>
  )
}

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    schedule: selectors.getSearchedSchedule(state),
    favoritesSchedule: selectors.getGroupedFavorites(state),
    mode: getConfig()!.get('mode'),
  }),
  mapDispatchToProps: {
    setSearchText,
    loadConfData,
  },
  component: React.memo(SchedulePage),
})
