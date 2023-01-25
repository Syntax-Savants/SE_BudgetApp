import logo from '..//logo.svg';
import LoginPage from './LoginPage';

function DefaultPage() {
    return (<div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />


            <LoginPage />
        </header>
    </div>);
}
export default DefaultPage;