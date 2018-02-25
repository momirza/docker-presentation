@title[Introduction]
## Development with Containers
##### <span style="font-family:Helvetica Neue; font-weight:bold">Using <span style="color:#0075c9">Docker</span> locally</span>

@fa[docker]

---?image=assets/images/61030003.jpg&size=contain

--- 

Installing a simple python app
 
+++


```bash
$ pip install some-package
Error: You have no permissions
``` 

+++?image=assets/images/use_pyenv.jpg&size=contain

![works on my machine](assets/images/works_on_my_machine.png)

+++

stack overflow

+++

![vulnerability](assets/images/python_exploit.png)


+++?image=assets/images/totem.jpg&size=contain



---

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

