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

    const timeLeft = "Hi"
    let titleText = isTimerRunning? timeLeft : "Timer"

    const [tfValue, setTfValue] = React.useState(30)
    const handleSliderChange = (event, newValue) => {
        setTfValue(newValue)
    }

    const handleInputChange = event => {
        setTfValue(event.target.value === ''? '' : Number(event.target.value))
    }

    const handleBlur = () => {
        if (tfValue < 0) {
            setTfValue(0)
        } else if (tfValue > 100) {
            setTfValue(100)
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
                <Typography variant="h2">
                    {titleText}
                </Typography>
                <br />
                <Card>
                    <br />
                    <div className={classes.restrictedWidth}>
                        <Slider
                            value={typeof tfValue === 'number' ? tfValue : 0}
                            onChange={handleSliderChange}
                            max="60"
                        />
                        <Input
                            className={classes.input}
                            value={tfValue}
                            margin="dense"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                                step: 10,
                                min: 0,
                                max: 60,
                                type: 'number'
                            }}
                        />
                    </div>
                    <Tooltip title="Begin Timer">
                        <Button
                            variant="contained"
                            disabled={isTimerRunning}
                            color="primary"
                            startIcon={<Clock />}
                        >Let's Do This</Button>
                    </Tooltip>
                    <br />
                    <br />
                </Card>
            <br />
        </Paper>
    )
}