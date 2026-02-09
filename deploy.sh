# Build new docker image
docker build --platform linux/amd64 --build-arg GOOGLE_APP_PASSWORD='$(pass show the_moss_concept_website/GOOGLE_APP_PASSWORD)'  -t niklasmoss/the-moss-concept-website . &&
# Push the new docker image to docker hub
docker push niklasmoss/the-moss-concept-website &&
# Automatically redeploy on railway so we do not have to sit around and wait for them to catch up to the fact that Dockerhub has been updated 
RAILWAY_TOKEN=$(pass show the_moss_concept_website/RAILWAY_TOKEN) railway redeploy -s the-moss-concept-website -y
