import React, { Component } from 'react'
import '../metronome.scss'
import click1 from '../click1.wav'
import click2 from '../click1.wav'

export default class Metronome extends Component {
    constructor(){
        super()

        this.state = {
            playing: false,
            count: 0,
            bpm: 100,
            beatsPerMeasure: 4,
        }

        this.click1 = new Audio(click1)
        this.click2 = new Audio(click2)
        
    }

    handleBpmChange = e => {
        const bpm = e.target.value
        this.setState({ bpm })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.bpm)
    }

    startStop = () => {
        this.click1.play()
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
                <button onClick={this.startStop}>
                    {playing ? 'Stop' : 'Play'}
                </button>
                
            </div>
        )
    }
}