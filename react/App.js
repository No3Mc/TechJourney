class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showGlasses: false
        };
    }

    toggleGlasses = () => {
        this.setState(prevState => ({ showGlasses: !prevState.showGlasses }));
    }

    render() {
        return (
            <div className="container">
                <div className="button-container">
                    <button onClick={this.toggleGlasses}>
                        {this.state.showGlasses ? "Hide Glasses" : "Show Glasses"}
                    </button>
                </div>
                <div className="glasses-container"
                     style={{ "--glasses-top-margin": "30%", "--glasses-top-offset": "0", "--glasses-bottom-offset": "0" }}>
                    {this.state.showGlasses && (
                        <div className="glasses">
                            <div className="lens left"></div>
                            <div className="lens right"></div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
