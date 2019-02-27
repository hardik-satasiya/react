FROM nginxinc/nginx-unprivileged:stable

## Copy our default nginx config
COPY deploy/lightelligence-design-system/nginx.conf /etc/nginx/conf.d/default.conf

# Copy assets over
# NOTE: These have to be built first with "npm run build"
COPY docs /usr/share/nginx/html/react