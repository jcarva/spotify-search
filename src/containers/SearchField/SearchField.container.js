/* @flow */

// Dependencies
import * as React from 'react'

// Interfaces
type Props = {
  dispatch: Function,
  timeout: number
}

type State = {
  value: string
}

// Main Component
class SearchField extends React.Component<Props, State> {
  static defaultProps = { timeout: 500 }
  inputField: ?HTMLInputElement
  typingTimeout: any = 0
  constructor (props: Props, context: any) {
    super(props, context)
    this.state = { value: '' }
  }

  /**
   * Set the component's state and dispatch the new value
   * @return {Void}
   */
  setValue = (value: string = ''): void => {
    // This conditional is just because of the reset action. Is not recomended to change a DOM element on each event
    if (!value && this.inputField && this.inputField.value) this.inputField.value = value

    if (this.typingTimeout) clearTimeout(this.typingTimeout)
    this.setState({value})
    this.typingTimeout = setTimeout(() => { this.props.dispatch(value) }, this.props.timeout)
  }

  /**
   * Detects if the input field's value changed
   * @return {Void}
   */
  handleChange = (event: Object): void => this.setValue(event.target.value)

  /**
   * Resets the component's satte
   * @return {Void}
   */
  handleReset = (): void => this.setValue()

  /**
   * Detects if the user pressed the 'Enter' key to trigger the dispatch function
   * @return {Void}
   */
  handleKeyPress = (event: Object): void => {
    if (event.key === 'Enter') this.props.dispatch(event.target.value)
  }

  render () {
    return (
      <div>
        <input
          type='text'
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          ref={(input) => { this.inputField = input }}
        />
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

export default SearchField
