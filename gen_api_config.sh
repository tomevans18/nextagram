#!/bin/sh

render_template() {
  eval "echo \"$(cat $1)\""
}

host=${METRICS_HOST:-"http://api.dev.dotography.net"}

render_template gen_domain_template.temp > static/config/endpoint-config.js

exec "$@"
