/**
 * Copyright 2019-present Reece Dunham
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
import { prettySecondsValue } from "../Utilities"
import LoadableSound from "./LoadableSound"

const vids = ["Birds Chirping", "Xylophone Notes", "Bell"]
const ids = ["54n9E_LwQvQ", "258OTDCrHg0", "hrqIq5hBFSw"]
const start_ats = [null, null, "6"]
let listOfVideos = []

for (let key in vids) {
    listOfVideos.push(
        <MenuItem value={[ids[key], start_ats[key]]}>{vids[key]}</MenuItem>
    )
}

export default props => {
    const [isTimerRunning, setTimerIsRunning] = React.useState(false)

    const [secondsValue, setSecondsValue] = React.useState(0)
    const [minutesValue, setMinutesValue] = React.useState(10)

    const [sound, setSound] = React.useState("")

    const handleSecondSliderChange = (event, newValue) => {
        setSecondsValue(newValue)
    }
    const handleSecondInputChange = event => {
        setSecondsValue(
            event.target.value === "" ? "" : Number(event.target.value)
        )
    }

    const handleMinuteInputChange = event => {
        setMinutesValue(
            event.target.value === "" ? "" : Number(event.target.value)
        )
    }
    const handleMinuteSliderChange = (event, newValue) => {
        setMinutesValue(newValue)
    }

    const handleSoundChange = event => setSound(event.target.value)

    const toggleRunStatus = event => setTimerIsRunning(!isTimerRunning)

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

            return () => {}
        }, 1000)
    })

    return (
        <Paper
            style={{
                padding: "35px",
                margin: "15px"
            }}
        >
            <Typography variant="h2">
                {!isTimerRunning
                    ? "Timer"
                    : `${minutesValue}:${prettySecondsValue(secondsValue)}`}
            </Typography>
            <Typography color="primary" variant="body2">
                Happy Thanksgiving!
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
                                type: "number"
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
                                type: "number"
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
                        /* eslint-disable */
                        !isTimerRunning &&
                        minutesValue == 0 &&
                        secondsValue == 0
                        /* eslint-enable */
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
