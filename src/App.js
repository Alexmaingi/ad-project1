import './App.css';
import Button from './components/Button.jsx';
import Icon from './components/Icon.jsx';

function App() {
    return ( <
        div className = "App" >
        <
        Button type = "button"
        styler = "btn btn-primary" > Primary < /Button> <
        Button type = "button"
        styler = "btn btn-secondary" > Secondary < /Button> <
        Button type = "button"
        styler = "btn btn-success" > Success < /Button> <
        Button type = "button"
        styler = "btn btn-danger" > Danger < /Button> <
        Button type = "button"
        styler = "btn btn-warning" > Warning < /Button> <
        Button type = "button"
        styler = "btn btn-info" > Info < /Button> <
        Button type = "button"
        styler = "btn btn-light" > Light < /Button> <
        Button type = "button"
        styler = "btn btn-dark" > Dark < /Button> <
        /div>
    );
}

export default App;