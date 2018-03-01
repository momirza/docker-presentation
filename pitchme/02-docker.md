
@fa[bolt fa-3x]

+++

`docker run -it ubuntu`

+++?image=assets/images/holy_cow.png&size=auto 22%

+++?code=code/cow/Dockerfile&lang=dockerfile

@[1](Download Ubuntu 16.04 from Docker Registry)
@[3-4](Update package manager and install `cowsay`)
@[6](Change the default entrypoint for the container to `cowsay`)

+++

@fa[wrench 3x]

`docker build -t cowfortune .`

+++?image=assets/images/whale_of_a_time.jpg&size=auto 50%&color=rgb(33, 178, 143)
