import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomeContainer from 'containers/home-container/home-container.component'
import PhrasesContainer from 'containers/phrases-container/phrases-container.component'
import NotificationsContainer from 'containers/notifications-container/notifications-container.component'
import AboutContainer from 'containers/about-container/about-container.component'
import NotFoundContainer from 'containers/notfound-container/notfound-container.component'
import ChatContainer from 'containers/chat-container/chat-container.component'

const LayoutContent = () =>
  <div>
    <Switch>
      <Route exact path='/' component={HomeContainer} />
      <Route exact path='/phrases' component={PhrasesContainer} />
      <Route exact path='/notifications' component={NotificationsContainer} />
      <Route exact path='/about' component={AboutContainer} />
      <Route exact path='/chat' component={ChatContainer} />
      <Route exact path='*' component={NotFoundContainer} />
    </Switch>
  </div>

export default LayoutContent