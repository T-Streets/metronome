import React, { Component } from 'react'
import '../metronome.scss'

export default class Metronome extends Component {
    constructor(){
        super()

        this.state = {
            playing: false,
            count: 0,
            bpm: 100 || '',
            beatsPerMeasure: 4,
        }
        
    }

    handleBpmChange = e => {
        e.preventDefault()
        const bpm = e.target.value
        this.setState({ bpm })
        console.log(this.state.bpm)
    }

    handleSubmit = e => {
        e.preventDefault()
        const bpm = e.target.value
        this.setState({ bpm })
        console.log(this.state.bpm)
    }

    render() {
        const { playing, bpm } = this.state
        
        return (
            <div className='metronome'>
                <div className='bpm-slider'>
                    {bpm} BPM 
                    <input 
                        type='range' 
                        min='60' 
                        max='240' 
                        value={bpm} 
                        onChange={this.handleBpmChange}
                    />
                    <form className='bpm-input' onSubmit={this.handleSubmit}>
                        <input type='number' />
                        <input type='submit' value='Set'/>
                    </form>

                </div>
                <button>{playing ? 'Stop' : 'Play'}</button>
                
            </div>
        )
    }
}