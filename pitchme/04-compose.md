
`docker-compose.yml`

+++?code=code/docker-compose.yml&lang=yaml

@[3](Define your services here)
@[4-7](A frontend service)
@[8-16](A backend service)
@[4-5, 8-9](Build context)
@[4, 6-7, 8, 10-11](Volumes mounts – <span class="gray">`host:container`</span>)
@[12-14](Environment variables)

+++?image=assets/images/whale_of_a_time.jpg&size=auto 45%&color=rgb(33, 178, 143)

<br><br><br><br><br><br>
<span class="white">`docker-compose up --build`</span>

+++


That wasn't so painful!

