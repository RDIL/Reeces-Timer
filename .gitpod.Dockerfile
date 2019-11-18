FROM gitpod/workspace-full

USER root

RUN nvm install 12.13.0 \
    && npm config set python /usr/bin/python --global \
    && npm config set python /usr/bin/python \
    && npm install -g typescript yarn
