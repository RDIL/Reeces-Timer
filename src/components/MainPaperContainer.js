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
import { makeStyles } from "@material-ui/core/styles"
import Slider from "@material-ui/core/Slider"
import Input from "@material-ui/core/Input"
import Button from "@material-ui/core/Button"
import Clock from "@material-ui/icons/Alarm"
import Tooltip from "@material-ui/core/Tooltip"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Grid from "@material-ui/core/Grid"
import { prettySecondsValue } from "../Utilities"
import LoadableSound from "./LoadableSound"

const vids = ["Birds Chirping", "Xylophone Notes"]
const ids = ["54n9E_LwQvQ", "258OTDCrHg0"]
let listOfVideos = []

for (let key in vids) {
    listOfVideos.push(<MenuItem value={ids[key]}>{vids[key]}</MenuItem>)
}

export default props => {
    const classes = makeStyles(theme => ({
        input: {
            width: 42
        },
        restrictedWidth: {
            width: 250
        }
    }))()

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
        if (secondsValue < 0) {
            setSecondsValue(0)
        } else if (secondsValue > 60) {
            setSecondsValue(0)
        }
    }

    const handleMBlur = () => {
        if (minutesValue < 0) {
            setMinutesValue(0)
        } else if (minutesValue > 60) {
            setMinutesValue(0)
        }
    }

    React.useEffect(() => {
        setTimeout(() => {
            // every 1 second, the component will unmount,
            // remount, and then run this
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
            <br />
            <div>
                <Grid container justify="center" alignItems="center">
                    <div
                        hidden={isTimerRunning}
                        className={classes.restrictedWidth}
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
                            className={classes.input}
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
                            className={classes.input}
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
                <Tooltip title={isTimerRunning ? "Stop Timer" : "Begin Timer"}>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<Clock />}
                        onClick={toggleRunStatus}
                    >
                        {isTimerRunning ? "Stop!" : "Begin!"}
                    </Button>
                </Tooltip>
                <br />
            </div>
            <br />
            <LoadableSound
                video_id={sound}
                show={
                    isTimerRunning &&
                    // eslint-disable-next-line
                    secondsValue <= 3 &&
                    // eslint-disable-next-line
                    minutesValue == 0
                }
            />
        </Paper>
    )
}
