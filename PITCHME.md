@title[Introduction]
## Development with Containers
##### <span style="font-family:Helvetica Neue; font-weight:bold">Using <span style="color:#0075c9">Docker</span> locally</span>

@fa[docker]

---?image=assets/images/61030003.jpg

--- 

Installing a simple python app
 
+++


```bash
$ pip install some-package
Error: You have no permissions
``` 


+++

![usevirtualenv](assets/images/python_exploit.jpg)

+++

![vulnerability](assets/images/python_exploit.jpg)

+++

+++?image=assets/images/totem.jpg


---

<span class="gold">`Dockerfile`</span> for the Django App
<br>



```Dockerfile
FROM python:2-onbuild

COPY start.sh /start.sh

CMD ["/start.sh"]
```

@[1](Download from .)
@[3](Start the server)
@[3](Push PITCHME.md to your public repo and you're done!)

