import React, { Component } from 'react'

class NewTweet extends Component {
    state = {
        text: '',
    }
    handleChange = (e) => {
        const text = e.target.value 

        this.setState(() => ({
            text
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { text } = this.state
        console.log('New Tweet: ', text)

        // todo: Add Tweet to Store

        this.setState(() => ({
            text: ''
        }))
    }
    render() {
        const { text } = this.state
        {/* todo: Redirect to / if submitted */}
        const textLeft = 280 - text.length 

        return (
            <div>
                <h3 className='center'>Compose new Tweet</h3>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <textarea 
                      placeHolder="What's happening?"
                      value={text}
                      onChange={this.handleChange}
                      className='textarea'
                      maxLength={280}
                    />
                    {textLeft <= 100 && (
                        <div className='tweet-length'>
                            {textLeft}
                        </div>
                    )}
                    <button
                        className='btn'
                        type='submit'
                        disabled={text === ''}>
                       Submit 
                    </button>
                </form>
            </div>
        )
    }
}

export default NewTweet