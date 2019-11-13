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
import Card from "@material-ui/core/Card"
import { makeStyles } from "@material-ui/core/styles"
import Slider from "@material-ui/core/Slider"
import Input from "@material-ui/core/Input"
import Button from "@material-ui/core/Button"
import Clock from "@material-ui/icons/Alarm"
import Tooltip from "@material-ui/core/Tooltip"
import { prettySecondsValue } from "../TimeUtils"

export default props => {
    const classes = makeStyles(theme => ({
        button: {
            margin: theme.spacing(1)
        },
        input: {
            width: 42
        },
        restrictedWidth: {
            width: 250,
            marginLeft: theme.spacing(2)
        }
    }))()

    let [isTimerRunning, setTimerIsRunning] = React.useState(false)

    let [titleText, setTitleText] = React.useState("Timer")

    const [secondsValue, setSecondsValue] = React.useState(0)
    const [minutesValue, setMinutesValue] = React.useState(10)

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

    const toggleRunStatus = event => setTimerIsRunning(!isTimerRunning)

    const handleBlur = () => {
        if (secondsValue < 0) {
            setSecondsValue(0)
        } else if (secondsValue > 60) {
            setSecondsValue(0)
        }
    }

    const handleAbstractBlur = () => {
        if (minutesValue < 0) {
            setMinutesValue(0)
        } else if (minutesValue > 60) {
            setMinutesValue(0)
        }
    }

    return (
        <Paper
            className={classes.button}
            style={{
                padding: "40px",
                margin: "15px"
            }}
        >
            <br />
            <Typography variant="h2">{titleText}</Typography>
            <br />
            <Card>
                <br />
                <div className={classes.restrictedWidth}>
                    <Slider
                        value={
                            typeof minutesValue === "number" ? minutesValue : 0
                        }
                        onChange={handleMinuteSliderChange}
                        max="60"
                    />
                    <Input
                        className={classes.input}
                        value={minutesValue}
                        margin="dense"
                        onChange={handleMinuteInputChange}
                        onBlur={handleAbstractBlur}
                        inputProps={{
                            step: 1,
                            min: 0,
                            max: 60,
                            type: "number"
                        }}
                    />
                    {/* BEGIN SECONDS */}
                    <Slider
                        value={
                            typeof secondsValue === "number" ? secondsValue : 0
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
                    <Typography variant="caption">
                        {isTimerRunning
                            ? ""
                            : `(${minutesValue}:${prettySecondsValue(
                                  secondsValue
                              )})`}
                    </Typography>
                </div>
                <Tooltip title="Begin Timer">
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<Clock />}
                        onClick={toggleRunStatus}
                    >
                        {isTimerRunning ? "Stop!!!" : "Let's Do This"}
                    </Button>
                </Tooltip>
                <br />
                <br />
            </Card>
            <br />
        </Paper>
    )
}
