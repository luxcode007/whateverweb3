// router.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import App from './App';  // Your original App.js which now acts as the Feed
import Admin from './Admin';

const AppRouter = () => {
    return (
        <Router>
        <div>
            {/* Main header and navigation links */}
            <header className="App-header">
            <h1>Your News Aggregator</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/admin">Admin</Link>
            </nav>
            <div className="scrolling-strip">Your scrolling strip content here</div>
            </header>

            {/* Main content area */}
            <main className="App-content">
            <Switch>
                <Route exact path="/">
                <App />  {/* Your original App.js which now acts as the Feed */}
                </Route>
                
                <Route path="/admin">
                <Admin />
                </Route>
            </Switch>
            </main>
        </div>
        </Router>
    );
    };

export default AppRouter;
