import React from 'react';
import { Route, Redirect, Switch} from 'react-router';
import Obligations from '../Obligations/obligations';
import Sources from '../Sources/sources';
import ElaNav from '../Nav/nav';
import Header from '../Header/header';
import Filter from '../Filter/filter';

const App = () => (
        <div> 
            <Header/>
            <ElaNav />
            <Switch> 
                <Route exact path='/obligations' component={Obligations} />
                <Route exact path='/sources' component={Sources} />
                <Route exact path='/' render={() => <Redirect to="/obligations" />} />
            </Switch> 
        </div>
);

export default App;


// <Route path='/sources' component={Obligations} />
// <Route path='/obligations' component={Obligations} />
// <Redirect from='/' to='/obligations' />
// In this case redirect will match any route that starts with '/' and redirect it to Obligations
