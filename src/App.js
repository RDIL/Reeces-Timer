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

export default props => {
    const classes = makeStyles(theme => ({
        input: {
            width: 42
        },
        small: {
            width: 250
        }
    }))()

    return (
        <>
            {props.noAppBar ? (
                <div hidden />
            ) : (
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">Reece's Cool Timer</Typography>
                    </Toolbar>
                </AppBar>
            )}
            <MainContainer styleRefs={classes} />
        </>
    )
}
