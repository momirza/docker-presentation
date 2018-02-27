<span class="gold">`Dockerfile`</span> for the Django App
<br>



```Dockerfile
FROM python:2-onbuild

COPY start.sh /start.sh
CMD ["/start.sh"]
```

@[1](Download from)
@[3](Copy the source code)
@[4](Start the server when container launches)

+++?image=assets/images/whale_of_a_time.jpg&size=auto 50%&color=rgb(33, 178, 143)


+++

`docker run -it ubuntu`
