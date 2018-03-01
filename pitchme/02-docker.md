
@fa[bolt fa-3x]

+++

`docker run -it ubuntu`

+++

<span class="gold">`Dockerfile`</span> for the Django App
<br>

+++?code=code/cow&lang=dockerfile

@[1](Download Ubuntu 16:04 from Docker Registry)
@[3-4](Update package manager and install cowsay)
@[6](Change the default entrypoint for the container to cowsay)

+++

@fa[wrench 3x]

`docker build -t cowfortune .`

+++?image=assets/images/whale_of_a_time.jpg&size=auto 50%&color=rgb(33, 178, 143)
