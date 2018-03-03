
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

