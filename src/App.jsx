import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";


function App() {
  return (
    <>
      <Router basename="/FoodRecipes">
        <Header />
        <main className="container content">
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contact} />
            <Route exact path="/category/:name" component={Category}  />
            <Route exact path="/meal/:id" component={Recipe}  />
            <Route component={NotFound}></Route>
          </Switch>

        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
