FROM node:20-slim AS base
    RUN apt update

    ARG SANITY_STUDIO_PROJECT_ID
    ARG SANITY_STUDIO_DATASET
    ARG SANITY_API_VERSION

    ENV PNPM_HOME="/pnpm"
    ENV PATH="$PNPM_HOME:$PATH"

    RUN npm i -g corepack
    RUN corepack enable pnpm
    RUN corepack use pnpm

    RUN pnpm i -g turbo
    RUN pnpm i -g tsx

    WORKDIR /src/repo/

FROM base AS extractor
    COPY . /src/repo/
    RUN turbo prune @kvantoriumvlz/web --docker

FROM base AS builder
    WORKDIR /app
    COPY --from=extractor /src/repo/out/json/ .
    RUN pnpm i
    #--frozen-lockfile

    COPY --from=extractor /src/repo/out/full/ .

    ARG SANITY_STUDIO_PROJECT_ID
    ARG SANITY_STUDIO_DATASET
    ARG SANITY_API_VERSION
    ARG YANDEX_MAPS_API_KEY

    ENV NUXT_SANITY_STUDIO_PROJECT_ID=${SANITY_STUDIO_PROJECT_ID}
    ENV NUXT_SANITY_STUDIO_DATASET=${SANITY_STUDIO_DATASET}
    ENV NUXT_SANITY_API_VERSION=${SANITY_API_VERSION}
    ENV NUXT_YANDEX_MAPS_API_KEY=${YANDEX_MAPS_API_KEY}

    RUN pnpm run build

FROM node:20-slim AS runner

    WORKDIR /app
    COPY --from=builder /app/apps/web/.output/ .

    ENTRYPOINT [ "node", "server/index.mjs" ]

    # ENTRYPOINT ["tail", "-f", "/dev/null"]
