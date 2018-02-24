@title[Introduction]
## Development with Containers
##### <span style="font-family:Helvetica Neue; font-weight:bold">Using <span style="color:#0075c9">Docker</span> locally</span>

---


### <span class="gold">Dockerfile</span>
<br>

```Dockerfile
# Dockerfile

FROM python:2-onbuild

COPY start.sh /start.sh

EXPOSE 8000


CMD ["/start.sh"]
```

@[1](Add your PITCHME.md slideshow content file.)
@[2](Commit PITCHME.md to your local repo.)
@[3](Push PITCHME.md to your public repo and you're done!)
@[5](Supports GitHub, GitLab, Bitbucket, GitBucket, Gitea, and Gogs.)