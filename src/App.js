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
import MainContainer from "./components/MainContainer"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { createMuiTheme } from "@material-ui/core/styles"
import red from "@material-ui/core/colors/red"
import green from "@material-ui/core/colors/green"
import ThemeProvider from "@material-ui/styles/ThemeProvider"

export default props => {
    const isHoliday = false
    const holidayMessage = (
        <Typography color="primary" variant="body2">
        </Typography>
    )

    const holidayTheme = createMuiTheme({
        palette: {
            primary: red,
            secondary: green
        }
    })

    const classes = makeStyles(theme => ({
        title: {
            flexGrow: 1.01
        },
        input: {
            width: 42
        },
        small: {
            width: 250
        }
    }))()

    let component = (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Reece's Cool Timer
                    </Typography>
                </Toolbar>
            </AppBar>
            <MainContainer styleRefs={classes} hMessage={holidayMessage} />
        </div>
    )

    return isHoliday ? (
        <ThemeProvider theme={holidayTheme}>
            {component}
        </ThemeProvider>
    ) : component
}
