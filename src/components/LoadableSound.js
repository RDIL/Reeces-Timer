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
import { buildYouTubeEmbedUrl } from "../Utilities"

export default props => {
    return props.show && props.video_id !== null ? (
        <iframe
            width="0"
            height="0"
            src={buildYouTubeEmbedUrl(props.video_id)}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            title="music"
        />
    ) : (
        <div hidden />
    )
}