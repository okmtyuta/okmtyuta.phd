FROM python:3.12

RUN apt-get update && apt-get install -y --no-install-recommends curl ca-certificates

ADD https://astral.sh/uv/install.sh /uv-installer.sh
RUN sh /uv-installer.sh && rm /uv-installer.sh
ENV PATH="/root/.local/bin/:$PATH"

ADD . /project

WORKDIR /project/apps/survey/api
RUN uv sync --frozen

CMD ["uv", "run", "flask", "--app", "src/main.py", "run", "--host=0.0.0.0"]
