class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wearingGlasses: false
        };
    }

    toggleGlasses = () => {
        this.setState(prevState => ({
            wearingGlasses: !prevState.wearingGlasses
        }));
    }

    render() {
        return (
            <div className="container">
                <button onClick={this.toggleGlasses}>Toggle Glasses</button>
                <div className={`person ${this.state.wearingGlasses ? 'with-glasses' : ''}`}></div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
