FROM gitpod/workspace-full

USER root

ENV NODE_VERSION="12.13.0"

RUN nvm install ${NODE_VERSION} \
    && npm config set python /usr/bin/python --global \
    && npm config set python /usr/bin/python \
    && npm install -g typescript yarn

ENV PATH=/home/gitpod/.nvm/versions/node/v${NODE_VERSION}/bin:$PATH
