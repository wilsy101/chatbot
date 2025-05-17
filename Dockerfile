FROM nginx:alpine

# Remove the default config
RUN rm /etc/nginx/conf.d/default.conf

# Add our custom config that uses port 8080
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy your static files
COPY . /usr/share/nginx/html
