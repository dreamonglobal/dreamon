import React, { ReactElement } from 'react'
import Layout from './layout'
import { LocaleProvider } from '../hooks/useLocale'

const App = ({ children }: { children }): ReactElement => (
  <LocaleProvider>
    <Layout>{children}</Layout>
  </LocaleProvider>
)

export default App
