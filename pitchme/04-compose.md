+++?image=assets/images/flask-logo.png?size=contain 70%

+++?image=assets/images/react-logo.png?size=contain 70%

+++?image=assets/images/nginx-logo.png?size=contain 70%

+++?image=assets/images/mongodb-logo.png?size=contain 70%

+++?image=assets/images/whale_of_a_time.jpg&size=auto 50%&color=rgb(33, 178, 143)

+++

services diagram goes here

+++

```ascii
├── code/
│   ├── db/
│   ├── flask-backend/
│   ├── nginx/
│   ├── react-frontend/
│   └── docker-compose.yml
```

@[2-5](Services)
@[6](Configuration)

+++

`docker-compose.yml`

+++?code=code/docker-compose.yml&lang=yaml

@[3](Define your services here)
@[4-7](A frontend service)
@[8-16](A backend service)
@[4-5, 8-9](Build context)
@[4, 6-7, 8, 10-11](Volumes mounts – <span class="gray">`host:container`</span>)
@[12-14](Environment variables)

+++

`docker-compose up --build`

+++


That wasn't so painful!

