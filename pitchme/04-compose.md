
`docker-compose.yml`

+++?code=code/docker-compose.yml&lang=yaml

@[3](Define your services here)
@[4-7](A frontend service)
@[8-16](A backend service)
@[4-5, 8-9](Build context)
@[4, 6-7, 8, 10-11](Volumes mounts – <span class="gray">`host:container`</span>)
@[8,12-14](Environment variables)

+++?code=code/react-frontend/Dockerfile&lang=dockerfile

+++?code=code/flask-backend/Dockerfile&lang=dockerfile

+++?code=code/docker-compose.yml&lang=yaml

@[17-31](Containers built from official images)
@[19-20,25-26](Volume mounts to configure containers)
@[19-20](Data migration to populate Mongo)
@[25-26](NGINX config)
@[29-31](Upstream server dependencies)
@[8,15-16](Database dependencies)
@[21-22,27-28](Container port mappings to host)

+++?image=assets/images/demo-architecture.png&size=auto 110%

+++?image=assets/images/whale_of_a_time.jpg&size=auto 35%&color=rgb(33, 178, 143)

<br><br><br><br><br><br>
<span class="white">`docker-compose up --build`</span>

+++


That wasn't so painful!

