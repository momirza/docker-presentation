@title[Introduction]
## Development with Containers
##### <span style="font-family:Helvetica Neue; font-weight:bold">Using <span style="color:#0075c9">Docker</span> locally</span>


---?image=assets/images/61030003.jpg

#### <span class="gold">The current state of things</span>

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