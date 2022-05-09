import './App.css';
import './Widgets/Widgets.css'
import { HomeApp, Profile} from "./Pages"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
function App() {
  let routes = useRoutes([
    { path: "/", element: <HomeApp/> },
    { path:'/profile', element:<Profile/> },
    { path:'*', element:<HomeApp/> },
  ]);
  return routes;
};
  const AppWrapper = () => {
    return (
      <Router>
        <App />
      </Router>
    );  
}

export default AppWrapper;
