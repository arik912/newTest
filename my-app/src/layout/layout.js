import React from 'react'
import Menu from '../components/menu/menu'
import PostContainer from '../containers/PostConteiner'
import CurrentPostContainer from '../containers/CurrentPostContainer'
import { Switch, Route } from 'react-router-dom'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import SimplaPage from '../components/simplePage/simplaPage'

function Layout() {
    return (
        <>
            <Header>
                <Menu />
            </Header>
            <main>
                <Switch>
                    <Route path="/about/" render={() => <SimplaPage pageName={'about'}/>} />
                    <Route path="/contact/" render={() => <SimplaPage pageName={'contact'}/>} />
                    <Route path="/post/:id" render={() => <CurrentPostContainer />} />
                    <Route path="/" render={() => <PostContainer />} />
                </Switch>
            </main>
            <Footer>
                <Menu />
            </Footer>
        </>
    )

}
export default Layout