Docker allows you to build and run code in <span class="gold">containers</span>

+++

A container is a lightweight VM

+++?image=assets/images/vmvcontainers.png&size=contain



+++

@fa[bolt fa-3x]

+++

`docker run -it ubuntu`

+++

You can build you own images by writing a <span class="gray">`Dockerfile`</span>

+++?image=assets/images/holy_cow.png&size=auto 22%

+++?code=code/cow/Dockerfile&lang=dockerfile

@[1](Download Ubuntu 16.04 from Docker Registry)
@[3](Update package manager and install <span class="gray">`cowsay`</span>)
@[5](Change the default entrypoint of the container to <span class="gray">`cowsay`</span>)

+++

@fa[wrench 3x]

`docker build -t moo .`


+++

That's cool but what about microservices?

<theed face here>