/**
 * MIT License
 * Copyright (c) 2021 Reece Dunham
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import React from "react"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Slider from "@material-ui/core/Slider"
import Input from "@material-ui/core/Input"
import Button from "@material-ui/core/Button"
import Clock from "@material-ui/icons/Alarm"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Grid from "@material-ui/core/Grid"
import LoadableSound from "./LoadableSound"

const vids = ["Xylophone Notes", "Birds Chirping", "Bell"]
const ids = ["258OTDCrHg0", "54n9E_LwQvQ", "hrqIq5hBFSw"]
const start_ats = [null, null, "6"]
let listOfVideos = []

for (let key in vids) {
    listOfVideos.push(
        <MenuItem value={[ids[key], start_ats[key]]}>{vids[key]}</MenuItem>
    )
}

export const prettySecondsValue = (secondsCountNumber) => {
    return secondsCountNumber < 10
        ? `0${secondsCountNumber}`
        : secondsCountNumber
}

export default (props) => {
    const [isTimerRunning, setTimerIsRunning] = React.useState(false)

    const [secondsValue, setSecondsValue] = React.useState(0)
    const [minutesValue, setMinutesValue] = React.useState(10)

    const [sound, setSound] = React.useState("")

    const handleSecondSliderChange = (event, newValue) => {
        setSecondsValue(newValue)
    }
    const handleSecondInputChange = (event) => {
        setSecondsValue(
            event.target.value === "" ? "" : Number(event.target.value)
        )
    }

    const handleMinuteInputChange = (event) => {
        setMinutesValue(
            event.target.value === "" ? "" : Number(event.target.value)
        )
    }
    const handleMinuteSliderChange = (_event, newValue) => {
        setMinutesValue(newValue)
    }

    const handleSoundChange = (event) => setSound(event.target.value)

    const toggleRunStatus = (event) => setTimerIsRunning(!isTimerRunning)

    const handleBlur = () => {
        if (secondsValue < 0 || secondsValue > 60) {
            setSecondsValue(0)
        }
    }

    const handleMBlur = () => {
        if (minutesValue < 0 || minutesValue > 60) {
            setMinutesValue(0)
        }
    }

    React.useEffect(() => {
        setTimeout(() => {
            // the component constantly re-renders, and so every
            // time it rerenders on the second, it runs this
            if (isTimerRunning) {
                if (secondsValue < 1) {
                    if (!minutesValue < 1) {
                        setSecondsValue(59)
                        setMinutesValue(minutesValue - 1)
                    }
                } else {
                    setSecondsValue(secondsValue - 1)
                }
            }
        }, 1000)
    })

    return (
        <Paper
            style={{
                padding: "35px",
                margin: "15px",
            }}
        >
            <Typography variant="h2">
                {!isTimerRunning
                    ? "Timer"
                    : `${minutesValue}:${prettySecondsValue(secondsValue)}`}
            </Typography>
            <br />
            <div>
                <Grid container justify="center" alignItems="center">
                    <div
                        hidden={isTimerRunning}
                        className={props.styleRefs.small}
                    >
                        <br />
                        <Typography variant="overline">Minutes</Typography>
                        <Slider
                            value={
                                typeof minutesValue === "number"
                                    ? minutesValue
                                    : 0
                            }
                            onChange={handleMinuteSliderChange}
                            max="60"
                        />
                        <Input
                            className={props.styleRefs.input}
                            value={minutesValue}
                            margin="dense"
                            onChange={handleMinuteInputChange}
                            onBlur={handleMBlur}
                            inputProps={{
                                step: 1,
                                min: 0,
                                max: 60,
                                type: "number",
                            }}
                        />
                        <br />
                        <br />
                        <br />
                        <Typography variant="overline">Seconds</Typography>
                        <Slider
                            value={
                                typeof secondsValue === "number"
                                    ? secondsValue
                                    : 0
                            }
                            onChange={handleSecondSliderChange}
                            max="60"
                        />
                        <Input
                            className={props.styleRefs.input}
                            value={secondsValue}
                            margin="dense"
                            onChange={handleSecondInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                                step: 1,
                                min: 0,
                                max: 60,
                                type: "number",
                            }}
                        />
                        <br />
                        <br />
                        <br />
                        <Typography variant="overline">
                            Completion Sound
                        </Typography>
                        <form autoComplete="off">
                            <Select onChange={handleSoundChange} value={sound}>
                                {listOfVideos}
                            </Select>
                        </form>
                        <br />
                    </div>
                </Grid>
                <br />
                <Button
                    variant="contained"
                    startIcon={<Clock />}
                    onClick={toggleRunStatus}
                    disabled={
                        !isTimerRunning &&
                        minutesValue === 0 &&
                        secondsValue === 0
                    }
                    color={isTimerRunning ? "secondary" : "primary"}
                >
                    {isTimerRunning ? "Stop!" : "Begin!"}
                </Button>
                <br />
            </div>
            <br />
            <LoadableSound
                data={sound}
                show={
                    // eslint-disable-next-line
                    isTimerRunning && secondsValue <= 3 && minutesValue == 0
                }
            />
        </Paper>
    )
}
