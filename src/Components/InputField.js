import React from 'react'

class InputField extends React.Component {
    constructor(props) {
        super(props)
        this.state = { input: "" }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {

        const { value } = event.target
        this.setState({ input: value })
    }

    render() {
        return (
            <div className="Groceries-Input">

                <button className="Button"
                    onClick={() => {
                        this.setState({ input: "" })
                        this.props.click(this.state.input)
                    }}>  ADD TO LIST
                </button>

                <input
                    type="text"
                    className="Inputfield"
                    value={this.state.input}
                    onChange={this.handleChange}
                    placeholder="Which Groceries are needed?"

                ></input>

            </div >
        )
    }
}
export default InputField

