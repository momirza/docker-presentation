Docker allows you to build and run in code in <span class="gold">containers</span>

+++

@fa[bolt fa-3x]

+++

`docker run -it ubuntu`

+++?image=assets/images/holy_cow.png&size=auto 22%

+++?code=code/cow/Dockerfile&lang=dockerfile

@[1](Download Ubuntu 16.04 from Docker Registry)
@[3-4](Update package manager and install <span class="gray">`cowsay`</span>)
@[6](Change the default entrypoint of the container to <span class="gray">`cowsay`</span>)

+++

@fa[wrench 3x]

`docker build -t moo .`

+++?image=assets/images/whale_of_a_time.jpg&size=auto 30%&color=rgb(33, 178, 143)
