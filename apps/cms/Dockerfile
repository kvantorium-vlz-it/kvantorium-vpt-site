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
    RUN turbo prune @kvantoriumvlz/cms --docker

FROM base AS builder
    WORKDIR /app
    COPY --from=extractor /src/repo/out/json/ .
    RUN pnpm i
    #--frozen-lockfile

    COPY --from=extractor /src/repo/out/full/ .

    RUN pnpm run build

FROM busybox:1.35 AS runner
    RUN adduser -D static
    USER static
    WORKDIR /home/static

    COPY --from=builder /app/apps/cms/dist .

    CMD ["busybox", "httpd", "-f", "-v", "-p", "3333"]

# ENTRYPOINT ["tail", "-f", "/dev/null"]
