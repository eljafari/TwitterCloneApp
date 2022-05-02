import Feed  from './Feed/Feed';
import './App.css';
import Sidebar from './SideBar/Sidebar';
import './Widgets/Widgets.css'
import Widgets from './Widgets/Widgets';

function App() {
  return (
    <div className="app">
     {/* SideBar */}
    <Sidebar/>
     {/* Feed */}
    <Feed/>
     {/* Widgets */}
     <Widgets/>
    </div>
  );
}

export default App;
