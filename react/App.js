class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showGlasses: false
        };
    }

    toggleGlasses = () => {
        this.setState({ showGlasses: true });
    }

    render() {
        return (
            <div className="container">
                {!this.state.showGlasses && (
                    <button onClick={this.toggleGlasses}>Show Glasses</button>
                )}
                {this.state.showGlasses && (
                    <div className="glasses"></div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
