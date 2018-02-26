<span class="gold">`Dockerfile`</span> for the Django App
<br>



```Dockerfile
FROM python:2-onbuild

COPY start.sh /start.sh
CMD ["/start.sh"]
```

@[1](Download from)
@[3](Copy the source code)
@[5](Start the server when container launches)