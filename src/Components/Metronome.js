import React, { Component } from 'react'
import '../metronome.scss'

export default class Metronome extends Component {
    constructor(){
        super()

    this.state = {
        playing: false,
        count: 0,
        bpm: 100,
        beatsPerMeasure: 4,
    }
    }
    render() {
        const { playing, bpm } = this.state
        
        return (
            <div className='metronome'>
                <div className='bpm-slider'>
                    {bpm} BPM 
                    <input type='range' min='60' max='240' value={bpm} />
                </div>
                <button>{playing ? 'Stop' : 'Play'}</button>
                
            </div>
        )
    }
}