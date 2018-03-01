
Installing a simple python app
 
+++

```bash
$ pip install some-package
Error: You have no permissions
``` 

+++?image=assets/images/works.png&size=cover

+++?image=assets/images/stack-overflow.png&size=contain

+++

![vulnerability](assets/images/python_exploit.png)


+++?image=assets/images/ughh.JPG&size=cover


+++?image=assets/images/61030003.jpg&size=contain


+++

```bash
Unhandled exception in thread started by <function wrapper at 0x108e72c80>
Traceback (most recent call last):
  File "/Users/mo/.virtualenvs/django/lib/python2.7/site-packages/django/utils/autoreload.py", line 226, in wrapper
    fn(*args, **kwargs)
  File "/Users/mo/.virtualenvs/django/lib/python2.7/site-packages/django/core/management/commands/runserver.py", line 116, in inner_run
    self.check(display_num_errors=True)
  File "/Users/mo/.virtualenvs/django/lib/python2.7/site-packages/django/core/management/base.py", line 426, in check
    include_deployment_checks=include_deployment_checks,
  File "/Users/mo/.virtualenvs/django/lib/python2.7/site-packages/django/core/checks/registry.py", line 75, in run_checks
    new_errors = check(app_configs=app_configs)
  File "/Users/mo/.virtualenvs/django/lib/python2.7/site-packages/django/core/checks/urls.py", line 13, in check_url_config
    return check_resolver(resolver)
  File "/Users/mo/.virtualenvs/django/lib/python2.7/site-packages/django/core/checks/urls.py", line 23, in check_resolver
    for pattern in resolver.url_patterns:
  File "/Users/mo/.virtualenvs/django/lib/python2.7/site-packages/django/utils/functional.py", line 33, in __get__
    res = instance.__dict__[self.name] = self.func(instance)
  File "/Users/mo/.virtualenvs/django/lib/python2.7/site-packages/django/core/urlresolvers.py", line 417, in url_patterns
    patterns = getattr(self.urlconf_module, "urlpatterns", self.urlconf_module)
  File "/Users/mo/.virtualenvs/django/lib/python2.7/site-packages/django/utils/functional.py", line 33, in __get__
    res = instance.__dict__[self.name] = self.func(instance)
  File "/Users/mo/.virtualenvs/django/lib/python2.7/site-packages/django/core/urlresolvers.py", line 410, in urlconf_module
    return import_module(self.urlconf_name)
  File "/usr/local/Cellar/python/2.7.13/Frameworks/Python.framework/Versions/2.7/lib/python2.7/importlib/__init__.py", line 37, in import_module
    __import__(name)
  File "/Users/mo/iwoca/iwoca-django/uk/urls.py", line 9, in <module>
    from iwoca_django.urls import urlpatterns as urlpatterns_common, handler404
  File "/Users/mo/iwoca/iwoca-django/iwoca_django/urls.py", line 90, in <module>
    url(r'^api/', include('api.urls', namespace='api')),
  File "/Users/mo/.virtualenvs/django/lib/python2.7/site-packages/django/conf/urls/__init__.py", line 52, in include
    urlconf_module = import_module(urlconf_module)
  File "/usr/local/Cellar/python/2.7.13/Frameworks/Python.framework/Versions/2.7/lib/python2.7/importlib/__init__.py", line 37, in import_module
    __import__(name)
  File "/Users/mo/iwoca/iwoca-django/api/urls.py", line 85, in <module>
    url(r'^lending/', include('api.lending.urls', namespace='lending')),
  File "/Users/mo/.virtualenvs/django/lib/python2.7/site-packages/django/conf/urls/__init__.py", line 52, in include
    urlconf_module = import_module(urlconf_module)
  File "/usr/local/Cellar/python/2.7.13/Frameworks/Python.framework/Versions/2.7/lib/python2.7/importlib/__init__.py", line 37, in import_module
    __import__(name)
  File "/Users/mo/iwoca/iwoca-django/api/lending/urls.py", line 4, in <module>
    from api.lending.v1 import urls as v1_urls
  File "/Users/mo/iwoca/iwoca-django/api/lending/v1/urls.py", line 3, in <module>
    from api.lending.v1.views.account_statement import AccountStatementView
  File "/Users/mo/iwoca/iwoca-django/api/lending/v1/views/account_statement.py", line 9, in <module>
    from api.lending.utils import is_pdf_content
  File "/Users/mo/iwoca/iwoca-django/api/lending/utils.py", line 12, in <module>
    from api.lending.state.store.logic import normalize_string, store_to_django, StateStoreError
  File "/Users/mo/iwoca/iwoca-django/api/lending/state/store/logic.py", line 22, in <module>
    from fraud_detect.tasks import fetch_identity_verification_file
  File "/Users/mo/iwoca/iwoca-django/fraud_detect/tasks.py", line 4, in <module>
    import magic
  File "/Users/mo/.virtualenvs/django/lib/python2.7/site-packages/magic.py", line 176, in <module>
    raise ImportError('failed to find libmagic.  Check your installation')
ImportError: failed to find libmagic.  Check your installation
```

+++

Is there a better way?