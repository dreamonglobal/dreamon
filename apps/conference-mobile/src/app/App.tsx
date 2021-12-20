import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'
import '@ionic/react/css/display.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/float-elements.css'
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/typography.css'
import React, { useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import Menu from './components/Menu'
import RedirectToLogin from './components/RedirectToLogin'
import { AppContextProvider } from './data/AppContext'
import { connect } from './data/connect'
import { loadConfData } from './data/sessions/sessions.actions'
import {
  loadUserData,
  setIsLoggedIn,
  setUsername,
} from './data/user/user.actions'
import { Schedule } from './models/Schedule'
import MainTabs from './pages/MainTabs'
/* Theme variables */
import './theme/variables.css'

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <IonicAppConnected />
    </AppContextProvider>
  )
}

interface StateProps {
  darkMode: boolean
  schedule: Schedule
}

interface DispatchProps {
  loadConfData: typeof loadConfData
  loadUserData: typeof loadUserData
  setIsLoggedIn: typeof setIsLoggedIn
  setUsername: typeof setUsername
}

interface IonicAppProps extends StateProps, DispatchProps {}

const IonicApp: React.FC<IonicAppProps> = ({
  darkMode,
  schedule,
  setIsLoggedIn,
  setUsername,
  loadConfData,
  loadUserData,
}) => {
  useEffect(() => {
    loadUserData()
    loadConfData()
    // eslint-disable-next-line
  }, [])

  return schedule.groups.length === 0 ? (
    <div></div>
  ) : (
    <IonApp className={`${darkMode ? 'dark-theme' : ''}`}>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            {/*
                We use IonRoute here to keep the tabs state intact,
                which makes transitions between tabs and non tab pages smooth
                */}
            <Route path="/tabs" render={() => <MainTabs />} />
            <Route
              path="/logout"
              render={() => {
                return (
                  <RedirectToLogin
                    setIsLoggedIn={setIsLoggedIn}
                    setUsername={setUsername}
                  />
                )
              }}
            />
            <Route
              path="/"
              exact
              render={() => <Redirect to="/tabs/schedule" />}
            />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  )
}

export default App

const IonicAppConnected = connect<{}, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    darkMode: state.user.darkMode,
    schedule: state.data.schedule,
  }),
  mapDispatchToProps: {
    loadConfData,
    loadUserData,
    setIsLoggedIn,
    setUsername,
  },
  component: IonicApp,
})
